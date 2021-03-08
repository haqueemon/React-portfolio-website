import React,{ Component, Fragment } from 'react'
import Header2 from '../components/Header2/Header2'
import Menubar from '../components/Nav/TopMenu'
import Privacy from '../components/Privacy/Privacy'
import Footertop from '../components/Footer/Footertop'

class Privacypage extends Component{

    componentDidMount(){
        window.scroll(0,0);
    }
    
    render(){
        return(
            <Fragment>
                <Header2 pageTitle="Privacy"/>
                <Menubar page_title="Privacy"/>
                <Privacy/>
                <Footertop/>
            </Fragment>
        )
    }

}

export default Privacypage;