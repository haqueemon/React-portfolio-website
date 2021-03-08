import React,{ Component, Fragment } from 'react'
import Header2 from '../components/Header2/Header2'
import Menubar from '../components/Nav/TopMenu'
import Projects from '../components/Projects/Projects'
import Footertop from '../components/Footer/Footertop'

class Projectpage extends Component{

    componentDidMount(){
        window.scroll(0,0);
    }
    
    render(){
        return(
            <Fragment>
                <Header2 pageTitle="Projects"/>
                <Menubar page_title="Projects"/>
                <Projects/>
                <Footertop/>
            </Fragment>
        )
    }

}

export default Projectpage;