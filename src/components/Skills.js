import React from "react";
import { ListGroup } from "react-bootstrap";
import '../App.css'


export default function Skills() {
    return (
      <div container>
        <h1>My Skills</h1>
        <ListGroup className="list-group-horizontal justify-content-center" id='Skills'>
          <ListGroup.Item>JavaScript</ListGroup.Item>
          <ListGroup.Item>React.JS</ListGroup.Item>
          <ListGroup.Item>Node</ListGroup.Item>
          <ListGroup.Item>MySQL</ListGroup.Item>
          <ListGroup.Item>Bootstrap</ListGroup.Item>
        </ListGroup>
        </div>
    )
}