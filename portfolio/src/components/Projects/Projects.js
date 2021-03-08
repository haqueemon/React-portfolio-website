import React from 'react'
import { Component, Fragment } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'

import justfood from '../../assets/image/justfood.png'
import ketofit from '../../assets/image/ketofit.png'
import sylhetnogor from '../../assets/image/sylhetnogor.png'

class Projects extends Component {

    constructor(){
		super();
		this.state = {
			justfood:[justfood],
			ketofit:[ketofit],
			sylhetnogor:[sylhetnogor],
		}
    }

    render(){
        return(
            
            <Fragment>
                <Container>
                    <div className="white-space"></div>
                    <h2 className="heading-2 text-center">My Projects</h2>
                    <div className="white-space30"></div>
                    <Row>
                    <Col lg={4} md={4} sm={12} className="p-2" >
                            <Card className="text-center">
                                <Card.Img variant="top" src={this.state.justfood} />
                                <Card.Body>
                                    <Card.Title>Food delivery website</Card.Title>
                                    <Card.Text>
                                    Technologies : PHP Laravel, Jquery, HTML, CSS, Bootstrap, Mysql etc.
                                    </Card.Text>
                                    <p><span><a href="http://justfood.webexcel.xyz/">Link : http://justfood.webexcel.xyz</a></span></p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={4} sm={12} className="p-2" >
                            <Card className="text-center">
                                <Card.Img variant="top" src={this.state.ketofit} />
                                <Card.Body>
                                    <Card.Title>Diet Plan Website</Card.Title>
                                    <Card.Text>
                                    Technologies : PHP Codeigniter, Jquery, HTML, CSS, Bootstrap, Mysql etc.
                                    </Card.Text>
                                    <p><span><a href="http://ketofittoday.com/">Link : http://ketofittoday.com</a></span></p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={4} sm={12} className="p-2" >
                            <Card className="text-center">
                                <Card.Img variant="top" src={this.state.sylhetnogor} />
                                <Card.Body>
                                    <Card.Title>Service website</Card.Title>
                                    <Card.Text>
                                    Technologies : PHP Codeigniter, Jquery, HTML, CSS, Bootstrap, Mysql etc.
                                    </Card.Text>
                                    <p><span><a href="http://sylhetnogor.com/">Link : http://sylhetnogor.com</a></span></p>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <div className="white-space"></div>
                </Container>
            </Fragment>

        )
    }



}

export default Projects;