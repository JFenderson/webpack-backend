import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// import Chirp from './Chirp';
import ChirpsList from './ChirpsList';
// import ChirpForm from './ChirpForm';

class App extends Component{






    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={ Home }/>
                    <Route exact path='/' component={ Chirp } />
                    <Route exact path='/' component={ Add } />
                </Switch>
            </BrowserRouter>
        )
    }
}