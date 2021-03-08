import React from 'react'
import {Component, Fragment} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faTwitter,faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'

class Footertop extends Component{

    render(){
        return(
            <Fragment>
                <Container fluid={true} className="footerDiv">
                    <Row>
                        <Col lg={3} md={6} sm={12}>
                            <p className="test_p">Follow me</p>
                            <div className="footerSingleDiv">
                                <a href="www.facebook.com"><FontAwesomeIcon className="icon-footer" icon={faFacebook} /> Facebook</a>
                                <a href="www.twitter.com"><FontAwesomeIcon className="icon-footer" icon={faTwitter} /> Twitter</a>
                                <a href="www.linkedin.com"><FontAwesomeIcon className="icon-footer" icon={faLinkedin} /> Linked-in</a>
                                <a href="www.github.com"><FontAwesomeIcon className="icon-footer" icon={faGithub} /> Github</a>
                            </div>
                        </Col>
                        <Col lg={3} md={6} sm={12}>
                            <p className="test_p">Address</p>
                            <div className="footerSingleDiv">
                                <p>Sust-Gate, Temukhi, Sylhet</p>
                                <p>Email : devemon11@gmail.com</p>
                                <p>Mobile : 01746150145</p>
                            </div>
                        </Col>
                        <Col lg={3} md={6} sm={12}>
                            <p className="test_p">Information</p>
                            <div className="footerSingleDiv">
                                <Link to="/about">About me</Link>
                                <Link to="/contact">Contact me</Link>
                            </div>
                        </Col>
                        <Col lg={3} md={6} sm={12}>
                            <p className="test_p">Legal</p>
                            <div className="footerSingleDiv">
                                <Link to="/refund-policy">Refund Policy</Link>
                                <Link to="/terms">Terms & Condition</Link>
                                <Link to="/privacy">Privacy & Policy</Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container fluid={true} className="footerBottomDiv">
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                            <p className="footerBottomDiv_p">All reserved goes to Emon Ahmed</p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }

}

export default Footertop;