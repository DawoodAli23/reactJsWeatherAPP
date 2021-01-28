import React, { Component } from 'react'
import axios from 'axios'
import {Col,Row,Container} from 'react-bootstrap';
import Cards from './Card'

export default class Data extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            main:'',
            id:'',
            temp:'',
            minTemp:'',
            maxTemp:'',
            city:'',
            countryCode:'',
            fetchedData:false,
        }
    }
    
    componentDidUpdate=(prevProps)=>{
        if(this.props!==prevProps){
            const apiKEY="2750cd5712f7f013d7cb6df23bec77f0";
            axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.props.cityName},${this.props.countryCode}&appid=${apiKEY}`).then(
                res=>{
                    this.setState({
                        main:res.data.weather[0].main,
                        id:res.data.weather[0].id,
                        temp:res.data.main.temp,
                        minTemp:res.data.main.temp_min,
                        maxTemp:res.data.main.temp_max,
                        city:res.data.name,
                        countryCode:res.data.sys.country,
                        fetchedData:true,
                    });
                    //console.log("state",this.state);
                }
            ).catch(
                error=>{
                    this.setState({fetchedData:false});
                    //console.log("INCORRECT CITY NAME OR COUNTRY CODE")
                }
            )
        }
    }
    
    render() {
        return (
            <div>
                {(!(this.props.cityName==='' && this.props.countryCode==='') && this.state.fetchedData)?
                    <Cards 
                        main={this.state.main}
                        id={this.state.id}
                        temp={this.state.temp}
                        minTemp={this.state.minTemp}
                        maxTemp={this.state.maxTemp}
                        city={this.state.city}
                        countryCode={this.state.countryCode}
                    />:
                    <Container>
                        <Row className="justify-content-md-center">
                            <Col md="auto">
                                <p className="font-weight-bold text-center">
                                    NO DATA TO SHOW. ENTER CITY NAME AND COUNTRY CODE<br></br>
                                    INCORRECT CITY NAME OR COUNTRY CODE
                                </p>
                            </Col>
                        </Row>
                    </Container>    
                }
            </div>
        )
    }
}

