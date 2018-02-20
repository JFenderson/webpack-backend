import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import HelloWorld from './Hello';
import GoodbyeWorld from './Goodbye';
import ChirpRouter from './ChirpForm';

class Navigation extends Component {
    render(){
        return (
            <Router>
                <Fragment>
                    <Link to='/Goodbye'>Goodbye</Link>
                    <Switch>
                        <Route exact path='/' component={HelloWorld} />
                        <Route path='/Goodbye' component={GoodbyeWorld} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;