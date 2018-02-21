import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// import Chirp from './Chirp';
// import ChirpsList from './ChirpsList';
// import ChirpForm from './ChirpForm';

const chirpApi = "http://localhost:3000/api/chirps";

class App extends Component {
    constructor(props){
        super(props)

        this.state = {
            chirps: []
        }
    }

    componentDidMount(){
        fetch(chirpApi)
        .then(res => res.json())
        .then(obj => this.setState({ 
            chirps: obj
        })
       
    )}
 
    render() {
        return (
           <div>
              <h1>h</h1>
           </div>
        )
    }
}

export default App;