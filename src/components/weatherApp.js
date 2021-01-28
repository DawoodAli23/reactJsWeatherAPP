import React, { Component } from 'react'
import {Col, Container ,Row, InputGroup, FormControl, Button, Alert} from 'react-bootstrap';
import Data from './Data'
export class WeatherApp extends Component {
    constructor(props){
        super(props);

        this.state={
            cityName:'',
            countryCode:'',
            showAlert:false,
            buttonPressed:false,
        }

        this.city='';
        this.country='';
    }

    handleCityName=(event)=>{
        this.city=event.target.value;
        
    };
    handleCountryCode=(event)=>{
        this.country=event.target.value;
        
    };

    handleClick=()=>{
        if(this.city==='' || this.country===''){
            this.setState({showAlert:true})
            //console.log("if",this.state);
        }else{
            this.setState({
                showAlert:false,
                cityName:this.city,
                countryCode:this.country,
            })
            //console.log("else",this.state);
        }
        //console.log(this.city,this.country,this.state.cityName,this.state.countryCode);
    }

    alertPop=()=>{
        if(this.state.showAlert){
            return(
                <Alert variant='Danger bg-danger text-white' dismissible onClose={()=>this.setState({showAlert:false})}>
                    <Alert.Heading >EMPTY FEILD</Alert.Heading>
                    <p>
                        Input Field(s) should not be empty
                    </p>
                </Alert>
            )
        }
        
    }

    render() {
        return (
            <Container className="bg-dark text-light">
                {this.alertPop()}
                <Row className="justify-content-md-center pt-4">
                    <Col md="auto">
                    <InputGroup className="mb-3">
                        <FormControl placeholder="City Name" onChange={this.handleCityName}/>
                        <FormControl placeholder="Country Code"onChange={this.handleCountryCode}/>
                        <Button variant="primary" size="md" className="ml-2" onClick={this.handleClick}>
                            Get Weather
                            {/* {console.log(this.state)} */}
                        </Button>
                    </InputGroup>
                        {<Data cityName={this.state.cityName} countryCode={this.state.countryCode}/>}
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default WeatherApp
