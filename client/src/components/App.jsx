import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// import Chirp from './Chirp';
import ChirpsList from './ChirpsList';
// import ChirpForm from './ChirpForm';

const chirpApi = 'http://localhost:3000/api/chirps'

class App extends Component {
    constructor(props){
        super(props)

        this.state = {
            chirps: [],
        }
    }

    //     loadChirps(){
    //     $.ajax({
    //     url: chirpApi,
    //     dataType: 'json',
    //     cache: false,
    //     success: function(chirps) {
    //       this.setState({chirps: chirps.chirps });
    //       console.log(chirps);
    //     }.bind(this),
    //     error: function(xhr, status, err) {
    //       console.error(this.props.url, status, err.toString());
    //     }.bind(this)
    //   });
    // }

    componentDidMount(){
        fetch(chirpApi)
        .then(res => res.json())
        .then((chirps) => {
            this.setState({ 
            chirps
        });
    })
}
 
    render() {
        const mapped = this.state.chirps.map((chirp)=>{
            return <Chirp config={chirp} key={chirp.id} />
        });
        return (
           <div>
                { mapped }
           </div>
        )
    }
}

export default App;

