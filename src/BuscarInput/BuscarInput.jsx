import Form from 'react-bootstrap/Form';
import React from 'react';



const BuscarInput = ({buscar, onSearchChange}) => {return (
    <Form>
    <Form.Control 
    value = {buscar}
    onChange = {e => 
    onSearchChange(e.target.value)
    }/>
    </Form>
    );
};
    export default BuscarInput;
