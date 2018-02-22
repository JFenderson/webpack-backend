import React, { Component } from 'react';


//TURN INTO A CLASS

class Chirp extends Component{
        constructor(props){
                super(props)
        }
//  var chirp = props.chirps.map((chirp) => {
//      console.log(chirp)
//             return (
//                 <div>
//                     <p key={this.props.chirp.id}>
//                         {this.props.chirp.name}{this.props.chirp.text}
//                     </p>
//                     <h1>this is the child of </h1>
//                 </div>
//             )
        render(){
        return (
                <div>
                     <h2>{props.config.name}</h2>
                <p>{props.config.text}</p>   
                </div>
                
                )
        }
 }
//  )}




// ChirpsList = React.createClass({
//     render() {
//         return <div className="chirps-list">
//             
//             })}
//         </div>;
//     }
// });
   



export default Chirp;