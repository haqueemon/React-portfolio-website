import React from 'react'
import {Component, Fragment} from 'react'
import Topbanner from '../components/Topbanner/Topbanner';
import Services from '../components/Services/Services';
import Menubar from '../components/Nav/TopMenu';
import Chart from '../components/Chart/Chart';
import Summary from '../components/Summary/Summary';
import Project from '../components/Projects/Projects';
import Video from '../components/Video/Video';
import Testimonial from '../components/Testimonial/Testimonial';
import Footertop from '../components/Footer/Footertop';

class Home extends Component {

    componentDidMount(){
        window.scroll(0,0);
    }

    render(){
        return(
            <Fragment>
                <Menubar page_title="Home"/>
                <Topbanner/>
                <Chart/>
                <Project/>
                <Services/>
                <Summary/>
                {/* <Video/> */}
                <Testimonial/>
                <Footertop/>
            </Fragment>
        )
    }
}

export default Home;