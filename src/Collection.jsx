import { Col, Container, Image, Row } from "react-bootstrap"
import collect1 from './assets/collct1.jpg'
// import React from 'react'
import collect2 from './assets/collect2.jpg'
import collect3 from './assets/collect3.jpg'
import collect4 from './assets/collect4.jpg'
import './Collection.css'
const Collection = () => {
  return (
    <>
        <div >
            <hr className='mx-auto border border-danger w-100'/>
            <h1 className="display-1 text-center text-danger fw-bolder">COLLECTIONS.</h1>
            <hr className='mx-auto border border-danger w-100'/>
            <div>
            <Container fluid>
                <Row className="g-4">
                    <Col sm={12} md={6}>
                    <div>
                        <Image src={collect1} style={{width:'380px', height:'500px', border:'solid white 5px'}} fluid />
                        <button >See All</button>
                    </div>
                    </Col>
                    <Col sm={12} md={6}>
                        <div>
                        <Image src={collect2} style={{width:'380px', height:'500px', border:'solid white 5px'}} fluid />
                        <button className="collectButton">See All</button>
                        </div>
                    </Col>
                </Row>
                <Row className="g-4">
                    <Col sm={12} md={6}>
                        <div>
                            <Image src={collect3} style={{width:'380px', height:'500px', border:'solid white 5px'}} fluid />
                            <button>See All</button>
                        </div>
                    </Col>
                    <Col sm={12} md={6}>
                        <div>
                        <Image src={collect4} style={{width:'380px', height:'500px', border:'solid white 5px'}} fluid />
                        <button>See All</button>
                        </div>
                    </Col>
                </Row>
            </Container>
            </div>
        </div>
    </>
)
}

export default Collection