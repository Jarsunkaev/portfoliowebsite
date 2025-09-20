import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaClock, FaUser, FaTag, FaSearch } from 'react-icons/fa';
import { blogPosts } from '../data/blogData';
import SEO from './SEO';

const BlogContainer = styled.div`
  min-height: 100vh;
  padding: 120px 5% 80px;
  background: var(--color-bg);
  
  @media (max-width: 768px) {
    padding: 100px 3% 60px;
  }
`;

const BlogHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  
  h1 {
    font-family: var(--font-heading);
    font-size: 3rem;
    font-weight: 700;
    color: var(--color-text);
    margin-bottom: 1rem;
    
    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }
  
  p {
    font-size: 1.2rem;
    color: var(--color-text-secondary);
    max-width: 600px;
    margin: 0 auto;
    
    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

const FiltersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 3rem;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const SearchBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  
  input {
    padding: 0.75rem 1rem 0.75rem 2.5rem;
    border: 2px solid var(--color-neutral);
    border-radius: var(--border-radius-md);
    background: var(--color-bg);
    color: var(--color-text);
    font-size: 1rem;
    width: 300px;
    transition: all 0.3s ease;
    
    &:focus {
      outline: none;
      border-color: var(--color-accent1);
      box-shadow: 0 0 0 3px rgba(74, 93, 35, 0.1);
    }
    
    @media (max-width: 768px) {
      width: 100%;
    }
  }
  
  svg {
    position: absolute;
    left: 0.75rem;
    color: var(--color-text-secondary);
    font-size: 1rem;
  }
`;

const FilterButton = styled.button`
  padding: 0.75rem 1.5rem;
  border: 2px solid ${props => props.$active ? 'var(--color-accent1)' : 'var(--color-neutral)'};
  background: ${props => props.$active ? 'var(--color-accent1)' : 'transparent'};
  color: ${props => props.$active ? 'var(--color-bg)' : 'var(--color-text)'};
  border-radius: var(--border-radius-md);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: var(--color-accent1);
    background: var(--color-accent1);
    color: var(--color-bg);
  }
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 400px));
  gap: 2rem;
  margin-bottom: 3rem;
  justify-content: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const BlogCard = styled(motion.div)`
  background: var(--color-bg);
  border: 2px solid var(--color-neutral);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    border-color: var(--color-accent1);
    box-shadow: var(--shadow-medium) var(--shadow-color);
    transform: translateY(-4px);
  }
`;

const BlogImage = styled.div`
  height: 200px;
  background-image: url(${props => props.$imageUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const BlogContent = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  
  h3 {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--color-text);
    margin-bottom: 0.75rem;
    line-height: 1.4;
  }
  
  p {
    color: var(--color-text-secondary);
    line-height: 1.6;
    margin-bottom: 1rem;
    flex: 1;
  }
`;

const BlogMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  
  span {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }
`;

const BlogTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const Tag = styled.span`
  background: var(--color-neutral);
  color: var(--color-text);
  padding: 0.25rem 0.75rem;
  border-radius: var(--border-radius-sm);
  font-size: 0.8rem;
  font-weight: 500;
`;

const ReadMoreButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  color: var(--color-accent1);
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    color: var(--color-accent2);
  }
`;

const NoResults = styled.div`
  text-align: center;
  padding: 3rem;
  color: var(--color-text-secondary);
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

const BlogList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.content.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesSearch;
  });

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <>
      <SEO 
        title="Blog - Webfejlesztési Tippek & Trendek"
        description="Maradjon naprakész a legújabb webfejlesztési trendekkel, tippekkel és betekintésekkel tőlem. Személyes tapasztalataim a modern web technológiákról, SEO-ról és e-kereskedelmi megoldásokról."
        keywords="webfejlesztés blog, programozási tippek, web design trendek, SEO betekintések, e-kereskedelmi fejlesztés, magyar webfejlesztés"
        url="https://bitcanvas.dev/blog"
      />
      
      <BlogContainer>
        <BlogHeader>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Személyes tapasztalataim, tippjeim és trendjeim a webfejlesztésben, e-kereskedelmi megoldásokban és digitális szolgáltatásokban
          </motion.p>
        </BlogHeader>

        <FiltersContainer>
          <SearchBox>
            <FaSearch />
            <input
              type="text"
              placeholder="Cikkek keresése..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </SearchBox>
        </FiltersContainer>

        {filteredPosts.length === 0 ? (
          <NoResults>
            <h3>Nem találhatók cikkek</h3>
            <p>Próbálja módosítani a keresési feltételeket</p>
          </NoResults>
        ) : (
          <BlogGrid>
            {[...featuredPosts, ...regularPosts].map((post, index) => (
              <BlogCard
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Link to={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                  <BlogImage $imageUrl={post.image} />
                  
                  <BlogContent>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    
                    <BlogMeta>
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
                    </BlogMeta>
                    
                    <BlogTags>
                      {post.tags.slice(0, 3).map(tag => (
                        <Tag key={tag}>{tag}</Tag>
                      ))}
                    </BlogTags>
                    
                    <ReadMoreButton to={`/blog/${post.slug}`}>
                      Tovább olvasás →
                    </ReadMoreButton>
                  </BlogContent>
                </Link>
              </BlogCard>
            ))}
          </BlogGrid>
        )}
      </BlogContainer>
    </>
  );
};

export default BlogList;
