import React from 'react';
import './Monitor.css';
import Header from '../Header/Header';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Homepage from '../Homepage/Homepage';
import CPU from '../CPU/CPU';
import RAM from '../RAM/RAM';
export default class Monitor extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Header />

                <Router>
                    <Switch>
                        <Route exact path="/CPU_Monitor">
                            <CPU URL={this.props.URL} />
                        </Route>
                        <Route exact path="/RAM_Monitor">
                            <RAM URL={this.props.URL} />
                        </Route>
                        <Route exact path="/">
                            <Homepage URL={this.props.URL} />
                        </Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}

