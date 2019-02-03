import React from 'react'
import Select from 'react-select';


export default class AccountEdit extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id: '',
            userId: '',
            name: [],
            totalDebit: '',
            monthlyDebit: '',
            numberOfPayment: '',
            startedPayment: '',
            totalForPay: '',
            productDetails: '',
            selectedUser: '',
            nextPayment: '',
            accountForEdit: {}
        }
        this.handleChangeTotalDebit = this.handleChangeTotalDebit.bind(this);
        this.handleChangeMonthlyDebit = this.handleChangeMonthlyDebit.bind(this);
        this.handleChangeNumberOfPayment = this.handleChangeNumberOfPayment.bind(this);
        this.handleChangeStartedPayment = this.handleChangeStartedPayment.bind(this);
        this.handleChangeTotalForPay = this.handleChangeTotalForPay.bind(this);
        this.handleChangeProductDetails = this.handleChangeProductDetails.bind(this);
        this.handleSelectNameChange = this.handleSelectNameChange.bind(this);
    }

    componentDidMount() {
        this.props.fetchAccountDetails(this.props.account_id.id);
        this.props.fetchUsersForSelect();
    }

    componentWillReceiveProps(nextProps) {
        // console.log('next props: ', nextProps)
        let namesFromApi = nextProps.userForSelect.map(name => {return {value: name.userId, label: name.name}})
        let _selectedUser = namesFromApi.find(item => item.value === parseInt(nextProps.account.userId))
        this.setState({
            name: namesFromApi,
            selectedUser: _selectedUser,
            totalDebit: nextProps.account.totalDebit,
            monthlyDebit: nextProps.account.monthlyDebit,
            numberOfPayment: nextProps.account.numberOfPayment,
            startedPayment: nextProps.account.startedPayment,
            totalForPay: nextProps.account.totalForPay,
            productDetails: nextProps.account.productDetails,
            //ne valja!
            accountForEdit: {
                id: parseInt(this.props.account_id.id),
                name: _selectedUser,
                totalDebit: this.state.totalDebit,
                productDetails: this.state.productDetails,
                totalDebit: this.state.totalDebit,
                numberOfPayment: this.state.numberOfPayment,
                monthlyDebit: this.state.monthlyDebit,
                totalForPay: this.state.totalForPay,
                startedPayment: this.state.startedPayment
            }
        });
    }

    handleSelectNameChange(selectedUser){
        this.setState({selectedUser: selectedUser})
    }

    handleChangeTotalDebit(e) {
        this.setState({totalDebit: e.target.value});
    }

    handleChangeMonthlyDebit(e) {
        this.setState({monthlyDebit: e.target.value});
    }

    handleChangeNumberOfPayment(e) {
        this.setState({numberOfPayment: e.target.value});
    }

    handleChangeStartedPayment(e){
        this.setState({startedPayment: e.target.value});
    }

    handleChangeTotalForPay(e){
        this.setState({totalForPay: e.target.value});
    }

    handleChangeProductDetails(e){
        this.setState({productDetails: e.target.value});
    }

    submitForm() {
        this.props.editAccount(this.state.accountForEdit)
    }

    render(){

        // console.log('state: ', this.state)
        // console.log('props: ', this.props)

        var totalDebit = parseFloat(this.state.totalDebit);
        var nOfP = parseFloat(this.state.numberOfPayment);
        var mPay = parseFloat(totalDebit/nOfP).toFixed(2)
        

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
                                    <div className="col-lg-5 col-md-6 col-sm-6">
                                      <div className="form-group">
                                      <label name="select">Izaberite korisnika: </label>
                                      
                                      <Select 
                                        value={this.state.selectedUser}
                                        onChange={this.handleSelectNameChange}
                                        options={this.state.name}
                                      />
                          

                                      </div>
                                    </div>

                                    <div className="col-lg-7">

                                      <div className="form-group">
                                        <label name="description">Opis proizvoda:</label>
                                        <textarea className="form-control" rows="3" 
                                            name="description" style={{'border': '0px'}} 
                                            value={this.state.productDetails}
                                            onChange={this.handleChangeProductDetails}></textarea>
                                      </div>

                                    </div>
                                </div>

                                <div className="row">
                                  <div className="col-lg-4 col-sm-6">
                                    <div className="form-group">
                                      <label name="price">Cijena proizvoda:</label>
                                      <input type="number" className="form-control" name="price" min="0" style={{'border': '0px'}} 
                                      value={this.state.totalDebit || ""} 
                                      onChange={this.handleChangeTotalDebit}></input>
                                    </div>
                                  </div>

                                  <div className="col-lg-4 col-sm-6">
                                    <div className="form-group">
                                      <label name="payment">Broj rata:</label>
                                      <input type="number" className="form-control" name="" min="0" style={{'border': '0px'}} 
                                      value={this.state.numberOfPayment || ""} 
                                      onChange={this.handleChangeNumberOfPayment}></input>
                                    </div>
                                  </div>

                                  <div className="col-lg-4 col-sm-6">
                                    <div className="form-group">
                                      <label name="payment">Iznos rate:</label>
                                      <input type="number" className="form-control" name="" min="0" style={{'border': '0px'}} 
                                      value={mPay} 
                                      onChange={this.handleChangeMonthlyDebit}></input>
                                    </div>
                                  </div>

                                  {/* <div className="col-lg-3 col-sm-6">
                                    <div className="form-group">
                                      <label name="payment">Ostatak:</label>
                                      <input type="number" className="form-control" name="" min="0" style={{'border': '0px'}} 
                                      value={this.state.totalForPay || ""}  
                                      onChange={this.handleChangeTotalForPay}></input>
                                    </div>
                                  </div> */}

                                </div>




                              <div className="row">
                                <div className="col-lg-6">
                                  {/* <div className="form-group"> */}
                                    {/* <input type="number" className="form-control" min="0" style={{'border': '0px'}}/> */}
                                  {/* </div> */}
                                  <div className="form-group">
                                    <label name="payment">Pocinje placanje od:</label>
                                    <input type="date" name="bday" max="3000-12-31" min="1000-01-01" className="form-control" style={{'border': '0px'}} 
                                    value={this.state.startedPayment || ""}
                                    onChange={this.handleChangeStartedPayment}/>
                                  </div>
                                </div>
                              </div>

                              
                                <div className="row">
                                    <div className="ml-4 mb-4">
                                        <button type="submit" 
                                        onClick={() => this.submitForm(this.state.accountForEdit)}
                                        className="btn btn-primary pull-right">
                                        Sacuvaj
                                        </button>
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