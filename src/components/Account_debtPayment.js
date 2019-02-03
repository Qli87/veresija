import React from 'react'


export default class Account_debtPayment extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            debtPayment: 0
        }
        this.handleDebtPayment = this.handleDebtPayment.bind(this)
    }

    handleDebtPayment(e) {
        this.setState({
            debtPayment: parseFloat(e.target.value)
        })
    }

    componentDidMount() {
        this.props.fetchAccountDetails(this.props.account_id.id);
    }

    render() {
        // console.log('props: ', this.props)

        return(
            <div className="container-fluid">
                <div className="row">
                    <div className='col-lg-9 offset-1 col-md-12 col-sm-12'> 
                        <div className="card">
                            <div className="card-header card-header-primary">
                                <h4 className="card-title">Unos rate</h4>
                                <p className="card-category">Unesite tacan iznos rate u polju "Iznos rate"</p>
                            </div>
                            
                            <div className="card-body" >
                                <form>
                                    <div className="row">
                                        <div className="col-lg-12 col-sm-6">
                                        <div className="form-group">
                                            <label name="description">Korisnik:</label>
                                            <input className="form-control" name="description" value={this.props.account.name || ""} disabled></input>
                                        </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-12 col-sm-12">
                                        <div className="form-group">
                                            <label name="description">Opis proizvoda:</label>
                                            <textarea className="form-control" name="description" value={this.props.account.productDetails || ""} disabled></textarea>
                                        </div>
                                        </div>
                                    </div>

                                    <div className="row" style={{    'border': '1px solid lightgray',
                                                                        'marginLeft': '2px',
                                                                        'marginRight': '2px',
                                                                        'borderRadius': '2px'}}>
                                    <div className="col-lg-3 col-sm-6">
                                        <div className="form-group">
                                        <label name="price">Cijena proizvoda:</label>
                                        <input type="number" className="form-control" name="price" min="0" style={{'border': '0px'}} value={parseFloat(this.props.account.totalDebit).toFixed(2) || ""} disabled></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-3 col-sm-6">
                                        <div className="form-group">
                                        <label name="payment">Broj rata:</label>
                                        <input type="number" className="form-control" name="" min="0" style={{'border': '0px'}} value={this.props.account.numberOfPayment || ""} disabled></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-3 col-sm-6">
                                        <div className="form-group">
                                        <label name="payment">Iznos rate:</label>
                                        <input type="number" className="form-control" name="" min="0" style={{'border': '0px'}} value={parseFloat(this.props.account.monthlyDebit).toFixed(2) || ""} disabled></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-3 col-sm-6">
                                        <div className="form-group">
                                        <label name="payment">Ostatak:</label>
                                        <input type="number" className="form-control" name="" min="0" style={{'border': '0px'}} value={parseFloat(this.props.account.totalForPay).toFixed(2) || ""}  disabled></input>
                                        </div>
                                    </div>

                                    </div>

                                    <div className="row">

                                    <div className="col-lg-5 col-sm-12 offset-1">
                                        <div className="form-group">
                                        <label name="payment">Dospijece rate:</label>
                                        <input type="text" className="form-control" name="" min="0" style={{'border': '0px'}} value={this.props.account.nextPayment || ""} disabled></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-5 col-sm-12">
                                        <div className="form-group">
                                        <label name="payment" style={{'color':'#8e24aa'}}>Iznos rate:</label>
                                        <input type="number" min="0" style={{'color':'#8e24aa', 'borderColor':'#8e24aa', 'textAlign':'right'}} 
                                            className="form-control" 
                                            onChange={this.handleDebtPayment} 
                                            value={this.state.debtPayment}></input>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="ml-4 mb-4">
                                            <button type="submit" className="btn btn-primary pull-right">
                                                    Sacuvaj
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </form>

                            </div>
                            
                            <div className="card-footer" style={{'borderTop': '1px solid lightgray'}}>
                                <div className="stats">
                                    <i className="material-icons text-danger">warning</i>
                                    <a>Molimo Vas da popunite polje Iznos rate!</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}