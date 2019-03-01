import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import ImageUploader from 'react-images-upload'


class UserEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            username:'',
            phone: '',
            email: '',
            description: '',
            address: '',
            website: ''
        }

        this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangeDesc = this.handleChangeDesc.bind(this);
        this.handleChangePhone = this.handleChangePhone.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeAddress = this.handleChangeAddress.bind(this);
        this.saveEdit = this.saveEdit.bind(this);
        this.backClick = this.backClick.bind(this); 

    }

    componentDidMount() {
        // console.log('did mount');
        this.props.fetchUserDetails(this.props.user_id.id);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            //ovako treba da izgleda, kada se napravi server, validan api...
            // id: this.props.user_id.id,
            // name: nextProps.user.name,
            // username: nextProps.user.username,
            // desc: nextProps.user.description,
            // email: nextProps.user.email,
            // phone: nextProps.user.phone,
            // address: nextProps.user.address

            //vjestacki prikaz izmjenjenog korisnika
            id: parseInt(this.props.user_id.id),
            name: nextProps.user.name ? nextProps.user.name : nextProps.user.user.name ,
            username: nextProps.user.username ? nextProps.user.username : nextProps.user.user.username,
            description: nextProps.user.description ? nextProps.user.description : nextProps.user.user.description,
            email: nextProps.user.email ? nextProps.user.email : nextProps.user.user.email,
            phone: nextProps.user.phone,
            address: nextProps.user.address ? nextProps.user.address : nextProps.user.user.address,
            website: nextProps.user.website ? nextProps.user.website : nextProps.user.user.website
        })
    }

    backClick() {
        let path = '/listaKorisnika';
        this.props.history.push(path);
    }

    handleChangeFirstName(e) {
        this.setState({
            name: e.target.value
        })
    }

    handleChangeUsername(e) {
        this.setState({
            username: e.target.value
        })
    }

    handleChangePhone(e) {
        this.setState({
            phone: e.target.value
        })
    }

    handleChangeDesc(e) {
        this.setState({
            description: e.target.value
        })
    }

    handleChangeEmail(e) {
        this.setState({
            email: e.target.value
        })
    }

    handleChangeAddress(e){
        this.setState({
            address: e.target.value
        })
    }


    saveEdit() {
        // console.log('save edit');
        console.log('STATE IN EDIT: ', this.state)
        this.props.editUser(this.state);
        // let path = '/userList';
        // this.props.history.push(path);
    }


    render() {
        // console.log('props: ',this.props)
        // console.log('state: ',this.state)
        
        return (
            <div className="container-fluid">
            <div className="row">
                <div className='col-lg-12 col-md-10 col-sm-12'> 
                    <div className="card">
                        <div className="card-header card-header-primary">
                        <div className="nav-tabs-navigation">
                            <div className="nav-tabs-wrapper">
                                <ul className="nav">
                                    <li className="nav-item">  
                                        <a className="nav-link" >
                                            <i className="material-icons" title="Nazad" onClick={this.backClick} style={{'cursor':'pointer'}}>keyboard_backspace</i>
                                            <i className="material-icons p-1 ml-3">person</i> Izmjeni korisnika:
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
                                            <input type="text" name="name"
                                            className="form-control" style={{'border': '0px'}} 
                                            value={this.state.name || ""}
                                            onChange={this.handleChangeFirstName} 
                                            required/>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-6 col-md-5 col-sm-6">
                                        <div className="form-group">
                                            <label className="bmd-label-floating">Username</label>
                                            <input type="text" className="form-control" style={{'border': '0px'}}
                                            value={this.state.username || ""}
                                            onChange={this.handleChangeUsername} 
                                            required />
                                        </div>  
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                        <div className="form-group">
                                            <label className="bmd-label-floating"> Detaljan opis korisnika</label>
                                            <textarea className="form-control" rows="1" style={{'border': '0px'}}
                                            value={this.state.description || ""} 
                                            onChange={this.handleChangeDesc}></textarea>
                                        </div>
                                    </div>
                                </div>

                                <div className="row" style={{'paddingBottom':'60px'}}>
                                    <div className="col-lg-4 col-md-5 col-sm-6">
                                        <div className="form-group">
                                            <label className="bmd-label-floating">Telefon</label>
                                            <input type="text" className="form-control" style={{'border': '0px'}} 
                                            value={this.state.phone || ""}
                                            onChange={this.handleChangePhone}
                                            required/>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-8 col-md-5 col-sm-6">
                                        <div className="form-group">
                                            <label className="bmd-label-floating">E-mail</label>
                                            <input type="text" className="form-control" style={{'border': '0px'}} 
                                            value={this.state.email || ""}
                                            onChange={this.handleChangeEmail}/>
                                        </div>  
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-6 col-md-12 col-sm-12">
                                        <div className="form-group">
                                            <label className="bmd-label-floating"> Adresa</label>
                                            <textarea className="form-control" rows="1" style={{'border': '0px'}}
                                            value={this.state.address || ""} 
                                            onChange={this.handleChangeAddress}></textarea>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group" style={{'marginTop':'-66px'}}>
                                            <ImageUploader
                                                withPreview={true}
                                                withIcon={true}
                                                buttonText='Choose images'
                                                onChange={this.onDrop}
                                                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                                                maxFileSize={5242880}
                                                singleImage={true}
                                                label='Odaberite sliku za korisnika'
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="p-3">
                                    {/* type="submit"  */}
                                        <button className="btn btn-primary pull-right" 
                                        onClick={this.saveEdit}>Sacuvaj</button>
                                    </div>
                                </div>

                            </form>
                        </div>

                        <div className="card-footer" style={{'borderTop': '1px solid lightgray'}}>
                            <div className="stats">
                                <i className="material-icons text-danger">warning</i>
                                <a>Polja za ime, prezime i telefon su obavezna!</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        );
    }
}


export default withRouter(UserEdit);