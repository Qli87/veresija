import React, { Component } from 'react'


export default class UserDetails extends React.Component {
    constructor(props) {
        super(props);
    }


    componentDidMount() {
        this.props.fetchUserDetails(this.props.user_id.id);
    }


    render() {

        console.log("props in render: ",this.props)
        const {user} = this.props

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className='col-lg-12 col-md-10 col-sm-12'> 
                        <div className="card">
                            <div className="card-header card-header-primary">
                                <h4 className="card-title">Korisnik</h4>
                                <p className="card-category">Unesite trazena informacije</p>
                            </div>
                            
                            <div className="card-body" >
                                <form className="form">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-5 col-sm-6">
                                            <div className="form-group">
                                                <label className="bmd-label-floating">Ime</label>
                                                <input type="text" className="form-control" style={{'border': '0px'}} 
                                                value={this.props.user.name || ''} />
                                            </div>
                                        </div>
                                        
                                        <div className="col-lg-6 col-md-5 col-sm-6">
                                            <div className="form-group">
                                                <label className="bmd-label-floating">Prezime</label>
                                                <input type="text" className="form-control" style={{'border': '0px'}} 
                                                value={this.props.user.name || ''}/>
                                            </div>  
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <div className="form-group">
                                                <label className="bmd-label-floating"> Detaljan opis korisnika</label>
                                                <textarea className="form-control" rows="1" style={{'border': '0px'}} 
                                                value={this.props.user.username || ''}></textarea>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-5 offset-1 col-md-5 col-sm-6">
                                            <div className="form-group">
                                                <label className="bmd-label-floating">Telefon</label>
                                                <input type="text" className="form-control" style={{'border': '0px'}} 
                                                value={this.props.user.phone || ''}/>
                                            </div>
                                        </div>
                                        
                                        <div className="col-lg-5 col-md-5 col-sm-6">
                                            <div className="form-group">
                                                <label className="bmd-label-floating">E-mail</label>
                                                <input type="text" className="form-control" style={{'border': '0px'}} 
                                                value={this.props.user.email || ''}/>
                                            </div>  
                                        </div>
                                    </div>

                                    {/* <div className="row">
                                        <div className="p-3">
                                            <button type="submit" className="btn btn-primary pull-right">Sacuvaj</button>
                                        </div>
                                    </div> */}

                                </form>
                            </div>

                            {/* <div className="card-footer" style={{'borderTop': '1px solid lightgray'}}>
                                <div className="stats">
                                    <i className="material-icons text-danger">warning</i>
                                    <a>Polja za ime, prezime i telefon su obavezna!</a>
                                </div>
                            </div> */}

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}