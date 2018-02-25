import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import Chirp from './Chirp';
import Add from './Add';
import Edit from './Edit';
import 'isomorphic-fetch';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={ Home } />
                    <Route path="/chirp/:id" component={ Chirp } />
                    <Route path="/add" exact component={ Add } />
                    <Route path="/edit/:id" exact component={ Edit } />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;