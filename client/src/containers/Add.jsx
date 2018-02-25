import React, { Component } from 'react';

class Add extends Component {
    constructor() {
        super();

        this.state = {
            message: ''
        };
    }

    handleSubmit = () => {
        const chirp = {
            handle: 'jen',
            message: this.state.message
        };

        fetch('http://localhost:3000/api/chirps', {
            method: 'POST',
            body: JSON.stringify(chirp),
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            })
        })
        .then(res => res.json())
        .then((response) => {
            this.props.history.push(`/chirp/${response.id}`);
        });
    };

    handleChange = (e) => {
        this.setState({
            message: e.target.value
        });
    };

    render() {
        return (
            <div>
                <h1>Jen says:</h1>
                <textarea onChange={ this.handleChange } name="" id="" cols="30" rows="10" placeholder="Write your chirp"></textarea>
                <button onClick={ this.handleSubmit }>SUBMIT</button>
            </div>
        );
    }
}

export default Add;