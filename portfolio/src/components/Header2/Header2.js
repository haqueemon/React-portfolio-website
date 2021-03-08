import React from 'react'
import {Component, Fragment} from 'react'
import { Container, Row, Col } from 'react-bootstrap'

class Header2 extends Component{
    render(){
        return(
            <Fragment>
                <Container fluid={true} className="topFixedBanner2 p-0">
                    <div className="topBannerOverlay2">
                        <Container className="topContent2">
                            <Row>
                                <Col className="text-center">
                                    <h1 className="belowTitle">{this.props.pageTitle}</h1>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        )
    }
}

export default Header2;