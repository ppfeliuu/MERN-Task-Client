import React from "react";

const ListTasks = () => {
  const task = [
    {
      name: "Elegir Plataforma",
      estado: true
    },
    {
      name: "Elegir Colores",
      estado: false
    },
    {
      name: "Elegir forma de pago",
      estado: false
    },
    {
      name: "Elegir Hosting",
      estado: true
    }
  ];

  return (
    <>
      <h2>Proyecto: Tienda</h2>

      <ul className="listado-tareas"></ul>
    </>
  );
};

export default ListTasks;
