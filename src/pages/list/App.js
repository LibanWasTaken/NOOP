import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";
import styled from "styled-components";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return (list = JSON.parse(localStorage.getItem("list")));
  } else {
    return [];
  }
};
const App = () => {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, "danger", "please enter value");
    } else if (tokenPlatformList().includes(tokenPlatform()) && !isEditing) {
      showAlert(true, "danger", "Token already exists");
    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName("");
      setEditID(null);
      setIsEditing(false);
      showAlert(true, "success", "value changed");
    } else {
      showAlert(true, "success", "Token added to the list");
      const newItem = {
        id: new Date().getTime().toString(),
        title: name,
        company: tokenPlatform(),
      };

      setList([...list, newItem]);
      setName("");
    }
  };

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };

  const clearList = () => {
    showAlert(true, "danger", "empty list");
    setList([]);
  };
  const removeItem = (id) => {
    showAlert(true, "danger", "token removed");
    setList(list.filter((item) => item.id !== id));
  };
  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.title);
  };
  const copy = (id) => {
    const specificItem = list.find((item) => item.id === id);
    showAlert(true, "success", "copied to clipboard");
    navigator.clipboard.writeText(specificItem.title);
  };
  function tokenPlatform() {
    var par = document.getElementsByName("tokens")[0];
    var index = par.selectedIndex;
    return par.options[index].text;
  }
  function tokenPlatformList() {
    let arr = [];
    list.forEach((item) => {
      arr.push(item.company);
    });
    return arr;
  }

  function submit() {}
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);
  return (
    <Wrapper>
      <section className="section-center">
        <form className="token-form" onSubmit={handleSubmit}>
          {alert.show && (
            <Alert {...alert} removeAlert={showAlert} list={list} />
          )}

          <h3>Tokens</h3>
          <div className="form-control">
            <select className="token-select" name="tokens" id="tokens">
              <option value="GitHub">GitHub</option>
              <option value="GitLab">GitLab</option>
              <option value="Jira">Jira</option>
              <option value="BitBucket">BitBucket</option>
            </select>
            <input
              type="text"
              className="token"
              placeholder="Place your token"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button type="submit" className="submit-btn">
              {isEditing ? "edit" : "Add"}
            </button>
          </div>
        </form>
        {list.length > 0 && (
          <div className="token-container">
            <List
              items={list}
              removeItem={removeItem}
              editItem={editItem}
              copy={copy}
            />
            {/* <button className="clear-btn" onClick={clearList}>
            clear items
          </button> */}
            <button className="clear-btn" onClick={submit}>
              Submit
            </button>
          </div>
        )}
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  :root {
    --clr-primary-1: hsl(205, 86%, 17%);
    --clr-primary-5: hsl(205, 78%, 60%);
    --clr-primary-6: hsl(205, 89%, 70%);
    --clr-grey-1: hsl(209, 61%, 16%);
    --clr-grey-3: hsl(209, 34%, 30%);
    --clr-grey-5: hsl(210, 22%, 49%);
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
    --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
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
  h1,
  h2,
  h3,
  h4 {
    letter-spacing: var(--spacing);
    text-transform: capitalize;
    line-height: 1.25;
    margin-bottom: 0.75rem;
  }
  h1 {
    font-size: 3rem;
  }
  h2 {
    font-size: 2rem;
  }
  h3 {
    font-size: 1.25rem;
  }
  h4 {
    font-size: 0.875rem;
  }
  p {
    margin-bottom: 1.25rem;
    color: var(--clr-grey-5);
  }
  @media screen and (min-width: 800px) {
    h1 {
      font-size: 4rem;
    }
    h2 {
      font-size: 2.5rem;
    }
    h3 {
      font-size: 1.75rem;
    }
    h4 {
      font-size: 1rem;
    }
    body {
      font-size: 1rem;
    }
    h1,
    h2,
    h3,
    h4 {
      line-height: 1;
    }
  }
  .btn {
    text-transform: uppercase;
    background: transparent;
    color: var(--clr-black);
    padding: 0.375rem 0.75rem;
    letter-spacing: var(--spacing);
    display: inline-block;
    transition: var(--transition);
    font-size: 0.875rem;
    border: 2px solid var(--clr-black);
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    border-radius: var(--radius);
  }
  .btn:hover {
    color: var(--clr-white);
    background: var(--clr-black);
  }
  /* section */
  .section {
    padding: 5rem 0;
  }

  .section-center {
    width: 90vw;
    margin: 0 auto;
    max-width: 80rem;
    margin-top: 8rem;
  }
  @media screen and (min-width: 992px) {
    .section-center {
      width: 95vw;
    }
  }
  main {
    min-height: 100vh;
    display: grid;
    place-items: center;
  }

  /*token*/

  .section-center {
    background: var(--clr-white);
    border-radius: 10px;
    box-shadow: var(--light-shadow);
    transition: var(--transition);
    padding: 2rem;
  }
  .section-center:hover {
    box-shadow: var(--dark-shadow);
  }
  .alert {
    margin-bottom: 1rem;
    height: 1.25rem;
    display: grid;
    align-items: center;
    text-align: center;
    font-size: 0.7rem;
    border-radius: 0.25rem;
    letter-spacing: var(--spacing);
    text-transform: capitalize;
  }
  .alert-danger {
    color: #721c24;
    background: #f8d7da;
  }
  .alert-success {
    color: #155724;
    background: #d4edda;
  }
  .token-form h3 {
    color: var(--clr-primary-1);
    margin-bottom: 1.5rem;
    text-align: center;
  }

  @media screen and (max-width: 480px) {
    .form-control {
      flex-direction: column;
      gap: 1rem;
    }
  }

  .form-control {
    display: flex;
    justify-content: center;
  }
  .token {
    padding: 0.5rem;
    margin-right: 0.25rem;
    padding-left: 1rem;
    background: var(--clr-grey-10);
    border-top-left-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
    border-color: transparent;
    font-size: 1rem;
    flex: 1 0 auto;
    color: var(--clr-grey-5);
    outline-color: rgba(46, 153, 253, 0.363);
  }
  .token::placeholder {
    font-family: var(--ff-secondary);
    color: var(--clr-grey-5);
  }
  .submit-btn {
    background: var(--clr-primary-8);
    border-color: transparent;
    flex: 0 0 5rem;
    display: grid;
    align-items: center;
    padding: 0.25rem;
    text-transform: capitalize;
    letter-spacing: 2px;
    border-radius: var(--radius);
    cursor: pointer;
    content: var(--clr-primary-5);
    transition: var(--transition);
    font-size: 0.85rem;
  }
  .submit-btn:hover {
    background: var(--clr-primary-5);
    color: var(--clr-white);
  }

  .token-container {
    margin-top: 2rem;
  }

  .token-item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    transition: var(--transition);
    padding: 0.25rem 1rem;
    border-radius: var(--radius);
  }
  .token-item:hover {
    color: var(--clr-grey-5);
    background: var(--clr-grey-10);
  }
  .token-item:hover .title {
    color: var(--clr-grey-5);
    cursor: pointer;
  }

  .company {
    width: 4.5rem;
  }
  .title {
    color: var(--clr-grey-1);
    letter-spacing: 2px;
    transition: var(--transition);
    height: 2.5rem;

    max-width: 60%;
    overflow-x: auto;
    margin-bottom: 1rem;
    white-space: nowrap;
  }

  .title::-webkit-scrollbar {
    width: 10px;
    height: 8px;
    margin: 10rem;
  }
  .title::-webkit-scrollbar-track {
    border-radius: 10px;
  }

  .title::-webkit-scrollbar-thumb {
    background: var(--clr-primary-6);
    border-radius: 10px;
  }
  .title::-webkit-scrollbar-thumb:hover {
    background: var(--clr-primary-5);
  }

  .edit-btn,
  .delete-btn {
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    font-size: 0.7rem;
    margin: 0 0.15rem;
    transition: var(--transition);
  }
  .edit-btn {
    color: var(--clr-green-light);
  }
  .edit-btn:hover {
    color: var(--clr-green-dark);
  }
  .delete-btn {
    color: var(--clr-red-light);
  }
  .delete-btn:hover {
    color: var(--clr-red-dark);
  }
  .clear-btn {
    text-transform: capitalize;
    width: 10rem;
    height: 1.5rem;
    display: grid;
    align-items: center;
    background: transparent;
    border-color: transparent;
    color: var(--clr-red-light);
    margin: 0 auto;
    font-size: 0.85rem;
    letter-spacing: var(--spacing);
    cursor: pointer;
    transition: var(--transition);
    margin-top: 1.25rem;
  }
  .clear-btn:hover {
    color: var(--clr-red-dark);
  }

  .token-select {
    margin-right: 1rem;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 1rem;
  }
`;

export { App };
