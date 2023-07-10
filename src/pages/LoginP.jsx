import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './LoginP.css'

const LoginP = () => {
  const navigate = useNavigate();

  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  const [user, setUser] = useState({ username: "", password: "" });

  const login = (e) => {
    e.preventDefault();
    console.log(user);

    if (user.username === "abdulaziz" && user.password === "abd") {
      // navigate("/products");
      navigate("/home");
    } else {
      alert("Check info !");
    }
  };
  // const handleUsername = (e) => {
  //   setUsername(e.target.value);
  // };
  // const handlePassword = (e) => {
  //   setPassword(e.target.value);
  // };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <div className="abody">
        <div class="logn-all">
           <i></i>
            <i></i>
            <i></i>
          <div class="login">
            <h2>Login</h2>
            <div class="inputBx">
              <input type="text" name="username" value={user.username} onChange={handleChange} placeholder="Username" />
            </div>
            <div class="inputBx">
              <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Password" />
            </div>
            <div class="inputBx">
              <input type="submit" value="Sign in"  onClick={login}/>
            </div>
            <div class="links">
                <a href="index.html">Forget Password</a>
                <a href="index.html">Signup</a>
            </div>
          </div>
        </div>
    </div>
  );
};

export default LoginP;
