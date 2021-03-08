import React from 'react'
import { Component, Fragment } from 'react'
import {Container, Row, Col } from 'react-bootstrap'
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor'

class Summary extends Component{
    render(){
        return(
            <Fragment>
                
				<div className="white-space"></div>
                <Container fluid={true} className="middleFixedBanner p-0">
                    <div className="middleBannerOverlay">
                        <Container>
                            <Row>
                                <Col lg={12} md={12} sm={12}>
                                    <Row>
                                        <Col className="text-center">
                                            <h1 className="counterNumber">

                                                <CountUp start={0} end={100}>
                                                {({ countUpRef, start }) => (
                                                    <VisibilitySensor onChange={start} delayedCall>
                                                    <span ref={countUpRef} />
                                                    </VisibilitySensor>
                                                )}
                                                </CountUp>

                                            </h1>
                                            <h4 className="counterTitle">Total projects</h4>
                                            <hr className="bg-white w-25"/>
                                        </Col>
                                        <Col className="text-center">
                                            <h1 className="counterNumber">

                                            <CountUp start={0} end={50}>
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                <span ref={countUpRef} />
                                                </VisibilitySensor>
                                            )}
                                            </CountUp>

                                            </h1>
                                            <h4 className="counterTitle">Happy clients</h4>
                                            <hr className="bg-white w-25"/>
                                        </Col>
                                        <Col className="text-center">
                                            <h1 className="counterNumber">

                                            <CountUp start={0} end={5}>
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                <span ref={countUpRef} />
                                                </VisibilitySensor>
                                            )}
                                            </CountUp>

                                            </h1>
                                            <h4 className="counterTitle">Experience year</h4>
                                            <hr className="bg-white w-25"/>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        );
    }

}

export default Summary;