import React from 'react'
import {Component, Fragment} from 'react'
import Menubar from '../components/Nav/TopMenu'
import Header2 from '../components/Header2/Header2'
import Services from '../components/Services/Services'
import Footer from '../components/Footer/Footertop'

class Servicepage extends Component{
    render(){
        return(
            <Fragment>
                <Menubar page_title="Services"/>
                <Header2 pageTitle="Services"/>
                <div className="white-space"></div>
                <Services/>
                <Footer/>
            </Fragment>
        )
    }
}

export default Servicepage;