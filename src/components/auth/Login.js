import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import alertContext from "../../context/alerts/alertContext";
import AuthContext from "../../context/authentication/authContext";

const Login = props => {
  //Extract values from context
  const alertsContext = useContext(alertContext);
  const { alert, showAlert } = alertsContext;

  const authContext = useContext(AuthContext);
  const { message, authenticated, login } = authContext;

  //If user doesn't exist or password wrong
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
    if (email.trim() === "" || password.trim() === "") {
      showAlert("All fields are mandatoy", "alerta-error");
      return;
    }

    //Pass to action

    login({ email, password });
  };

  return (
    <div className="form-usuario">
      {alert ? <div className={`alerta ${alert.cat}`}>{alert.msg}</div> : null}
      <div className="contenedor-form sombra-dark">
        <h1>Login</h1>
        <form onSubmit={onSubmit}>
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
          Create Account
        </Link>
      </div>
    </div>
  );
};

export default Login;
