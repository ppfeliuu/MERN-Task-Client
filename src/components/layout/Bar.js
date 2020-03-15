import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/authentication/authContext";

const Bar = () => {
  //get info auth
  const authContext = useContext(AuthContext);
  const { user, userAuth, logout } = authContext;

  useEffect(() => {
    userAuth();
    // eslint-disable-next-line
  }, []);

  return (
    <header className="app-header">
      {user ? (
        <p className="nombre-usuario">
          Hi <span>{user.name}</span>
        </p>
      ) : null}

      <nav className="nav-principal">
        <button
          className="btn btn-blank cerrar-sesion"
          onClick={() => logout()}
        >
          Logout
        </button>
      </nav>
    </header>
  );
};

export default Bar;
