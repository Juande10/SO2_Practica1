import React from 'react';
import './Header.css';
import { Navbar, Nav } from 'react-bootstrap';


export default class Header extends React.Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">Practica 1 - 201314412, 201212734</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/CPU_Monitor">Monitor CPU</Nav.Link>
            <Nav.Link href="/RAM_Monitor">Monitor RAM</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
