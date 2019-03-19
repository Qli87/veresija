import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import './assets/css/overwrites.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import store from './store'
import Login from './components/Login'
import {BrowserRouter as Router, Route, Link, withRouter} from 'react-router-dom';
import MainApp from './MainApp';
import { LocalizeProvider } from 'react-localize-redux'


// const checkLogin = {
//     isLogged: true,
//     authenticate(cb) {
//         this.isLogged = false;
//         setTimeout(cb, 100); 
//       },
//       signout(cb) {
//         this.isLogged = false;
//         setTimeout(cb, 100);
//       }
// }

// 

render (
    <Provider store = {store}>
        <LocalizeProvider store={store}>
            <MainApp />
        </LocalizeProvider>
        {/* <Router>
            <div>
                {checkLogin.isLogged ? <App /> :  <Login />}
            </div>
        </Router> */}
    </Provider>, document.getElementById('root')
)




// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
