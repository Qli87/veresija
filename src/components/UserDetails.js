import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'



class UserDetails extends React.Component {
    constructor(props) {
        super(props);
        this.backClick = this.backClick.bind(this); 
    }


    componentDidMount() {
        this.props.fetchUserDetails(this.props.user_id.id);
    }

    backClick() {
        let path = '/listaKorisnika';
        this.props.history.push(path);
    }


    render() {

        const {user} = this.props

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className='col-lg-12 col-md-10 col-sm-12'> 
                        <div className="card">
                            <div className="card-header card-header-primary">
                                <div className="nav-tabs-navigation">
                                    <div className="nav-tabs-wrapper">
                                        <ul className="nav">
                                            <li className="nav-item" >  
                                                <a className="nav-link" >
                                                    <i className="material-icons" title="Nazad" onClick={this.backClick} style={{'cursor':'pointer'}}>keyboard_backspace</i>
                                                    <i className="material-icons p-1 ml-3">person</i> Informacije o korisniku:
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div> 
                            <div className="card-body" >
                                <form className="form">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-5 col-sm-6">
                                            <div className="form-group">
                                                <label className="bmd-label-floating">Ime</label>
                                                <input type="text" className="form-control" style={{'border': '0px','backgroundColor':'white'}}
                                                value={this.props.user.name || ''} readOnly/>
                                            </div>
                                        </div>
                                        
                                        <div className="col-lg-6 col-md-5 col-sm-6">
                                            <div className="form-group">
                                                <label className="bmd-label-floating">Prezime</label>
                                                <input type="text" className="form-control" style={{'border': '0px','backgroundColor':'white'}}
                                                value={this.props.user.name || ''} readOnly/>
                                            </div>  
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <div className="form-group">
                                                <label className="bmd-label-floating"> Detaljan opis korisnika</label>
                                                <textarea className="form-control" rows="1" style={{'border': '0px','backgroundColor':'white'}} 
                                                value={this.props.user.username || ''} readOnly></textarea>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-5 offset-1 col-md-5 col-sm-6">
                                            <div className="form-group">
                                                <label className="bmd-label-floating">Telefon</label>
                                                <input type="text" className="form-control" style={{'border': '0px','backgroundColor':'white'}} 
                                                value={this.props.user.phone || ''} readOnly/>
                                            </div>
                                        </div>
                                        
                                        <div className="col-lg-5 col-md-5 col-sm-6">
                                            <div className="form-group">
                                                <label className="bmd-label-floating">E-mail</label>
                                                <input type="text" className="form-control" style={{'border': '0px','backgroundColor':'white'}} 
                                                value={this.props.user.email || ''} readOnly/>
                                            </div>  
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(UserDetails)