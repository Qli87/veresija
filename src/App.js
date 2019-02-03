import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// import {Tabs, Tab} from 'react-bootstrap-tabs';

import {BrowserRouter as Router, Route, Link, NavLink, withRouter} from 'react-router-dom';


import GetAccounts from './containers/GetAccounts'
import GetUsers from './containers/GetUsers'
import UserAdd from './components/UserAdd'
import Dashboard from './components/Dashboard'
// import AccountAdd from './components/AccountAdd'
import GetUsersForAccount from './containers/GetUsersForAccount'
import GetUserDetails from './containers/GetUserDetails'
import GetUserEdit from './containers/GetUserEdit'
import GetAccountDetails from './containers/GetAccountDetails'
import GetAccountEdit from './containers/GetAccountEdit'
import DeleteUser from './containers/DeleteUser'
import AddUser from './containers/AddUser'
import AddAccount from './containers/AddAccount';
import AddDebtPayment from './containers/AddDebtPayment';
import HistoryAccount from './containers/HistoryAccount';
import HistoryUser from './containers/HisotryUser';
import Login from './components/Login';

import Clock from 'react-live-clock';

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <div> <Dashboard /> </div>
  },
  // {
  //   path: "/login",
  //   main: () => <div> <Login /> </div>
  // },
  {
    path: "/userList",
    main: () => <div > 
        <GetUsers /> 
      </div>
  },
  {
    path: "/userAdd",
    main: () => <div> <AddUser /> </div>
  },
  {
    path: "/userDetails/:id?",
    main: ({match}) => <div> <GetUserDetails user_id={match.params} /> </div>
  },
  {
    path: "/userEdit/:id?",
    main: ({match}) => <div> <GetUserEdit user_id={match.params} /> </div>
  },
  {
    path: "/accountList",
    main: () => <div> <GetAccounts /> </div>
  },
  {
    path: "/accountAdd",
    main: () => <div> <AddAccount /> </div>
  },
  {
    path: "/accountDetails/:id?",
    main: ({match}) => <div> <GetAccountDetails account_id={match.params}/> </div>
  },
  {
    path: "/debtPayment/:id?",
    main: ({match}) => <div> <AddDebtPayment account_id={match.params} /> </div>
  },
  {
    path: "/accountHistory/:id?",
    main: ({match}) => <div> <HistoryAccount account_id={match.params} /> </div>
  },
  {
    path: '/userHistory/:id?',
    main: ({match}) => <div> <HistoryUser user_id={match.params}/> </div>
  },
  {
    path: "/accountEdit/:id?",
    main: ({match}) => <div> <GetAccountEdit account_id={match.params}/> </div>
  }

];


const fakeAuth = {
  isLoggedIn: true,
  authenticate(cb) {
    this.isLoggedIn= true,
    setTimeout(cb, 100)
  },
  singout(cb) {
    this.isLoggedIn= false,
    setTimeout(cb, 100)
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogged: false
    }
  }

  render() {
    <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'} />
    return (
      <Router>
       {/* {

        this.state.isLogged 
        ? */}

        <div className="container-fluid" style={{'backgroundColor': '#f1f1f1', 'height':'100%', 'width':'100%', 'minHeight':'100%', 'position': 'relative'}}>
          <div className="row" >

            <div className="col-lg-3 col-sm-1">
            {/* style={{'backgroundImage': 'url(assets/img/sb1.jpg)'}} */}
              <div className="sidebar"  style={{'backgroundImage': 'url(assets/img/sb1.jpg)'}}
                    data-color="purple" data-background-color="white" 
                    data-image="../assets/img/sidebar-1.jpg">
                    <div className="logo">
                        {/* <a to="/" className="simple-text logo-normal">
                            Veresija
                        </a> */}
                        <div style={{'textAlign':'center', 'fontStyle':'italic'}}>
                          <Clock format={'HH:mm:ss'} ticking={true} />
                        </div>
                    </div>
                    <div className="sidebar-wrapper">
                        <ul className="nav" >
                            <li >
                                <NavLink to="/" exact={true} className="nav-link"  activeStyle={{ 'backgroundColor': '#9c27b0', 'color':'white', 'fontWeight':'bold'}}>
                                    <i className="material-icons">dashboard</i>
                                    <p>Pocetna</p>
                                </NavLink>
                            </li>
                            <li >
                                <NavLink to="/userList" exact={true} className="nav-link" activeStyle={{ 'backgroundColor': '#9c27b0', 'color':'white','fontWeight':'bold'}}>
                                    <i className="material-icons">person</i>
                                    <p>Lista korisnika</p>
                                </NavLink>
                            </li>

                            <li className="nav-item ">
                                <NavLink to="/userAdd" className="nav-link" activeStyle={{ 'backgroundColor': '#9c27b0', 'color':'white','fontWeight':'bold' }}>
                                    <i className="material-icons">person_add</i>
                                    <p>Dodaj korisnika</p>
                                </NavLink>
                            </li>

                            <li className="nav-item ">
                                <NavLink to="/accountList" className="nav-link" activeStyle={{ 'backgroundColor': '#9c27b0', 'color':'white','fontWeight':'bold' }}>
                                    <i className="material-icons">note</i>
                                    <p>Lista zaduzenja</p>
                                </NavLink>
                            </li>
                            <li className="nav-item ">
                                <NavLink to="/accountAdd" className="nav-link" activeStyle={{ 'backgroundColor': '#9c27b0', 'color':'white','fontWeight':'bold'}}>
                                    <i className="material-icons">note_add</i>
                                    <p>Dodaj zaduzenje</p>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="col-lg-8 col-sm-11 pt-3">
              {/* <div className="col-lg-12 col-md-12 col-sm-11"> */}
                {routes.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.main}
                  />
                ))}
              {/* </div> */}
            </div>
          </div>
 

           <div className="row">
              <div className="footer" 
              style={{'position': 'relative', 'height':'40px', 'left': '0', 'bottom': '0', 'width': '100%', 'backgroundColor':'#f1f1f1', 'borderTop': '1px solid #e7e7e7'}}>
                      <div className="ml-4 pt-2"></div> 
                </div>             
           </div>

        </div>
        {/* :
        <Login />
       }
 */}

      

      </Router>


    );
  }
}

export default App;
