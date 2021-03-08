import React from 'react'
import { Component, Fragment } from 'react'
import { Container, Row } from 'react-bootstrap'
import firstIcon from '../../assets/image/icon-1.png'
import secondIcon from '../../assets/image/icon-2.png'
import thirdIcon from '../../assets/image/icon-3.png'


class Services extends Component {
	render(){
		return (
			<Fragment>
				<Container className="about">
					<Row>
			            <div className="container">
			                <h2 className="heading-2">Services</h2>
			                <div className="about-list">
			                    <div lg={4} md={6} sm={12} className="about-item">
			                        <div className="icon">
			                            <img src={firstIcon}/>
			                        </div>
			                        <h3 className="heading-3">Development</h3>
									<div className="white-space10"></div>
			                        <p className="p-text">
			                            We are currently running efficient database of restaurant,so easily choose your area by zip code
			                        </p>
			                    </div>
			                    <div lg={4} md={6} sm={12} className="about-item">
			                        <div className="icon">
			                            <img src={secondIcon}/>
			                        </div>
			                        <h3 className="heading-3">Design</h3>
									<div className="white-space10"></div>
			                        <p className="p-text">
			                            We are currently running efficient database of restaurant,so easily choose your area by zip code
			                        </p>
			                    </div>
			                    <div lg={4} md={6} sm={12} className="about-item">
			                        <div className="icon">
			                            <img src={thirdIcon}/>
			                        </div>
			                        <h3 className="heading-3">eCommerce</h3>
									<div className="white-space10"></div>
			                        <p className="p-text">
			                            We are currently running efficient database of restaurant,so easily choose your area by zip code
			                        </p>
			                    </div>
			                </div>
			            </div>
					</Row>
				</Container>
			</Fragment>
		);
	}
}

export default Services;