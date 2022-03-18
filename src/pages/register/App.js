import React, { useState } from "react";
import styled from "styled-components";

const Registration = () => {
  const [view, setView] = useState(false);

  return (
    <Wrapper>
      <body>
        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"
        />
        <div class="container">
          <div class="forms">
            <div class="form login">
              <span class="title">Login</span>

              <form action="#">
                <div class="checkbox-text">
                  <div class="checkbox-content">
                    <input type="checkbox" id="logCheck" />
                    <label for="logCheck" class="text">
                      Remember me
                    </label>
                  </div>

                  <a href="#" class="text">
                    Forgot password?
                  </a>
                </div>
              </form>
            </div>

            <div class="form signup">
              <span class="title">Registration</span>

              <form action="#">
                <div class="input-field">
                  <input type="text" placeholder="Enter your name" required />
                  <i class="uil uil-user"></i>
                </div>
                <div class="input-field">
                  <input type="text" placeholder="Enter your email" required />
                  <i class="uil uil-envelope"></i>
                </div>

                <div class="input-field">
                  <input
                    type="password"
                    placeholder="Create a password"
                    required
                  />
                  <i class="uil uil-lock icon"></i>
                </div>
                <div class="input-field">
                  <input
                    type={view ? "text" : "password"}
                    class="password"
                    placeholder="Confirm a password"
                    required
                  />
                  <i class="uil uil-lock icon"></i>
                  <i
                    onClick={() => {
                      view ? setView(false) : setView(true);
                    }}
                    class={
                      view
                        ? "uil uil-eye showHidePw"
                        : "uil uil-eye-slash showHidePw"
                    }
                  ></i>
                </div>

                <div class="checkbox-text">
                  <div class="checkbox-content">
                    <input type="checkbox" id="signCheck" />
                    <label for="signCheck" class="text">
                      I accept all terms &amp; conditions
                    </label>
                  </div>
                </div>

                <div class="input-field button">
                  <input type="button" value="Register Now" />
                </div>
              </form>

              <div class="login-signup">
                <span class="text">
                  Already have an account?
                  <a href="/login" class="text login-link">
                    Login now
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </body>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", "sans-serif";
  }

  body {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #333940;
  }

  .container {
    position: relative;
    max-width: 465px;
    width: 100%;
    box-shadow: 0 0px 15px 2px rgba(0, 0, 0, 0.5);
    overflow: hidden;
  }

  .container .forms {
    width: 200%;
    display: flex;
    height: 440px;
    align-items: center;
    transition: height 0.4s ease;
  }

  .container .form {
    width: 50%;
    padding: 30px;
    border-radius: 12px;
    background: #fff;
    transition: margin-left 0.36s ease;
  }

  .container .login {
    margin-left: -50%;
    opacity: 0;
    transition: margin-left 0.36s ease, opacity 0.3s ease;
  }

  .container .signup {
    opacity: 1;
    transition: opacity 0.18s ease;
  }

  .container .signup {
    opacity: 1;
    transition: opacity 0.4s ease;
  }

  .container .forms {
    height: 600px;
  }

  .container .form .title {
    position: relative;
    font-size: 27px;
    font-weight: 600;
  }

  .form .title::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 3px;
    width: 30px;
    background-color: #4070f4;
    border-radius: 25px;
  }

  .form .input-field {
    position: relative;
    height: 50px;
    width: 100%;
    margin-top: 30px;
  }

  .input-field input {
    position: absolute;
    height: 100%;
    width: 100%;
    padding: 0 35px;
    border: none;
    outline: none;
    font-size: 16px;
    border-bottom: 2px solid #ccc;
    border-top: 2px solid transparent;
    transition: border-bottom-color 0.4s ease;
  }

  .input-field input:is(:focus, :valid) {
    border-bottom-color: #4070f4;
  }

  .input-field i {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: #999;
    font-size: 23px;
    transition: color 0.4s ease;
  }

  .input-field input:is(:focus, :valid) ~ i {
    color: #4070f4;
  }

  .input-field i.icon {
    left: 0;
  }

  .input-field i.showHidePw {
    right: 0;
    cursor: pointer;
    padding: 10px;
  }

  .form .checkbox-text {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }

  .checkbox-text .checkbox-content {
    display: flex;
    align-items: center;
  }

  .checkbox-content input {
    margin: 0 8px -2px 4px;
    accent-color: #4070f4;
  }

  .form .text {
    color: #333;
    font-size: 14px;
  }

  .form a.text {
    color: #4070f4;
    text-decoration: none;
  }

  .form a {
    text-decoration: none;
  }

  .form a:hover {
    text-decoration: underline;
  }

  .form .button {
    margin-top: 35px;
  }

  .form .button input {
    border: none;
    color: #000;
    font-size: 17px;
    font-weight: 500;
    letter-spacing: 1px;
    border-radius: 6px;
    background-color: hsl(205, 89%, 70%);
    cursor: pointer;
    transition: all 0.6s ease;
  }

  .button input:hover {
    background-color: hsl(205, 90%, 76%);
  }

  .form .login-signup {
    margin-top: 30px;
    text-align: center;
  }

  .login-signup a {
    margin-left: 5px;
  }

  .hidden {
    display: none;
  }
`;

export default Registration;
