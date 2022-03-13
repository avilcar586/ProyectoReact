import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {useState} from 'react';
import React from 'react';


const NuevoReto = ({ onNewReto }) => {
const [newPersonajeReto, setNewPersonajeReto] = useState("");
const [newNombreReto, setNewNombreReto] = useState("");
const [newDescripcionReto, setNewDescripcionReto] = useState("");
function manejarClick(e) {
e.preventDefault();
onNewReto({
hecho: false,
personaje: newPersonajeReto,
nombre: newNombreReto,
descripcion: newDescripcionReto,
});
}
return (
<Form>
<fieldset className="border border-dark rounded p-3 mb-4 bg-light shadow">
<legend>Nuevo reto</legend>
<Form.Group>
<Form.Label>Nombre del reto:</Form.Label>
<Form.Control
placeholder="Introduce el reto"
value={newNombreReto}
onChange={(e) => setNewNombreReto(e.target.value)}
></Form.Control>
</Form.Group>
<Form.Group>
<Form.Label>Personaje:</Form.Label>
<Form.Control
placeholder="Introduce tu nombre"
value={newPersonajeReto}
onChange={(e) => setNewPersonajeReto(e.target.value)}
></Form.Control>
</Form.Group>
<Form.Group>
<Form.Label>Descripción del reto:</Form.Label>
<Form.Control
as="textarea"
placeholder="Introduce el reto"
value={newDescripcionReto}
onChange={(e) => setNewDescripcionReto(e.target.value)}
></Form.Control>
</Form.Group>
<br />
<Button variant="success" onClick={manejarClick}>
Crear nuevo reto
</Button>
</fieldset>
</Form>
);
}

export default NuevoReto;
