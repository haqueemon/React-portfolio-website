import React from 'react'
import { Fragment, Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

class Testimonial extends Component{

    render(){

        var settings = {
            autoplaySpeed: 2000,
            autoplay: true,
            dots: true,
            infinite: true,
            // vertical: true,
            // verticalSwipping: true,
            horizontal: true,
            horizontalSwipping: true,
            speed: 2000,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  initialSlide: 1
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          };


        return(
            <Fragment>
                <Container className="text-center">
                    <div className="white-space"></div>
                    <h2 className="heading-2 text-center">Testimonial</h2>
                    <div className="white-space30"></div>
                    <Slider {...settings}>
                        <div>
                            <Row className="text-center justify-content-center">
                                <Col lg={8} md={8} sm={12}>
                                    <img src="https://technext.it/assets/img/technext/clients/mzi.jpg" className="circle_img"/>
                                    <p className="test_p">Professor Zafor Iqbal</p>
                                    <p className="tes_desc">We have only embarked on three projects with the Technext team so far, but they really outdid themselves with this initial delivery. Friendly, knowledgeable, consistently sought clarification, dedicated to delivering a proper solution, result-oriented. We are already in talks to undertake more projects and are strongly considering them as an extension of our technical team.</p>
                                </Col>
                            </Row>
                        </div>
                        <div>
                            <Row className="text-center justify-content-center">
                                <Col lg={8} md={8} sm={12}>
                                    <img src="https://technext.it/assets/img/technext/clients/mzi.jpg" className="circle_img"/>
                                    <p className="test_p">Professor Emon</p>
                                    <p className="tes_desc">We have only embarked on three projects with the Technext team so far, but they really outdid themselves with this initial delivery. Friendly, knowledgeable, consistently sought clarification, dedicated to delivering a proper solution, result-oriented. We are already in talks to undertake more projects and are strongly considering them as an extension of our technical team.</p>
                                </Col>
                            </Row>
                        </div>
                        <div>
                            <Row className="text-center justify-content-center">
                                <Col lg={8} md={8} sm={12}>
                                    <img src="https://technext.it/assets/img/technext/clients/mzi.jpg" className="circle_img"/>
                                    <p className="test_p">Ceo Abir</p>
                                    <p className="tes_desc">We have only embarked on three projects with the Technext team so far, but they really outdid themselves with this initial delivery. Friendly, knowledgeable, consistently sought clarification, dedicated to delivering a proper solution, result-oriented. We are already in talks to undertake more projects and are strongly considering them as an extension of our technical team.</p>
                                </Col>
                            </Row>
                        </div>
                    </Slider>
                    
                    <div className="white-space"></div>
                </Container>
            </Fragment>
        )
    }

}

export default Testimonial;