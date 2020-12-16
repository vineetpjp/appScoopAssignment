import GoogleAuth from "components/auth/googleAuth";
import Heading from "components/utils/Heading";
import React from "react";
import { globalConst } from "components/utils/variables";

import "./index.scss";

const Login = () => {
  return (
    <div className="login">
      <Heading heading={globalConst.loginPageTitle} />
      <GoogleAuth />
    </div>
  );
};

export default Login;
