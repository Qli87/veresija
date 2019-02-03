import React from 'react'
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';
import Login from './components/Login';
import App from './App';
import PrivateRoute from './components/PrivateRoute';


class MainApp extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <Router>
                <div>
                   <Route path='/login' component={Login} />
                   <PrivateRoute path='/' component={App} />
                </div>
            </Router>
        );
    }
}

export default MainApp;