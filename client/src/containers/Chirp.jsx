import React, { Component } from 'react';
import ChirpComponent from '../components/Chirp';
import { Link } from 'react-router-dom';

class Chirp extends Component {
    constructor() {
        super();

        this.state = {
            chirp: {}
        };
    }

    fetchChirp() {
        const id = this.props.match.params.id;
        
        fetch(`http://localhost:3000/api/chirps/${id}`)
            .then(res => res.json())
            .then((chirp) => {
                this.setState({
                    chirp
                });
            });
    }

    componentDidMount() {
        this.fetchChirp();
    }

    handleDelete = (id) => {
        fetch(`http://localhost:3000/api/chirps/${id}`, {
            method: 'DELETE'
        })
        .then(() => {
            console.log('bye bye chirp');
            this.fetchChirp();
        });
    };

    render() {
    return (
        <div>
            <ChirpComponent config={ this.state.chirp } handleDelete={ this.handleDelete } />
            <Link to={`/edit/${this.props.match.params.id}`}>EDIT</Link>
        </div>
    );
    }
}

export default Chirp;