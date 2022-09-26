import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate();
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand
                        href="#home"
                        className="barMain"
                        onClick={() => navigate("/")}
                    >
                        제주한라산수산
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home" onClick={() => navigate("/")}>
                            Home
                        </Nav.Link>
                        <Nav.Link href="#features">Store</Nav.Link>
                        <Nav.Link href="#pricing">Cart</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default NavBar;
