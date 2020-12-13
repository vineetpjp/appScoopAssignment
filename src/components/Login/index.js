import GoogleAuth from "components/auth/googleAuth";
import Heading from "components/utils/Heading";
import React from "react";

import "./index.scss";

const Login = () => {
  return (
    <div className="login">
      <Heading heading="SignIn to Enter" />
      <GoogleAuth />
    </div>
  );
};

export default Login;
