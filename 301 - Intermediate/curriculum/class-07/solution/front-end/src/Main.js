import React from 'react';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import CitySearch from './CitySearch';
import axios from 'axios';
import LatLon from './LatLon';
import Map from './Map';
import Weather from './Weather';

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      displayError: false,
      displayMap: false,
      errorMessage: '',
      latitude: '',
      location: '',
      longitude: '',
      searchQuery: '',
      weather: []
    }
  }

  updateCity = (e) => {
    this.setState({ searchQuery: e.target.value });
  }

  displayLatLon = async () => {
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_MAP_KEY}&q=${this.state.searchQuery}&format=json`;
    let location;
    try {
      location = await axios.get(url)
      this.setState({ 
        location: location.data[0].display_name,
        latitude: location.data[0].lat, 
        longitude: location.data[0].lon, 
        displayMap: true,
        displayError: false });
    } catch(error) {
      this.setState({ 
        displayMap: false,
        displayError: true,
        errorMessage: error.response.status + ': ' + error.response.data.error });
    }  
    
    this.displayWeather(location.data[0].lat, location.data[0].lon)
  }

  displayWeather = async (lat, lon) => {
    try{
      const weather = await axios.get(`${process.env.REACT_APP_SERVER}/weather`, { params: {latitude: lat, longitude: lon, searchQuery: this.state.searchQuery}});
      this.setState({
        weather: weather.data
      })
    } catch(error){
      this.setState({
        displayMap: false,
        displayError: true,
        errorMessage: error.response.status + ': ' + error.response.data.error 
      })
    }
  } 

  render() {    
    return(
      <Container fluid>
        <Row>
          <Col>
            <CitySearch 
              updateCity={this.updateCity}
              displayLatLon={this.displayLatLon}
              hasError={this.state.displayError}
              errorMessage={this.state.errorMessage}
            />
          </Col>
        </Row>
        {this.state.displayMap && 
          <>
            <Row>
              <Col>
                <LatLon
                  city={this.state.location}
                  lat={this.state.latitude}
                  lon={this.state.longitude}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Map
                  img_url={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_MAP_KEY}&center=${this.state.latitude},${this.state.longitude}&size=${window.innerWidth}x300&format=jpg&zoom=12`}
                  city={this.state.location}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Weather
                  weather={this.state.weather}
                />
              </Col>
            </Row>
        </>
      }
      </Container>
    )
  }
}

export default Main;
