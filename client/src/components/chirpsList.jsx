import React from 'react';
import { render } from 'react-dom';



const chirps = "http:/chirps"

const ChirpsList = React.createClass({
        this.state = {
            chirpsArr: [],
        }
    }
    componentDidMount(){
            console.log('MOUNTED!!');

        fetch(chirps)
        .then(res => {
            console.log(res);
            return res.json();
        });

        }

    render(){
        return (
            <div className="content">
                <div className="card chirpContainer">
                    

                </div>
            </div>
        )
    }
    


    
});

export default ChirpsList;