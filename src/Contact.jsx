import { Col, Container, Form, Image, Row } from "react-bootstrap"
import contactImage from './assets/home.jpg'
// import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <>
        <div id="Contact" style={{maxHeight:'100vh'}} className=" container-fluid mt-5">
            <hr className='mx-auto border border-danger w-75'/>
            <h1 className="display-1 text-center text-danger fw-bolder"> GET IN TOUCH.</h1>
            <hr className='mx-auto border border-danger w-75'/>
            <div>
                <Container fluid >
                    <Row className="d-flex flex-md-row justify-content-center g=0 mb-5" >
                        {/* form */}
                        <Col className="formCol bg-danger" sm={12} md={9}>
                            <h2 className="contactFormTitle mb-5">BOOK AN ONSITE FITTING</h2>
                            <form>
                                <Form.Group className="mb-3 customGroup mb-5" controlId="formBasicEmail">
                                    <Form.Control className="customInput" type="text" placeholder="name" />
                                </Form.Group>
                                <Form.Group className="mb-3 customGroup mb-5" controlId="formBasicEmail">
                                    <Form.Control className="customInput" type="text" placeholder="phone" />
                                </Form.Group>
                                <Form.Group className="mb-3 customGroup mb-5" controlId="formBasicEmail">
                                    <Form.Control className="customInput" type="text" placeholder="address" />
                                </Form.Group>
                                <button className="contactButton ">BOOK A FITTING</button>
                            </form>
                        </Col>
                        {/* image */}
                        <Col sm={12} md={3} className="d-flex justify-content-center align-item-center">   
                            <Image style={{Height:'480px'}} src={contactImage} fluid/>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    </>
  )
}

export default Contact