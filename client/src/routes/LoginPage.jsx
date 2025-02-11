import React from "react";
import "./../style/page/loginPage.scss";
import { SignIn } from "@clerk/clerk-react";

const LoginPage = () => {
  return (
    <div className="login-container">
      <SignIn signUpUrl="/register" />
    </div>
  );
};

export default LoginPage;
