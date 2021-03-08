import React,{ Component, Fragment } from 'react'
import Contact from '../components/Contact/Contact'
import Header2 from '../components/Header2/Header2'
import Menubar from '../components/Nav/TopMenu'
import Footertop from '../components/Footer/Footertop'

class Contactpage extends Component{

    
    componentDidMount(){
        window.scroll(0,0);
    }
    
    render(){
        return(
            <Fragment>
                <Header2 pageTitle="Contact me"/>
                <Menubar page_title="Contact"/>
                <Contact/>
                <Footertop/>
            </Fragment>
        )
    }

}

export default Contactpage;