import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "../../state";
import { useNavigate } from "react-router-dom";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,11}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    console.log(e);
    try {
      const response = await axios.post("http://localhost:8080/auth/login", {
        username: username,
        password: password,
      });
      console.log(response);
      if (response?.status === 200) {
        const { token, user } = response?.data;
        dispatch(
          setLogin({
            user: user,
            token: token,
          })
        );
        navigate("/account");
      } else {
        return alert(response?.data?.message);
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong, Please try again later.");
    }
  };

  const handleRegisterSubmit = async (e) => {
    setSubmitting(true);
    e.preventDefault();
    console.log(e);
    const v1 = USER_REGEX.test(username);
    const v2 = PWD_REGEX.test(password);
    if (!v1 || !v2) {
      alert("Invalid username or password");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    const isValidEmail = EMAIL_REGEX.test(email);
    if (!isValidEmail) {
      alert("Email not valid");
      return;
    }
    try {
      const response = await axios.post("http://localhost:8080/auth/register", {
        username: username,
        email: email,
        password: password,
      });
      console.log(response);
      setIsLogin(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className={`w-full h-full flex flex-col items-center text-center ${
        isLogin && "sm:pt-20"
      } text-[#FF851B] overflow-y-scroll py-5 no-scrollbar`}
    >
      <form
        onSubmit={isLogin ? handleLoginSubmit : handleRegisterSubmit}
        className="flex flex-col m-2 items-center"
      >
        <h1 className="text-[3rem]">{`${isLogin ? "Login" : "Register"}`}</h1>
        {!isLogin && (
          <>
            <p className="flower text-[1.5rem] font-bold">Email</p>
            <input
              required

              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              name="email"
              className="font-sans rounded-xl m-2 w-[320px] sm:w-[500px] text-black sm:h-10 h-10 text-[2rem] px-2"
            />
          </>
        )}
        <p className="text-[1.5rem] flower font-bold">Username</p>
        <p className={`flower text-[1rem] ${isLogin && "hidden"} text-left`}>
          - 4 to 12 characters.
          <br />
          - Must begin with a letter.
          <br />- Letters, numbers, underscores, hyphens allowed.
        </p>
        <input
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          name="username"
          className="font-sans rounded-xl m-2 w-[320px] sm:w-[500px] text-black sm:h-10 h-10 text-[2rem] px-2"
        />
        <p className="text-[1.5rem] flower font-bold">Password</p>
        <p className={`flower ${isLogin && "hidden"} `}>
          8 to 24 characters.
          <br />
          Must include uppercase and lowercase letters, a number and a special
          character.
          <br />
          Allowed special characters:{" "}
          <span aria-label="exclamation mark">!</span>{" "}
          <span aria-label="at symbol">@</span>{" "}
          <span aria-label="hashtag">#</span>{" "}
          <span aria-label="dollar sign">$</span>{" "}
          <span aria-label="percent">%</span>
        </p>
        <input
          required
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          className="flower rounded-xl m-2 w-[320px] sm:w-[500px] text-black sm:h-10 h-10 text-[2rem] px-2"
        />
        {!isLogin && (
          <>
            <p className="flower text-[1.5rem] font-bold">Confirm Password</p>
            <input
              type="password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              name="confirm-password"
              className="flower rounded-xl m-2 w-[320px] sm:w-[500px] text-black sm:h-10 h-10 text-[2rem] px-2"
            />
          </>
        )}
        <button className="text-[2rem] bg-[#FF851B] rounded-2xl text-black w-[180px] hover:scale-105 transition-all mt-10">{`${
          isLogin ? "Login" : "Register"
        }`}</button>
      </form>
      <button
        onClick={() => setIsLogin(!isLogin)}
        className="text-[1.5rem] mt-5 text-white underline flower hover:text-[#FF851B] transition-all"
      >{`${!isLogin ? "Login" : `${submitting ? "submitting" : "Register"}`}`}</button>
    </div>
  );
};

export default Login;
