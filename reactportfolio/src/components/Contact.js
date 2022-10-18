import React from "react";

import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row'
import ListGroup from 'react-bootstrap/ListGroup';

import '.././App.css'


const contact = {
  email: 'chadndonahue@gmail.com'
}



export default function Contact() {
    
  return (
    <>
    <Row className="justify-content-center">
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Contact Info</Card.Title>
        <Card.Text>
         The simplest way to contact me would be through email or phone.
        </Card.Text>
        <ListGroup variant="flush">
        <ListGroup.Item>
        <a href={`mailto:${contact.email}`}>
        <span type='button' className='btn btn--outline'>
          Email me
        </span>
        </a>
        </ListGroup.Item>
        <ListGroup.Item>Phone: (518)572-2973</ListGroup.Item>
      </ListGroup>
      </Card.Body>
    </Card>
    </Row>
    </>
  );
}


