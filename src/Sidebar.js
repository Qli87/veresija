import React from 'react';
import {BrowserRouter as Router, Route, Link, NavLink, withRouter} from 'react-router-dom';

import Clock from 'react-live-clock';


export default class Sidebar extends React.Component {
    render() {
        return(
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
        )
    }
}