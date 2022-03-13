import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {useState} from 'react';
import Form from "react-bootstrap/Form";
import React from 'react';



const Reto = ({ dato }) => {
const [hecho, setHecho] = useState (dato.hecho); 
const [modPersonajeReto, setPersonajeReto] = useState(dato.personaje)
const [modNombreReto, setNombreReto] = useState(dato.reto);
const [modDescripcionReto, setDescripcionReto] = useState(dato.descripcion);
const [modificando, setModificando] = useState (false); 

function manejarClick(e){
e.preventDefault();
setModificando(false);
dato.personaje = modPersonajeReto;
dato.reto= modNombreReto
dato.descripcion = modDescripcionReto;
}
if (modificando) {
return (
<Card>
<Form>
<Card.Header onClick={() => setHecho(!hecho)}>
{hecho ? "O" : "X"}&nbsp;
<Form.Control
value={modNombreReto}
onChange={(e) => setNombreReto(e.target.value)}
/>
</Card.Header>
<Card.Body>
<Form.Control
as="textarea"
onChange={(e) => setDescripcionReto(e.target.value)}
defaultValue={modDescripcionReto}
></Form.Control>
<br />
<blockquote className="blockquote mb-0">
Encargado por:
<Form.Control
value={modPersonajeReto}
onChange={(e) => setPersonajeReto(e.target.value)}
/>
</blockquote>
<br />
<Button variant="danger" onClick={manejarClick}>
Guardar reto
</Button>
</Card.Body>
</Form>
</Card>
);
} else {
return (
<Card>
<Card.Header as="h3" onClick={() => setHecho(!hecho)}>
{hecho ? "O" : "X"}&nbsp;
{dato.reto}
</Card.Header>
<Card.Body>
<Card.Text>{dato.descripcion}</Card.Text>
<br />
<h4 className="blockquote-footer">
Encargado por: {dato.personaje}
</h4>
<Button variant="warning" onClick={() => setModificando(true)}>
Modificar reto
</Button>
</Card.Body>
</Card>     
);
}
}

export default Reto;