import React from 'react';
import { Link } from 'react-router-dom';

function Chirp(props) {
    return (
        <div>
            <h2>{ props.config.handle }</h2>
            <p>{ props.config.message }</p>
            <Link to={`/chirp/${props.config.id}`}>SEE DETAILS</Link>
            <button onClick={ () => { props.handleDelete(props.config.id) } }>
                <i className="fa fa-remove">DELETE ME</i>
            </button>
        </div>
    );
}

export default Chirp;