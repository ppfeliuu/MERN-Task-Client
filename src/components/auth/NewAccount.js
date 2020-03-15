import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import alertContext from "../../context/alerts/alertContext";
import AuthContext from "../../context/authentication/authContext";

const NewAccount = props => {
  //Extract values from context
  const alertsContext = useContext(alertContext);
  const { alert, showAlert } = alertsContext;

  const authContext = useContext(AuthContext);
  const { message, authenticated, registerUser } = authContext;

  //if account to register exists
  useEffect(() => {
    if (authenticated) {
      props.history.push("/projects");
    }

    if (message) {
      showAlert(message.msg, message.cat);
      return;
    }
    // eslint-disable-next-line
  }, [message, authenticated, props.history]);

  //State login
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: ""
  });

  const { name, email, password, confirmpassword } = user;

  const onChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();

    //Validate no empty fields
    if (
      name.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      confirmpassword.trim() === ""
    ) {
      showAlert("All fields are mandatoy", "alerta-error");
      return;
    }

    //Minimum 6 characters
    if (password.length < 6) {
      showAlert("Password must be minimum 6 chars.", "alerta-error");
      return;
    }

    // Both pass have to be the same
    if (password !== confirmpassword) {
      showAlert("Passwords are differents", "alerta-error");
      return;
    }

    //Pass to action
    registerUser({
      name,
      email,
      password
    });
  };

  return (
    <div className="form-usuario">
      {alert ? <div className={`alerta ${alert.cat}`}>{alert.msg}</div> : null}
      <div className="contenedor-form sombra-dark">
        <h1>Create Account</h1>
        <form onSubmit={onSubmit}>
          <div className="campo-form">
            <label htmlFor="username">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
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
            <label htmlFor="confirmpassword">Confirm Password</label>
            <input
              type="password"
              id="confirmpassword"
              name="confirmpassword"
              value={confirmpassword}
              placeholder="Confirm Your Password"
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Create Account"
            />
          </div>
        </form>
        <Link to={"/"} className="enlace-cuenta">
          Back to Login
        </Link>
      </div>
    </div>
  );
};

export default NewAccount;
