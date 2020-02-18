import React, { useState } from "react";
import { Link } from "react-router-dom";

const NewAccount = () => {
  //State login
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const { email, password } = user;

  const onChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();

    //Validate no empty fields

    //Pass to action
  };

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Create Account</h1>
        <form onSubmit={onSubmit}>
          <div className="campo-form">
            <label htmlFor="username">Name</label>
            <input
              type="text"
              id="username"
              name="username"
              value={email}
              placeholder="Your Name"
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="Your Email"
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              placeholder="Your Password"
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Login"
            />
          </div>
        </form>
        <Link to={"/new-account"} className="enlace-cuenta">
          Register
        </Link>
      </div>
    </div>
  );
};

export default NewAccount;
