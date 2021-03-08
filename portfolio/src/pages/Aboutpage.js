import React from 'react'
import {Component, Fragment} from 'react'
import Menubar from '../components/Nav/TopMenu';
import Chart from '../components/Chart/Chart';
import Header2 from '../components/Header2/Header2';
import Footertop from '../components/Footer/Footertop';

class Aboutpage extends Component {
    
    componentDidMount(){
        window.scroll(0,0);
    }
    
    render(){
        return(
            <Fragment>
                <Menubar page_title="About"/>
                <Header2 pageTitle="About"/>
                <Chart/>
                <div className="white-space"></div>
                <Footertop/>
            </Fragment>
        )
    }
}

export default Aboutpage;