import React, { useEffect, useState } from "react";

const HookUseEffect = () => {
  const [datoEjemplo, setDatoEjemplo] = useState("");
  const [otro, setOtro] = useState([]);
  //datoEjemplo con tiene el valor
  //setDatoEjemplo es una funcion que renderiza el componente entero, osea borra el html y lo vuelve a poner
  // Cada vez que se llame algun setLOQUESEA se realiza un rerender del componente
  // Al cambiar los props tambien se hace rerender

  // Diferentes useEffect cambiando el segundo parametro
  useEffect(() => {
    console.log(
      "Array vacio = se ejecuta 1 vez al montarse el componente y nunca mas"
    );
  }, []); // En vez de poner [] tambien se puede poner 0

  useEffect(() => {
    console.log(
      "Sin array = se ejecuta 1 vez al montarse el componente y cada vez que se haga rerender"
    );
  });

  useEffect(() => {
    console.log(
      "Array con datos = se ejecuta 1 vez al montarse el componente y si cada vez que el dato especificado de en el array haya cambiado su valor"
    );
  }, [datoEjemplo]);

  return (
    <>
      <p>Hook use Effect</p>
    </>
  );
};

export default HookUseEffect;
