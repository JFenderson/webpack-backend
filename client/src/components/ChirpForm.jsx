import React, { Component } from 'react';

const chirps = "../../server/src/routes/chirps.js"



class ChirpForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    

    handleChange(e){
        this.setState({value: e.target.value});
    }

    handleClick(e){
        e.preventDefault();
        console.log('clicked');
    }

    render(){
        return(
            <div>
                <h1>Welcome to Chirper</h1>
                <input type="text" id="chirpInput" value={ this.state.value }/>
                <button id="">Send Chirp</button>
            </div>
        )
    }
}

export default ChirpForm;