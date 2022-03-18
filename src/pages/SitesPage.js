import React from "react";
import styled from "styled-components";
import { FaJira, FaGithub, FaGitlab, FaBitbucket } from "react-icons/fa";

const SitesPage = () => {
  return (
    <Wrapper>
      <ul>
        <li class="GitHub">
          <a href="https://github.com/" target="blank_">
            <h3>GitHub</h3>
            <p>
              GitHub is a code hosting platform for version control and
              collaboration.
            </p>
            <i class="fa fa-github">
              <FaGithub />
            </i>
          </a>
        </li>
        <li class="GitLab">
          <a href="https://about.gitlab.com/" target="blank_">
            <h3>GitLab</h3>
            <p>
              GitLab is a web-based Git repository that provides free open and
              private repositories, issue-following capabilities, and wikis.
            </p>
            <i class="fa fa-github">
              <FaGitlab />
            </i>
          </a>
        </li>

        <li class="Jira">
          <a href="https://www.atlassian.com/software/jira" target="blank_">
            <h3>Jira</h3>
            <p>
              Jira is a software application used for issue tracking and project
              management.
            </p>
            <i class="fa fa-twitter">
              <FaJira />
            </i>
          </a>
        </li>
        <li class="BitBucket">
          <a href="https://bitbucket.org/product" target="blank_">
            <h3>BitBucket</h3>
            <p>
              Bitbucket is our Git repository management solution designed for
              professional teams.
            </p>
            <i class="fa fa-dribbble">
              <FaBitbucket />
            </i>
          </a>
        </li>
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  @mixin breakpoint($point) {
    @media (max-width: $point) {
      @content;
    }
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    background-color: #f2f2f2;
    line-height: 1.2;
  }

  ul {
    width: 60vw;
    padding: 0;
    margin: 0;
    list-style: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    li {
      border-bottom: 2px solid #e6e6e6;
      position: relative;
      overflow: hidden;
      transition: 0.2s ease-in-out;
      a {
        display: block;
        padding: 30px;
        text-decoration: none;
        color: #222;
        transition: 0.2s ease-in-out;
        h3 {
          margin: 0 0 15px;
          font-size: 30px;
          font-weight: 900;
        }
        p {
          margin: 0;
          font-size: 20px;
          max-width: calc(100% - 110px);
        }
        i {
          position: absolute;
          top: 50%;
          right: 50px;
          transform: translatey(-50%);
          font-size: 80px !important;
          opacity: 0.25;
        }
      }
      &.BitBucket:hover {
        background-color: #55acee;
      }
      &.GitLab:hover {
        background-color: #fc6d27;
      }
      &.GitHub:hover {
        background-color: #333;
      }
      &.Jira:hover {
        background-color: #4085f5;
      }
      &:hover {
        box-shadow: 0 10px 15px 0 #e6e6e6;
        > a {
          color: white;
          > p {
            color: white;
          }
        }
      }
      &:first-child {
        border-top: 2px solid #e6e6e6;
      }
    }
  }

  @media screen and (max-width: 800px) {
    p {
      display: none;
    }
    li {
      display: grid;
      grid-template-rows: 1fr 1fr;
    }
    ul {
      margin-top: 10rem;
    }
  }
`;

export default SitesPage;
