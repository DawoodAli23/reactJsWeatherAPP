import React from 'react'
import {Col,Row,Container,Card,ListGroup ,ListGroupItem} from 'react-bootstrap';
const Cards=(props)=>{
    // console.log("props",props);
    return (
        <Container>
                <Row className="justify-content-md-center pb-5">
                    <Col md="auto">
                    <Card style={{ width: '38rem' }}>
                        <Card.Img variant="top" src={selectImage(props.id)} />
                        <Card.ImgOverlay className="text-dark">
                            <p>{props.main}</p>
                        </Card.ImgOverlay>
                        <Card.Body>
                            <Card.Title className="text-dark">{`${props.city},${props.countryCode}`}</Card.Title>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem className="text-dark">TEMP {(props.temp-273.5).toFixed(2)} celsius</ListGroupItem>
                                <ListGroupItem className="text-dark">MIN TEMP {(props.minTemp-273.5).toFixed(2)} celsius</ListGroupItem>
                                <ListGroupItem className="text-dark">MAX TEMP {(props.maxTemp-273.5).toFixed(2)} celsius</ListGroupItem>
                            </ListGroup> 
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </Container>
    )
};

const selectImage=(ID)=>{
    if(ID>=200 && ID<=232){
        return "https://raw.githubusercontent.com/erikflowers/weather-icons/54113376d944f6735054ef3b38dcee755471f1b9/svg/wi-thunderstorm.svg";
    }else if(ID>=300 && ID<=321){
        return "https://raw.githubusercontent.com/erikflowers/weather-icons/54113376d944f6735054ef3b38dcee755471f1b9/svg/wi-sprinkle.svg";
    }else if(ID>=500 && ID<=531){
        return "https://raw.githubusercontent.com/erikflowers/weather-icons/54113376d944f6735054ef3b38dcee755471f1b9/svg/wi-rain-mix.svg";
    }else if(ID>=600 && ID<=622){
        return "https://raw.githubusercontent.com/erikflowers/weather-icons/54113376d944f6735054ef3b38dcee755471f1b9/svg/wi-snow.svg";
    }else if(ID===701 || ID === 741){
        return "https://raw.githubusercontent.com/erikflowers/weather-icons/54113376d944f6735054ef3b38dcee755471f1b9/svg/wi-fog.svg";
    }else if(ID===711){
        return "https://raw.githubusercontent.com/erikflowers/weather-icons/54113376d944f6735054ef3b38dcee755471f1b9/svg/wi-smoke.svg";
    }else if(ID===721){
        return "https://raw.githubusercontent.com/erikflowers/weather-icons/54113376d944f6735054ef3b38dcee755471f1b9/svg/wi-day-haze.svg";
    }else if(ID===731){
        return "https://raw.githubusercontent.com/erikflowers/weather-icons/54113376d944f6735054ef3b38dcee755471f1b9/svg/wi-dust.svg";
    }else if(ID===751 || ID === 761 || ID===762 || ID ===771){
        return "https://raw.githubusercontent.com/erikflowers/weather-icons/54113376d944f6735054ef3b38dcee755471f1b9/svg/wi-sandstorm.svg";
    }else if(ID===781){
        return "https://raw.githubusercontent.com/erikflowers/weather-icons/54113376d944f6735054ef3b38dcee755471f1b9/svg/wi-tornado.svg";
    }else if(ID===800){
        return "https://raw.githubusercontent.com/erikflowers/weather-icons/54113376d944f6735054ef3b38dcee755471f1b9/svg/wi-day-sunny.svg";
    }else if(ID>=803 && ID<=821){
        return "https://raw.githubusercontent.com/erikflowers/weather-icons/54113376d944f6735054ef3b38dcee755471f1b9/svg/wi-cloud.svg";
    }
}


export default Cards;
