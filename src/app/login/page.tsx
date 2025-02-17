"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import {urlConst} from "@/consts/path-consts";
import Header from "@/components/header";



const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      router.push(urlConst.dashboardRedirect);
    }
  }, [router]);
  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post(urlConst.loginUrl, {
        userName,
        password,
      }) //shorthand method
      .then(function (response) {
        alert(response.data.message);
        localStorage.setItem("token", response.data.token);
        //token is set to local storage after coming from response
        router.push(urlConst.dashboardRedirect);
      })
      .catch(function (error) {
        alert(error.response?.data.message);
      });
  };

  return (
      <>
      <Header />
    <div className="signup-container">
      <h2 className="Login">Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="user"
          placeholder="User"
          className="user"
          required
          onChange={handleUserNameChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="password"
          required
          onChange={handlePasswordChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
      </>
  );
};

export default Login;
