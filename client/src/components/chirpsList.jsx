import React, { Component }from 'react';
import Chirp from './Chirp';


class ChirpsList extends Component{
    constructor(props){
        super(props)
    }
    
    render() {
    const chirp = this.props.chirps.map((chirp)=>{
        return (
            <Chirp 
            chirp={chirp} 
            key={chirp.id} />
        );
    })
        return(
        <ul className="chirp-list">
          { chirp }
        </ul>
        );
    }
};

export default ChirpsList;
//<ul>
//  {this.props.chirps.map((contact)=>{
//  return <Chirp chirp={chirp}/>
//  })}
//  
//  
//</ul>


// function ChirpsList (props) {
    
//         return (<div className="chirps-list">
//             {this.props.chirps.map((chirp, index) => {
//                 return <li key={`chirp-${index}`}>
//                             <p>{chirp.name}</p>
//                             <p>{chirp.text}</p> 
//                         </li>;
//             })}
//         </div>
//         )
// };
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


// var DonationList = React.createClass({
//     render: function() {
//       var donationNodes = this.props.data.map(function(donation) {
//         //map the data to individual donations
//         return (
//           <Donation
//             contributor={donation.contributor}
//             key={donation.id}
//             amount={donation.amount}
//           >
//             {donation.comment}
//           </Donation>
//         );
//       });
//       //print all the nodes in the list
//       return (
//         <div className="donationList">
//           {donationNodes}
//         </div>
//       );
//     }
//   });