import Button from 'react-bootstrap/Button';
import React from 'react';


const BuscarDisplay = ({buscar, onClear}) =>  { return (
    <div>
    <p>Búsqueda actual:<br/>{buscar}</p>
    <Button variant="primary" onClick={onClear}>Limpiar búsqueda</Button>
    </div>
);
};  

export default BuscarDisplay;