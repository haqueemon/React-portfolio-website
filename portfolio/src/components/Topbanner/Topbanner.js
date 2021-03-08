import React from 'react'
import { Component, Fragment } from 'react'
import "../../assets/css/bootstrap.min.css"
import "../../assets/css/custom.css"
import { Container, Row, Col, Button } from 'react-bootstrap'

class Topbanner extends Component {
    render(){
        return(
            <Fragment>
                <Container fluid={true} className="topFixedBanner p-0">
                    <div className="topBannerOverlay">
                        <Container className="topContent">
                            <Row>
                                <Col className="text-center">
                                    <h1 className="topTitle">I'm Emon Ahmed </h1>
                                    <h1 className="belowTitle">An  Experience & Professional Web Developer</h1>
                                    {/* <h1 className="belowTitle">Develop your dream project</h1>
                                    <Button className="button_custom" variant="primary">Hire Me</Button> */}
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default Topbanner;