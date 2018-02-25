import React, { Component } from 'react';

class Edit extends Component {
    constructor() {
        super();

        this.state = {
            chirp: {}
        };
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        
        fetch(`http://localhost:3000/api/chirps/${id}`)
            .then(res => res.json())
            .then((chirp) => {
                this.setState({
                    chirp
                });
            });
    }

    handleSubmit = () => {
        const chirp = {
            handle: this.state.chirp.handle,
            message: this.state.chirp.message
        };

        fetch(`http://localhost:3000/api/chirps/${this.state.chirp.id}`, {
            method: 'PUT',
            body: JSON.stringify(chirp),
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            })
        })
        .then(() => {
            this.props.history.push(`/chirp/${this.state.chirp.id}`);
        });
    };

    handleChange = (e) => {
        this.setState({
            chirp: Object.assign({}, this.state.chirp, { message: e.target.value })
        });
    };

    render() {
        return (
            <div>
                <h1>Jen wants to take back what she said:</h1>
                <textarea onChange={ this.handleChange } name="" id="" cols="30" rows="10" placeholder={this.state.chirp.message}></textarea>
                <button onClick={ this.handleSubmit }>SUBMIT</button>
            </div>
        );
    }
}

export default Edit;