import React from 'react';
import styled from 'styled-components';
import './Nav.css';

// Styled components (optional; can also rely solely on CSS file)
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
 height: 1rem;
`;

const Nav = () => {
  return (
    <Container>
      {/* Hidden checkbox for theme mode */}
      <input hidden className="mode" id="theme-mode" type="checkbox" />
      <div className="container">
        <div className="wrap">
          {/* Radio button group */}
          <input hidden className="rd-1" name="radio" id="rd-1" type="radio" defaultChecked />
          <label style={{ '--index': 0 }} className="label" htmlFor="rd-1">
            <span>About Me</span>
          </label>

          <input hidden className="rd-2" name="radio" id="rd-2" type="radio" />
          <label style={{ '--index': 1 }} className="label" htmlFor="rd-2">
            <span>Summary</span>
          </label>

          <input hidden className="rd-3" name="radio" id="rd-3" type="radio" />
          <label style={{ '--index': 2 }} className="label" htmlFor="rd-3">
            <span>Portfolio</span>
          </label>

          {/* Decoration bars */}
          <div className="bar"></div>
          <div className="slidebar"></div>

          {/* Theme toggle */}
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
