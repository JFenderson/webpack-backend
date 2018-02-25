import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Chirp from '../components/Chirp';


const chirpApi = 'http://localhost:3000/api/chirps'

class Home extends Component {
    constructor(props){
        super(props)

        this.state = {
            chirps: [],
        }
    }

    loadChirps(){
        fetch(chirpApi)
        .then(res => res.json())
        .then((chirps) => {
            this.setState({ 
            chirps: chirps.reverse()
            });
        });
    }

    componentDidMount(){
       this.loadChirps();
    }

    handleDelete = (id) => {
        fetch(`http://localhost:3000/api/chirps/${id}`, {
            method: 'DELETE'
        })
        .then(() => {
            const chirps = [...this.state.chirps];
            const deleteIndex = chirps.findIndex((chirp) => chirp.id === id);

            chirps.splice(deleteIndex, 1);

            this.setState({
                chirps
            });
        });
    };
 
    render() {
    const mapChirps = this.state.chirps.map((chirp) => {
        return <Chirp key={chirp.id} config={chirp}
        handleDelete={this.handleDelete} />
    });
        return (
           <div>
               <Link to='/add'>
                    <i className=' fa fa-plus'></i>
                </Link>
                { mapChirps }
           </div>
        )
    }
}

export default Home;

