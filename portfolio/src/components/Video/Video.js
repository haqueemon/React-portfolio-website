import React from 'react'
import { Component, Fragment } from 'react'
import { Container, Row, Col, Modal, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'

import 'video-react/dist/video-react.css';
import { Player, BigPlayButton } from 'video-react';


class Video extends Component{

    constructor(){
        super();
        this.state = {
            show: false
        }
    }

    modalClose=()=>{
        this.setState({
            show: false
        })
    }

    modalOpen=()=>{
        this.setState({
            show: true
        })
    }

    render(){
        return(
            <Fragment>
                <Container className="text-center">
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                            <div>
                                <h2 className="heading-2 text-center">How we do</h2>
                                <p className="text-center">We've noted all the changes and tried make the change easy for you with this guide.I Ipsum is simply dummy text of how we do work. We've noted all the changes and tried make the change easy for you with this guide.I Ipsum is simply dummy text of how we do work.</p>
                                <p onClick={this.modalOpen}><FontAwesomeIcon className="playBtn" icon={faPlayCircle} /></p>
                            </div>
                            
                        </Col>
                    </Row>
                    <div className="white-space"></div>
                </Container>


                <Modal size="lg" show={this.state.show} onHide={this.modalClose}>
                    <Modal.Body>
                        <Player>
                            <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                            <BigPlayButton position="center"/>
                        </Player>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={this.modalClose}>
                        Close
                    </Button>
                    </Modal.Footer>
                </Modal>

            </Fragment>
        )
    }

}

export default Video;