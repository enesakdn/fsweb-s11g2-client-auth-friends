import axios from "axios";
import { useHistory } from "react-router";
import { useState } from "react";
import React from "react";

const Login = () => {
  const history = useHistory();

  const [userData, setUserData] = useState({ username: "", password: "" });

  const HandleLoginSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:9000/api/login", userData)
      .then((res) => {
        console.log(res.data);
        setUserData({
          username: "",
          password: "",
        });
        localStorage.setItem("token", res.data.token);
        history.push("/FriendsList");
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form onSubmit={HandleLoginSubmit}>
        <input
          type="text"
          name="username"
          value={userData.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
        />
        <button type="OnSubmit">Log in</button>
      </form>
    </div>
  );
};

export default Login;
