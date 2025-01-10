// import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Client.css'


const Client = () => {
  return (
    <>
        <div className="container-fluid bg-danger">
            <h1 className="clientTitle display-1 fw-bolder">CLIENTS.</h1>
            <Container fluid className='clientRow'>

                {/* row 1 */}
                <Row className="g-4 d-flex flex-sm-row bg-danger mb-5">
                    <Col md={4} className='bg-danger'>
                       <h3 className='bg-danger text-light'>COSMOPOLITIAN. </h3>
                    </Col>
                    <Col md={4} className='bg-danger'>
                        <h3 className='bg-danger text-light ms-5'>ELLE.</h3>
                    </Col>
                    <Col md={4} className='bg-danger'>
                        <h3 className='bg-danger text-light'>L OFFICIAL.</h3>
                    </Col>
                </Row>

                {/* row 2 */}
                <Row className="g-4 mb-5 bg-danger">
                    <Col md={4} className='bg-danger'>
                        <h3 className='bg-danger text-light ms-5'>BAZAR.</h3>
                    </Col>
                    <Col md={4} className='bg-danger'>
                        <h3 className='bg-danger text-light'>DORCEL.</h3>
                    </Col>
                    <Col md={4} className='bg-danger'>
                        <h3 className='bg-danger text-light ms-5'>STAR MEDIA.</h3>
                    </Col>
                </Row>

                {/* row 3 */}
                <Row className="g-4 mb-5 bg-danger">
                    <Col md={4} className='bg-danger'>
                        <h3 className='bg-danger text-light'>MARIE CLARIE.</h3>
                    </Col>
                    <Col md={4} className='bg-danger'>
                        <h3 className='bg-danger text-light ms-5'>SNB NEWS.</h3>
                    </Col>
                    <Col md={4} className='bg-danger'>
                        <h3 className='bg-danger text-light'>BAZAAR.</h3>
                    </Col>
                </Row>
            </Container>

        </div>
    </>
  )
}

export default Client