import React, { Component } from 'react';
import chirps from '../../../server/src/routes/chirps';



class ChirpRouter extends Component {
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
                <input type="text" id="chirpInput" value={ this.state.value }/>
                <button id=""></button>
            </div>
        )
    }
}
