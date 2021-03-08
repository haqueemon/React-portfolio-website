import React from 'react'
import { Component, Fragment } from 'react'
import "../../assets/css/bootstrap.min.css"
import "../../assets/css/custom.css"
import { Navbar, Nav } from 'react-bootstrap'
import {NavLink} from 'react-router-dom'

import firstLogo from '../../assets/image/navlogo.f599bd96.svg'
import secondLogo from '../../assets/image/navlogoScroll.d6db46a9.svg'


class TopMenu extends Component {

	constructor(props){
		
		super();
		this.state = {
			navTitle: "navTitle",
			borderNav: "borderNav",
			variant: "dark",
			logo:[firstLogo],
			backgroundColor: "navDefaultBackground",
			navItem: "navItemDefault",
			page_title: props.page_title,
		}

	}

	onScroll=()=>{

		if(window.scrollY > 100){
			this.setState({
				navTitle: "navTitleScroll",
				borderNav: "borderNavScroll",
				logo: [secondLogo],
				variant: "light",
				backgroundColor: "navBackgroundDefault",
				navItem: "navItemScroll",
			})
		}else if(window.scrollY < 100){
			this.setState({
				navTitle: "navTitle",
				borderNav: "borderNav",
				logo: [firstLogo],
				variant: "dark",
				backgroundColor: "navDefaultBackground",
				navItem: "navItemDefault",
			})
		}

	}

	componentDidMount(){
		window.addEventListener('scroll',this.onScroll)
	}


	render(){
		return (
			<Fragment>

				<title>{this.state.page_title}</title>
				<Navbar fixed="top" collapseOnSelect expand="lg" className={this.state.backgroundColor} variant={this.state.variant}>
				  <Navbar.Brand>
					  <NavLink className={this.state.navTitle} to="/"><span className={this.state.borderNav}>EM-ON</span></NavLink></Navbar.Brand>
				  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
				  <Navbar.Collapse id="responsive-navbar-nav">
				    <Nav className="mr-auto">
				    </Nav>
				    <Nav>
				      <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navItem} to="/">Home</NavLink></Nav.Link>
				      <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}}  className={this.state.navItem} to="/project">Projects</NavLink></Nav.Link>
				      <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}}  className={this.state.navItem} to="/service">Service</NavLink></Nav.Link>
				      <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}}  className={this.state.navItem} to="/about">About</NavLink></Nav.Link>
				      <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}}  className={this.state.navItem} to="/contact">Contact</NavLink></Nav.Link>
				    </Nav>
				  </Navbar.Collapse>
				</Navbar>

			</Fragment>
		)
	}


}

export default TopMenu;