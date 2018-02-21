import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import HelloWorld from './hello';
import GoodbyeWorld from './goodbye';
import ChirpsList from './chirpsList';

class Navigation extends Component {

    render() {
        return (
            <div>
                <HelloWorld />
                <GoodbyeWorld />
                <ChirpsList />
            </div>
            // <Router>
            //     <Fragment>
            //         <Link to="/goodbye">Goodbye</Link>
            //         <Switch>
            //             <Route exact path="/" component={HelloWorld} />
            //             <Route path="/goodbye" component={GoodbyeWorld} />
            //             <Route exact path="/" component={ChirpsList} />
            //         </Switch>
            //     </Fragment>
            // </Router>
        )
    }
}

export default Navigation;