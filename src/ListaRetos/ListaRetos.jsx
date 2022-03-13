import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import React from 'react';
import Reto from '../Reto/Reto';

const ListaRetos = ({lista}) => (
<Row>
{lista.map((item)=> (
<Col sm={4}>
    <Reto key={item.reto} dato = {item}/>
</Col>
))}
</Row>

)
export default ListaRetos;
