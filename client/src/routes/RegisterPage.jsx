import { SignUp } from "@clerk/clerk-react";
import React from "react";

const RegisterPage = () => {
  return (
    <div className="login-container">
      <SignUp signInUrl="/login" />
    </div>
  );
};

export default RegisterPage;
