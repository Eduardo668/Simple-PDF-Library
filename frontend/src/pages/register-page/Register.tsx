import React from "react";
import Input from "../../components/Input/Input";
import { RegisterContainer, RegisterPage } from "./style";
import { Link } from "react-router-dom";

function Register() {
  return (
    <RegisterPage>
      <RegisterContainer>
        <div className="div-title">
          <h1>Sign Up</h1>
        </div>
        <div className="div-form">
          <Input
            width="300px"
            height="51px"
            margin="7px"
            label="Email"
            placeholder="example@email.com"
            type="email"
            font_input="1.2em"
            font_label="1.4em"
          />
          <Input
            width="300px"
            height="51px"
            margin="7px"
            label="Username"
            placeholder="John123..."
            type="text"
            font_input="1.2em"
            font_label="1.4em"
          />
          <Input
            width="300px"
            height="51px"
            margin="7px"
            label="Password"
            placeholder="********"
            type="password"
            font_input="1.2em"
            font_label="1.4em"
          />
        </div>
        <div className="div-button">
          <button>Sign Up</button>
          <p>Already have an account?</p>
          <Link className="sign-up-link" to={"/login"}>
            Sign In Here
          </Link>
        </div>
      </RegisterContainer>
    </RegisterPage>
  );
}

export default Register;
