import React from "react";
import { Link } from "react-router-dom";
import Input from "../../components/Input/Input";
import { LoginContainer, LoginPage } from "./style";

function Login() {
  return (
    <LoginPage>
      <LoginContainer>
        <div className="div-title">
          <h1>Sign In</h1>
        </div>
        <div className="div-form">
          <Input
            width="300px"
            height="51px"
            margin="10px"
            type="email"
            placeholder="example@email.com"
            label="Email"
            font_input="1.2em"
            font_label="1.4em"
          />
          <Input
            width="300px"
            height="51px"
            margin="10px"
            type="password"
            placeholder="********"
            label="Password"
            font_input="1.2em"
            font_label="1.4em"
          />
        </div>
        <div className="div-button">
          <button>Sign In</button>
          <p>Don't have an account</p>
          <Link className="sign-up-link" to={"/register"}>
            Sign Up Here
          </Link>
        </div>
      </LoginContainer>
    </LoginPage>
  );
}

export default Login;
