import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { scroller } from 'react-scroll';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Pricing from '../components/Pricing';
import About from '../components/About';
import Contact from '../components/Contact';

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const stateTarget = location.state && location.state.scrollTo ? location.state.scrollTo : null;
    const hashTarget = location.hash ? location.hash.replace('#', '') : null;
    const target = stateTarget || hashTarget;

    if (target) {
      // Scroll after route load
      setTimeout(() => {
        scroller.scrollTo(target, {
          duration: 600,
          smooth: 'easeInOutQuart',
          offset: -80
        });
        // Clear state to prevent repeated scrolling
        if (stateTarget) {
          navigate('.', { replace: true, state: {} });
        }
      }, 0);
    }
  }, [location, navigate]);

  return (
    <>
      <Hero />
      <Services />
      <Projects />
      <Pricing />
      <About />
      <Contact />
    </>
  );
};

export default Home;


