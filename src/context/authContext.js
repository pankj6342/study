import { createContext } from "react";
import { useNavigate } from "react-router-dom";

const authContext = createContext();

export const AuthContext = (props) => {
  const host = "http://localhost:5000";
  const navigate = useNavigate(); //note: useHistory is replaced by navigate in react-router-dom

  const loginUser = async (inputEmail, inputPassword) => {
    const response = await fetch(`${host}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: inputEmail, password: inputPassword }),
    });

    const data = await response.json();
    if (data.success) {
      //save the auth token
      localStorage.setItem("token", data.authtoken);
      //redirect to notes page:
      navigate("/");
    } else {
      alert("Incorrect Credentials");
    }
  };

  const signupUser = async (inputName, inputEmail, inputPassword) => {
    const response = await fetch(`${host}/api/auth/createUser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: inputName,
        email: inputEmail,
        password: inputPassword,
      }),
    });

    const data = await response.json();
    console.log("sign up: ", data);
    if (data.success) {
      //save auth token
      localStorage.setItem("token", data.authtoken);
      //redirect
      navigate("/login");
    } else {
      alert("Please Check entered values");
    }
  };

  const Logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <authContext.Provider value={{ loginUser, signupUser, Logout }}>
      {props.children}
    </authContext.Provider>
  );
};
