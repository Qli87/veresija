import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    withRouter
  } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { loginRequest } from '../actions';
import { connect } from 'react-redux';

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
    }

    handleChangeFirstName(event) {
        this.setState({firstName: event.target.value})
    }
    handleChangePassword(event) {
        this.setState({password: event.target.value})
    }

    handleSubmit() {
        console.log('login');
        console.log('firstName:', this.state.firstName);
        console.log('firstName:', this.state.password);
        this.props.loginRequest(this.state.firstName, this.state.password);
    }



    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-sm-5 log-style">
                        <div className="log-title">
                            <h2>Admin Login</h2>
                            <p>Please enter you login details</p>
                        </div>
                        <div className="row p-2">
                            <input type="text" id="first_name" onChange={this.handleChangeFirstName}
                                    className="form-control input-sm"
                                    placeholder="First name" style={{'border':'none'}} required/>
                        </div>
                        <div className="row p-2">
                            <input type="password" id="password" onChange={this.handleChangePassword}
                                    className="form-control input-sm" 
                                    placeholder="Password" style={{'border':'none'}} required/>
                        </div>
                        <div className="row" style={{'marginTop':'40px'}}>
                            <div className="col-sm-6" style={{'padding': '2px'}}>
                                <input type="checkbox" style={{
                                        'float': 'left',
                                        'marginTop': '10px',
                                        'marginLeft': '13px'
                                    }}
                                />
                                <label style={{
                                    'marginTop': '7px',
                                    'marginLeft': '9px'
                                }}>Remember me </label>
                            </div>
                            <div className="col-sm-6" style={{
                                    'paddingTop': '7px',
                                    'textAlign': 'right'
                            }}>
                                <a href="#" style={{'color': 'purple', 'fontSize': '13px'}}>Forgot password?</a>
                            </div>
                        </div>

                        <div className="row" style={{'justifyContent': 'center'}}>
                            <div className="btn btn-sm borderBtn" style={{'backgroundColor':'purple'}}
                                onClick={this.handleSubmit}>
                                <span className="fi-account-login">Login</span>
                            </div>
                        </div>
                    </div>
              </div>
            </div>
        )
    }
}


const mapStateToProps = state => ({ user: state.user });

const mapDispatchToProps = dispatch => bindActionCreators({loginRequest}, dispatch);


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));