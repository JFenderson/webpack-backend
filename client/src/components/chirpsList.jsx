import React, { Component } from 'react';
import { render } from 'react-dom';




function ChirpsList (props) {
    
        return (<div className="chirps-list">
            {this.props.chirps.map((chirp, index) => {
                return <li key={`chirp-${index}`}>
                            <p>{chirp.name}</p>
                            <p>{chirp.text}</p> 
                        </li>;
            })}
        </div>
        )
};
                // for (var key in chirps) {
                //     if (chirps.hasOwnProperty(key)) {
                //         var val = chirps[key];
                //         var chirpName = chirps[key].user;
                //         var chirpText = chirps[key].text;
                //         console.log(val.id)
                //         console.log(chirpName);
                //         console.log(chirpText);
                //     }
                // }
