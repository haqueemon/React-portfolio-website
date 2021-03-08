import React,{ Component, Fragment } from 'react'
import Header2 from '../components/Header2/Header2'
import Menubar from '../components/Nav/TopMenu'
import Refund from '../components/Refund/Refund'
import Footertop from '../components/Footer/Footertop'

class Refundpage extends Component{

    componentDidMount(){
        window.scroll(0,0);
    }
    
    render(){
        return(
            <Fragment>
                <Header2 pageTitle="Refunds"/>
                <Menubar page_title="Refunds"/>
                <Refund/>
                <Footertop/>
            </Fragment>
        )
    }

}

export default Refundpage;