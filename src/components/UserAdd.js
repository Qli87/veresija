import React from 'react'
import ImageUploader from 'react-images-upload'


export default class UserAdd extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            description: '',
            phone: '',
            email: '',
            pictures: []
        }

        this.handleChangeFirstName = this.handleChangeFirstName.bind(this)
        this.handleChangeLastName = this.handleChangeLastName.bind(this)
        this.handleChangeDescription = this.handleChangeDescription.bind(this)
        this.handleChangePhone = this.handleChangePhone.bind(this)
        this.handleChangeEmail = this.handleChangeEmail.bind(this)
        this.sbForm = this.sbForm.bind(this)
        this.onDrop = this.onDrop.bind(this);
    }

    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
    }

    handleChangeFirstName(e) {
        this.setState({
            firstName: e.target.value
        })
    }

    handleChangeLastName(e) {
        this.setState({
            lastName: e.target.value
        })
    }

    handleChangeDescription(e) {
        this.setState({
            description: e.target.value
        })
    }

    handleChangePhone(e) {
        this.setState({
            phone: e.target.value
        })
    }

    handleChangeEmail(e) {
        this.setState({
            email: e.target.value
        })
    }

    sbForm() {
        console.log('submit: ', this.state)
        this.props.addUser(this.state);
    }

    render() {
         return(

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
                                        <div className="col-lg-5 offset-1 col-md-5 col-sm-12">
                                            <div className="form-group">
                                                <label className="bmd-label-floating">Ime</label>
                                                <input type="text" className="form-control" style={{'border': '0px'}}
                                                    value={this.state.firstName}
                                                    onChange={this.handleChangeFirstName}
                                                    required
                                                    />
                                            </div>
                                        </div>
                                        
                                        <div className="col-lg-5 col-md-5 col-sm-12">
                                            <div className="form-group">
                                                <label className="bmd-label-floating">Prezime</label>
                                                <input type="text" className="form-control" style={{'border': '0px'}}
                                                    value={this.state.lastName}
                                                    onChange={this.handleChangeLastName}
                                                    required
                                                    />
                                            </div>  
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <div className="form-group">
                                                <label className="bmd-label-floating">Detaljan opis korisnika</label>
                                                <textarea className="form-control" rows="1" style={{'border': '0px'}}
                                                    value={this.state.description}
                                                    onChange={this.handleChangeDescription}
                                                    ></textarea>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-5 offset-1 col-md-5 col-sm-6">
                                            <div className="form-group">
                                                <label className="bmd-label-floating">Telefon</label>
                                                <input type="text" className="form-control" style={{'border': '0px'}}
                                                    value={this.state.phone}
                                                    onChange={this.handleChangePhone}
                                                    required/>
                                            </div>
                                        </div>
                                        
                                        <div className="col-lg-5 col-md-5 col-sm-6">
                                            <div className="form-group">
                                                <label className="bmd-label-floating">E-mail</label>
                                                <input type="text" className="form-control" style={{'border': '0px'}}
                                                    value={this.state.email}
                                                    onChange={this.handleChangeEmail}/>
                                            </div>  
                                        </div>
                                    </div>

                                    <div className="row">
                                        {/* <div className>
                                            <div className="form-group">
                                                    <label className="bmd-label-floating">Odaberite sliku korisnika</label>
                                                </div>
                                        </div> */}

                                        <div className="col-sm-8 col-sm-12">    
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

                                    <div className="row">
                                        <div className="p-3">
                                            <button onClick={this.sbForm}
                                                 className="btn btn-primary pull-right">Sačuvaj</button>
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

        )
    }
}