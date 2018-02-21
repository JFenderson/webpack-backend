import React from 'react';
import ChirpsList from './ChirpsList';

function Chirp (props){
 var chirp = props.chirps.map((chirp) => {
     console.log(chirp)
            return (
                <div>
                    <ChirpsList />
                </div>
            )
        return (
            <div>
                { chirplist }
            </div>
                )
 }
 )}




// ChirpsList = React.createClass({
//     render() {
//         return <div className="chirps-list">
//             
//             })}
//         </div>;
//     }
// });
   



