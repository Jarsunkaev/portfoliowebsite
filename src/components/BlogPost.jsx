import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { FaCalendarAlt, FaClock, FaUser, FaTag, FaArrowLeft, FaShareAlt } from 'react-icons/fa';
import { blogPosts } from '../data/blogData';
import SEO from './SEO';

const BlogPostContainer = styled.div`
  min-height: 100vh;
  padding: 120px 5% 80px;
  background: var(--color-bg);
  max-width: 800px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 100px 3% 60px;
  }
`;

const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-accent1);
  text-decoration: none;
  font-weight: 600;
  margin-bottom: 2rem;
  transition: all 0.3s ease;
  
  &:hover {
    color: var(--color-accent2);
    transform: translateX(-4px);
  }
`;

const PostHeader = styled.div`
  margin-bottom: 3rem;
  
  h1 {
    font-family: var(--font-heading);
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--color-text);
    margin-bottom: 1rem;
    line-height: 1.3;
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
`;

const PostMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 2px solid var(--color-neutral);
  
  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--color-text-secondary);
    font-size: 0.95rem;
  }
`;

const PostImage = styled.div`
  height: 300px;
  background: linear-gradient(135deg, var(--color-accent1), var(--color-accent2));
  border-radius: var(--border-radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  background-image: url(${props => props.$imageUrl});
  background-size: cover;
  background-position: center;
  background-blend-mode: overlay;
  
  @media (max-width: 768px) {
    font-size: clamp(2rem, 8vw, 2.8rem);
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const PostContent = styled.div`
  line-height: 1.8;
  color: var(--color-text);
  font-size: 1.1rem;
  
  h2 {
    font-family: var(--font-heading);
    font-size: 1.8rem;
    font-weight: 600;
    color: var(--color-text);
    margin: 2rem 0 1rem;
    
    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }
  
  h3 {
    font-family: var(--font-heading);
    font-size: 1.4rem;
    font-weight: 600;
    color: var(--color-text);
    margin: 1.5rem 0 0.75rem;
    
    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }
  
  p {
    margin-bottom: 1.5rem;
    color: var(--color-text-secondary);
  }
  
  ul, ol {
    margin: 1rem 0 1.5rem 2rem;
    color: var(--color-text-secondary);
  }
  
  li {
    margin-bottom: 0.5rem;
  }
  
  blockquote {
    border-left: 4px solid var(--color-accent1);
    padding-left: 1.5rem;
    margin: 2rem 0;
    font-style: italic;
    color: var(--color-text-secondary);
    background: var(--color-neutral);
    padding: 1.5rem;
    border-radius: var(--border-radius-md);
  }
  
  code {
    background: var(--color-neutral);
    padding: 0.2rem 0.5rem;
    border-radius: var(--border-radius-sm);
    font-family: 'Courier New', monospace;
    font-size: 0.9rem;
    color: var(--color-accent1);
  }
  
  pre {
    background: var(--color-neutral);
    padding: 1.5rem;
    border-radius: var(--border-radius-md);
    overflow-x: auto;
    margin: 1.5rem 0;
    
    code {
      background: none;
      padding: 0;
      color: var(--color-text);
    }
  }
`;

const PostTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin: 2rem 0;
  padding-top: 2rem;
  border-top: 2px solid var(--color-neutral);
`;

const Tag = styled.span`
  background: var(--color-accent1);
  color: var(--color-bg);
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius-md);
  font-size: 0.9rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const ShareSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 2px solid var(--color-neutral);
  
  span {
    font-weight: 600;
    color: var(--color-text);
  }
`;

const ShareButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: var(--color-accent1);
  color: var(--color-bg);
  border: none;
  border-radius: var(--border-radius-md);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--color-accent2);
    transform: translateY(-2px);
  }
`;

const RelatedPosts = styled.div`
  margin-top: 4rem;
  padding-top: 3rem;
  border-top: 2px solid var(--color-neutral);
  
  h3 {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--color-text);
    margin-bottom: 2rem;
  }
`;

const RelatedPostCard = styled(Link)`
  display: block;
  padding: 1.5rem;
  background: var(--color-neutral);
  border-radius: var(--border-radius-md);
  text-decoration: none;
  transition: all 0.3s ease;
  margin-bottom: 1rem;
  
  &:hover {
    background: var(--color-accent1);
    color: var(--color-bg);
    transform: translateY(-2px);
    
    h4 {
      color: var(--color-bg);
    }
  }
  
  h4 {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    transition: color 0.3s ease;
  }
  
  p {
    font-size: 0.9rem;
    opacity: 0.8;
    margin: 0;
  }
`;

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <BlogPostContainer>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1>Cikk nem található</h1>
          <p>A keresett blog cikk nem létezik.</p>
          <BackButton to="/blog">
            <FaArrowLeft />
            Vissza a Bloghoz
          </BackButton>
        </motion.div>
      </BlogPostContainer>
    );
  }

  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <>
      <SEO 
        title={post.seo.title}
        description={post.seo.description}
        keywords={post.seo.keywords}
        url={`https://bitcanvas.dev/blog/${post.slug}`}
        type="article"
        publishedTime={post.publishedAt}
        modifiedTime={post.updatedAt}
        section={post.category}
        tags={post.tags}
        image={post.image}
      />
      
      <BlogPostContainer>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <BackButton to="/blog">
            <FaArrowLeft />
            Vissza a Bloghoz
          </BackButton>

          <PostHeader>
            <h1>{post.title}</h1>
          </PostHeader>

          <PostMeta>
            <span>
              <FaUser />
              {post.author}
            </span>
            <span>
              <FaCalendarAlt />
              {new Date(post.publishedAt).toLocaleDateString()}
            </span>
            <span>
              <FaClock />
              {post.readTime}
            </span>
          </PostMeta>

          <PostImage $imageUrl={post.image} />

          <PostContent dangerouslySetInnerHTML={{ __html: post.content }} />

          <PostTags>
            {post.tags.map(tag => (
              <Tag key={tag}>
                <FaTag />
                {tag}
              </Tag>
            ))}
          </PostTags>

          <ShareSection>
            <span>Share this article:</span>
            <ShareButton onClick={handleShare}>
              <FaShareAlt />
              Share
            </ShareButton>
          </ShareSection>

          {relatedPosts.length > 0 && (
            <RelatedPosts>
              <h3>Related Articles</h3>
              {relatedPosts.map(relatedPost => (
                <RelatedPostCard key={relatedPost.id} to={`/blog/${relatedPost.slug}`}>
                  <h4>{relatedPost.title}</h4>
                  <p>{relatedPost.excerpt}</p>
                </RelatedPostCard>
              ))}
            </RelatedPosts>
          )}
        </motion.div>
      </BlogPostContainer>
    </>
  );
};

export default BlogPost;
