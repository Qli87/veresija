import React, { Component } from 'react'
import Select from 'react-select';


export default class AccountDetails extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchAccountDetails(this.props.account_id.id);
    }

    render() {
      console.log(this.props);

        return(
            <div className="container-fluid">
            <div className="row">
                <div className='col-lg-9 offset-1 col-md-12 col-sm-12'> 
                    <div className="card">
                        <div className="card-header card-header-primary">
                            <h4 className="card-title">Zaduzenje</h4>
                            <p className="card-category">Unesite trazena informacije</p>
                        </div>
                        
                        <div className="card-body" >
                            <form>
                                <div className="row">

                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                      <div className="form-group">
                                        <label name="description">Korisnik:</label>
                                        <input className="form-control" rows="3" name="description" style={{'border': '0px'}} value={this.props.account.name || ""} disabled></input>
                                      </div>
                                    </div>

                                    <div className="col-lg-8 ">
                                      <div className="form-group">
                                        <label name="description">Opis proizvoda:</label>
                                        <textarea className="form-control" rows="3" name="description" style={{'border': '0px'}} value={this.props.account.productDetails || ""} disabled></textarea>
                                      </div>
                                    </div>

                                </div>

                                <div className="row">
                                  <div className="col-lg-4 col-sm-6">
                                    <div className="form-group">
                                      <label name="price">Cijena proizvoda:</label>
                                      <input type="number" className="form-control" name="price" min="0" style={{'border': '0px'}} value={this.props.account.totalDebit || ""} disabled></input>
                                    </div>
                                  </div>

                                  <div className="col-lg-4 col-sm-6">
                                    <div className="form-group">
                                      <label name="payment">Broj rata:</label>
                                      <input type="number" className="form-control" name="" min="0" style={{'border': '0px'}} value={this.props.account.numberOfPayment || ""} disabled></input>
                                    </div>
                                  </div>

                                  <div className="col-lg-4 col-sm-6">
                                    <div className="form-group">
                                      <label name="payment">Iznos rate:</label>
                                      <input type="number" className="form-control" name="" min="0" style={{'border': '0px'}} value={this.props.account.monthlyDebit || ""} disabled></input>
                                    </div>
                                  </div>

                                  {/* <div className="col-lg-3 col-sm-6">
                                    <div className="form-group">
                                      <label name="payment">Ostatak:</label>
                                      <input type="number" className="form-control" name="" min="0" style={{'border': '0px'}} value={this.props.account.totalForPay || ""}  disabled></input>
                                    </div>
                                  </div> */}

                                </div>

                                <div className="row">

                                  <div className="col-lg-6 col-sm-6">
                                    <div className="form-group">
                                      <label name="payment">Poceo placanje:</label>
                                      <input type="text" className="form-control" name="" min="0" style={{'border': '0px'}} value={this.props.account.startedPayment || ""} disabled></input>
                                    </div>
                                  </div>

                                  <div className="col-lg-6 col-sm-6">
                                    <div className="form-group">
                                      <label name="payment">Sledeca rata:</label>
                                      <input type="text" className="form-control" name="" min="0" style={{'border': '0px'}} value={this.props.account.nextPayment || ""} disabled></input>
                                    </div>
                                  </div>

                                </div>
                              
                            </form>

                        </div>
                          
                          <div className="card-footer" style={{'borderTop': '1px solid lightgray'}}>
                              <div className="stats">
                                  <i className="material-icons text-danger">warning</i>
                                  <a>Molimo Vas da popunite svako polje!</a>
                              </div>
                          </div>

                    </div>
                </div>
            </div>
        </div>
        )
    }
}