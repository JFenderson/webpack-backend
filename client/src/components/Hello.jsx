import React, { Component } from 'react';
import { render } from 'react-dom';


const chirpApi = 'http://localhost:3000/api/chirps'

class HelloWorld extends Component {
    
    componentDidMount() {
        fetch(chirpApi)
            .then(res => res.json())
            .then(obj => this.setState({
                chirps: obj
            }))
        
    }
    
    render() {
        return <h1>Hello World!</h1>;
    }
}

export default HelloWorld;