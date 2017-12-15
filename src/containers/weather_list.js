import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {

    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressure = cityData.list.map(weather => weather.main.pressure);
        const humidity = cityData.list.map(weather => weather.main.humidity);
        //ES6 sintax to map an object to two consts
        const { lon, lat } = cityData.city.coord;

        return (
            <tr key={name} >
                <td><GoogleMap lon={lon} lat={lat} /></td>
                <td><Chart data={temps} color="orange" units="K" /></td>
                <td><Chart data={pressure} color="green" units="hPa" /></td>
                <td><Chart data={humidity} color="black" units="%" /></td>                
            </tr>
        );
    }    

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Preassure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

// this is the same than cost weather = state.weather
function mapStateToProps ({weather}) {
    // this is the same than do return { weather: weather};
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);

