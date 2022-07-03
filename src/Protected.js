import React, { useState } from "react";
import Login from "./components/Login";

const Protected = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  return !isAuth ? <Login setIsAuth={setIsAuth} /> : <div>{children}</div>;
};

export default Protected;
