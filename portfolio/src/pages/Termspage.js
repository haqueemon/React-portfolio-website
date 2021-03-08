import React,{ Component, Fragment } from 'react'
import Header2 from '../components/Header2/Header2'
import Menubar from '../components/Nav/TopMenu'
import Terms from '../components/Terms/Terms'
import Footertop from '../components/Footer/Footertop'

class Termspage extends Component{

    componentDidMount(){
        window.scroll(0,0);
    }
    
    render(){
        return(
            <Fragment>
                <Header2 pageTitle="Terms"/>
                <Menubar page_title="Terms"/>
                <Terms/>
                <Footertop/>
            </Fragment>
        )
    }

}

export default Termspage;