import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import styled from "styled-components";

const links = [
  {
    id: 1,
    url: "/",
    text: "home",
  },
  {
    id: 2,
    url: "/tokens",
    text: "tokens",
  },
  {
    id: 3,
    url: "/sites",
    text: "sites",
  },
];

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);
  return (
    <Wrapper>
      <nav>
        <div className="nav-center">
          <div className="nav-header">
            {/* <img src={logo} className="logo" alt="logo" /> */}
            <button className="nav-toggle" onClick={toggleLinks}>
              <FaBars />
            </button>
          </div>
          <div className="links-container" ref={linksContainerRef}>
            <ul className="links" ref={linksRef}>
              {links.map((link) => {
                const { id, url, text } = link;
                return (
                  <li key={id}>
                    <a href={url}>{text}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <ul className={showLinks ? "logging" : "logging hidden"}>
            <li className="signIn">
              <a href="/login">Sign In</a>
            </li>
            <li className="signUp">
              <a href="/register">Sign Up</a>
            </li>
          </ul>
        </div>
      </nav>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  :root {
    /* dark shades of primary color*/
    --clr-primary-1: hsl(205, 86%, 17%);
    --clr-primary-2: hsl(205, 77%, 27%);
    --clr-primary-3: hsl(205, 72%, 37%);
    --clr-primary-4: hsl(205, 63%, 48%);
    /* primary/main color */
    --clr-primary-5: hsl(205, 78%, 60%);
    /* lighter shades of primary color */
    --clr-primary-6: hsl(205, 89%, 70%);
    --clr-primary-7: hsl(205, 90%, 76%);
    --clr-primary-8: hsl(205, 86%, 81%);
    --clr-primary-9: hsl(205, 90%, 88%);
    --clr-primary-10: hsl(205, 100%, 96%);
    /* darkest grey - used for headings */
    --clr-grey-1: hsl(209, 61%, 16%);
    --clr-grey-2: hsl(211, 39%, 23%);
    --clr-grey-3: hsl(209, 34%, 30%);
    --clr-grey-4: hsl(209, 28%, 39%);
    /* grey used for paragraphs */
    --clr-grey-5: hsl(210, 22%, 49%);
    --clr-grey-6: hsl(209, 23%, 60%);
    --clr-grey-7: hsl(211, 27%, 70%);
    --clr-grey-8: hsl(210, 31%, 80%);
    --clr-grey-9: hsl(212, 33%, 89%);
    --clr-grey-10: hsl(210, 36%, 96%);
    --clr-white: #fff;
    --clr-red-dark: hsl(360, 67%, 44%);
    --clr-red-light: hsl(360, 71%, 66%);
    --clr-green-dark: hsl(125, 67%, 44%);
    --clr-green-light: hsl(125, 71%, 66%);
    --clr-black: #222;
    --transition: all 0.3s linear;
    --spacing: 0.1rem;
    --radius: 0.25rem;
    --light-shadow: 0 5px 100px rgba(0, 0, 0, 0.1);
    --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    --max-width: 1170px;
    --fixed-width: 620px;
  }

  *,
  ::after,
  ::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    background: var(--clr-grey-10);
    color: var(--clr-grey-1);
    line-height: 1.5;
    font-size: 0.875rem;
  }
  ul {
    list-style-type: none;
  }
  a {
    text-decoration: none;
  }

  p {
    margin-bottom: 1.25rem;
    color: var(--clr-grey-5);
  }
  @media screen and (min-width: 800px) {
    body {
      font-size: 1rem;
    }
  }

  .section {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }

  @media screen and (min-width: 992px) {
    .section {
      width: 95vw;
    }
  }

  /*
=============== 
Navbar
===============
*/
  nav {
    background: var(--clr-white);
    box-shadow: var(--light-shadow);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
  }
  .nav-toggle {
    font-size: 1.5rem;
    color: var(--clr-primary-5);
    background: transparent;
    border-color: transparent;
    transition: var(--transition);
    cursor: pointer;
  }
  .nav-toggle:hover {
    color: var(--clr-primary-1);
    transform: rotate(90deg);
  }
  .logo {
    height: 40px;
  }
  /* .links {
    margin-right: 5rem;
  } */
  .links a {
    color: var(--clr-grey-3);
    font-size: 1rem;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    display: block;
    padding: 0.5rem 1.5rem;
    transition: var(--transition);
  }
  .links a:hover {
    background: var(--clr-primary-8);
    color: var(--clr-primary-5);
    padding-left: 1.5rem;
  }
  .links-container {
    height: 0;
    overflow: hidden;
    transition: var(--transition);
  }
  .show-container {
    height: 10rem;
  }
  @media screen and (min-width: 800px) {
    .nav-center {
      max-width: 1170px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem;
    }
    .nav-header {
      padding: 0;
    }
    .nav-toggle {
      display: none;
    }
    .links-container {
      height: auto !important;
    }
    .links {
      display: flex;
      gap: 1rem;
    }
    .links a {
      padding: 0;
      margin: 0 0.5rem;
    }
    .links a:hover {
      padding: 0;
      background: transparent;
    }
  }

  .logging {
    display: flex;
  }
  .logging a {
    margin: 0 1rem;
    color: var(--clr-primary-5);
    transition: var(--transition);
    font-weight: 500;
  }
  .signIn a:hover {
    color: var(--clr-primary-7);
  }
  .signUp {
    border: 1px solid var(--clr-primary-7);
    border-radius: 10px;
  }
  .signUp:hover {
    background-color: var(--clr-primary-7);
    transition: var(--transition);
    > a {
      color: white;
    }
  }
  @media screen and (max-width: 800px) {
    .logging {
      margin-top: 2rem;
    }
  }

  .hidden {
    display: none;
  }
`;

export default Navbar;
