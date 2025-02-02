import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import './Nav.css';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2rem;
  margin-top: 1rem;
  position: sticky;
`;

const Nav = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Container>
      <input
        hidden
        className="mode"
        id="theme-mode"
        type="checkbox"
        checked={isDarkMode}
        onChange={handleToggleTheme}
      />
      <div className={`container ${isDarkMode ? 'dark' : 'light'}`}>
        <div className="wrap">
          <input type="radio" id="rd-1" name="nav" className="rd-1" />
          <label htmlFor="rd-1" className="label" style={{ '--index': 0 }}>
            <Link to="/about" className="link_">
              <span>About Me</span>
            </Link>
          </label>

          <input type="radio" id="rd-2" name="nav" className="rd-2" />
          <label htmlFor="rd-2" className="label" style={{ '--index': 1 }}>
            <Link to="/summary" className="link_">
              <span>Summary</span>
            </Link>
          </label>

          <input type="radio" id="rd-3" name="nav" className="rd-3" />
          <label htmlFor="rd-3" className="label" style={{ '--index': 2 }}>
            <Link to="/portfolio" className="link_">
              <span>Portfolio</span>
            </Link>
          </label>

          <input type="radio" id="rd-4" name="nav" className="rd-4" />
          <label htmlFor="rd-4" className="label" style={{ '--index': 3 }}>
            <Link to="/viz" className="link_">
              <span>Dashboard</span>
            </Link>
          </label>

          <div className="bar"></div>
          <div className="slidebar"></div>

          <label htmlFor="theme-mode" className="theme">
            <span className="light">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="2">
                <path d="M14.828 14.828a4 4 0 1 0 -5.656 -5.656a4 4 0 0 0 5.656 5.656z"></path>
                <g data-g="high">
                  <path d="M4 12h-3"></path>
                  <path d="M12 4v-3"></path>
                  <path d="M20 12h3"></path>
                  <path d="M12 20v3"></path>
                </g>
                <g data-g="low">
                  <path d="M6.343 17.657l-1.414 1.414"></path>
                  <path d="M6.343 6.343l-1.414 -1.414"></path>
                  <path d="M17.657 6.343l1.414 -1.414"></path>
                  <path d="M17.657 17.657l1.414 1.414"></path>
                </g>
              </svg>
            </span>
            <span className="dark">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="0">
                <path
                  d="m4.8.69c0-.38-.31-.69-.69-.69s-.69.31-.69.69v1.03h-1.03c-.38,0-.69.31-.69.69s.31.69.69.69h1.03v1.03c0,.38.31.69.69.69s.69-.31.69-.69v-1.03h1.03c.38,0,.69-.31.69-.69s-.31-.69-.69-.69h-1.03V.69Z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
          </label>
        </div>
      </div>
    </Container>
  );
};

export default Nav;
