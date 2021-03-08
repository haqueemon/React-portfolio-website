import React,{ Component, Fragment } from 'react'
import {Container, Row, Col, Button, Form} from 'react-bootstrap'

class Contact extends Component{
    render(){
        return(
            
            <Fragment>
                <Container>
                    <div className="white-space30"></div>
                    <Row>
                    <Col lg={6} md={6} sm={12} className="p-2">
                        <p className="test_p">Get in touch</p>
                        <Form className="form-box">
                            <Form.Group>
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="name" />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                    <Col lg={6} md={6} sm={12} className="p-2" >
                        <p className="test_p">Personal info</p>
                        <div className="footerSingleDiv">
                            <p>Sust-Gate, Temukhi, Sylhet</p>
                            <p>Email : devemon11@gmail.com</p>
                            <p>Mobile : 01746150145</p>
                        </div>
                    </Col>

                    </Row>
                    <div className="white-space"></div>
                </Container>
            </Fragment>
        )
    }
}

export default Contact;