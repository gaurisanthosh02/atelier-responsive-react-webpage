import { Container, Image, Nav, Navbar } from "react-bootstrap"
import './Home.css'
// import React from 'react'
import homeImage from './assets/homeImage.jpg'
export const Home = () => {
  return (
    <div className="container-fluid text-center border rounded">

        {/* navbar */}
        <Navbar collapseOnSelect expand="lg">
          <Container>
            <Navbar.Brand href="#home" className="navTitle">ML</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto d-flex justify-content-between align-items-center">
                <Nav.Link className="text-danger fw-bold" href="#About">About</Nav.Link>
                <Nav.Link className="text-danger fw-bold" href="#Service">Service</Nav.Link>
                <Nav.Link className="text-danger fw-bold" href="#Lookbook">Process</Nav.Link>
                <Nav.Link className="text-danger fw-bold" href="#Collection">Collection</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link className="text-danger fw-bold" href="#Contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* title */}
        <h1 className="text-danger display-1 fw-bold text-center">MI ATELIER.</h1>

        {/* home image, content and button */}
        <div className="container-fluid position-relative">
        <Image  src={homeImage} fluid/>
          <div className="text-danger position-absolute text-center d-flex flex-column justify-content-center align-items-center w-100">
            <p className="overimageContent ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus corporis excepturi tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio harum maiores rerum!</p>
            <button className="homeButton">Book a Call</button>
          </div>
        </div>
    </div>
  )
}
