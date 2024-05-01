import React from "react";
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom'
import "./Auth.css";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const formSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="sign-up">
      <h1>Sign In</h1>
      <p>
        Didn't have an account{" "}
        <Link to="/register" style={{textDecoration:"none"}}>
          Register Now
        </Link>
      </p>
      <form onSubmit={handleSubmit(formSubmit)}>
        <div className="input-group">
          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            {...register("username", {
              required: true,
              validate: {
                matchPattern: (value) =>
                  /[A-Za-z]+/.test(
                    value
                  ),
              },
              
            })}
          />
          {errors.username?.type === "required" && (
            <p className="errorMsg">username is required.</p>
          )}
          {errors.username?.type === "matchPattern" && (
            <p className="errorMsg">
              username should start with only alphabetic characters
            </p>
          )}
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            {...register("password", {
              required: true,
              validate: {
                checkLength: (value) => value.length >= 6,
                matchPattern: (value) =>
                  /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/.test(
                    value
                  ),
              },
            })}
          />
          {errors.password?.type === "required" && (
            <p className="errorMsg">Password is required.</p>
          )}
          {errors.password?.type === "checkLength" && (
            <p className="errorMsg">
              Password should be at-least 6 characters.
            </p>
          )}
          {errors.password?.type === "matchPattern" && (
            <p className="errorMsg">
              Password should contain at least one uppercase letter, lowercase
              letter, digit, and special symbol.
            </p>
          )}
          <button type="submit">Sign In</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
