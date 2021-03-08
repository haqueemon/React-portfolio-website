import React from 'react';
import { Component, Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BarChart, Bar, ResponsiveContainer, XAxis, Tooltip } from 'recharts';

class Chart extends Component {

    constructor(){
        super();

        this.state = {
            data:[
                {
                    Skill: 'Html-CSS',
                    Percentage: '95'
                },
                {
                    Skill: 'Bootstrap',
                    Percentage: '90'
                },
                {
                    Skill: 'PHP',
                    Percentage: '80'
                },
                {
                    Skill: 'Codeigniter',
                    Percentage: '85'
                },
                {
                    Skill: 'Laravel',
                    Percentage: '80'
                },
                {
                    Skill: 'Js',
                    Percentage: '70'
                },
                {
                    Skill: 'React',
                    Percentage: '75'
                },
                {
                    Skill: 'Wordpress',
                    Percentage: '75'
                }
            ]
        }
    }


      
    render(){
        var blue="rgba(0,115,230,0.8)";
        return(
			<Fragment>
                <div className="white-space"></div>
                <h2 className="heading-2 text-center">About Me</h2>
				<Container className="about">
					<Row>
                    <div className="white-space"></div>
                    <Col className="chart-Box" lg={7} md={7} sm={12}>
                        <ResponsiveContainer>
                            <BarChart width={100} height={300} data={this.state.data}>
                                <XAxis dataKey="Skill" />
                                <Tooltip />
                                <Bar dataKey="Percentage" fill={blue} />
                            </BarChart>
                        </ResponsiveContainer>
                    </Col>
                    <Col lg={5} md={5} sm={12}>
                        <p className="chart_p">

                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                        <br></br><br></br>
                        Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                        <br></br><br></br>
                        A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.

                        </p>
                    </Col>
					</Row>
				</Container>
			</Fragment>
        )
    }


}

export default Chart;