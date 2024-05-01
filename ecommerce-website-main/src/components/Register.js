import React from "react";
import { useForm } from "react-hook-form";
// import { Link } from 'react-router-dom'

import "./Auth.css";
import axios from "axios"
const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const formSubmit = (data) => {
    console.log(data);
    try{
      const result=axios.post('/api/users/register',data).data;
    }
    catch(error){
      console.log(error)
    }
    
  };
  return (
    <div className="sign-up">
      <h1>Sign Up</h1>
      
      
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
          uusername should start with only alphabetic characters
        </p>
      )}
          <label>PhoneNumber</label>
          <input
            type="number"
            name="phoneNumber"
            placeholder="phone number"
            {...register("phoneNumber")}
          />
          <label>Email</label>
          <input
            name="email"
            placeholder="Email"
            {...register("email", {
              required: "Email is required.",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Email is not valid.",
              },
            })}
          />
          {errors.email && <p className="errorMsg">{errors.email.message}</p>}
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
                  )
              }
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
          <button type="submit">Register Now</button>
        </div>
      </form>
    </div>
  );
};

export default Register;

