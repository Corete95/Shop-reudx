import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link, Route, Switch } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" className="Navbar">
      <Navbar.Brand href="#home">신발 구멍가게</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link>
            <Link to="/">메인</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/detail">상세페이지</Link>
          </Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
