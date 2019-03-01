import React, { Component } from 'react'
import { fetchUsers } from '../actions'
import SelectSearch from 'react-select-search';
import { Dropdown } from 'semantic-ui-react';
import Select from 'react-select';
import { withRouter } from 'react-router-dom'


class AccoundAdd extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          users: [],
          selectedUser: '',
          productDetails: '',
          totalDebit: 0,
          numberOfPayment: 1,
          // monthlyPayment: 0,
          startedPayment: '',
          payDebit: 0
        }
        this.handleSelectUser = this.handleSelectUser.bind(this)
        this.handleChangeDetails = this.handleChangeDetails.bind(this)
        this.handleChangeTotalDebit = this.handleChangeTotalDebit.bind(this)
        this.handleChangeNumberOfPayment = this.handleChangeNumberOfPayment.bind(this)
        // this.handleChangeMonthlyPayment = this.handleChangeMonthlyPayment.bind(this)
        this.handleChangeStartedPayment = this.handleChangeStartedPayment.bind(this)
        this.handleChangePayDebit = this.handleChangePayDebit.bind(this)
        this.backClick = this.backClick.bind(this)
    }

    componentDidMount() {
      this.props.fetchUsersForSelect();
      this.props.fetchUsers();
    }

    componentWillReceiveProps(nextProps) {
      // console.log('next props: ',nextProps.usersForSelect);
      let namesFromApi = nextProps.userForSelect.map(name => {return {value: name.userId, label: name.name}})
      this.setState({
        users: namesFromApi
      })
    }

    backClick() {
      let path = '/listaZaduzenja'
      this.props.history.push(path);
    }

    handleSelectUser(name) {
      this.setState({
        selectedUser: name
      })
    }

    handleChangeDetails(e){
      this.setState({
        productDetails: e.target.value
      })
    }

    handleChangeTotalDebit(e){
        this.setState({
          totalDebit: e.target.value,
        })
    }

    handleChangeNumberOfPayment(e){
        this.setState({
          numberOfPayment: e.target.value
        })
    }

    // handleChangeMonthlyPayment(e){
    //   // PODESITI DECIMAL(2 MJESTA)
    //   let totalDebit = parseFloat(this.state.totalDebit);
    //   let nOfP = parseFloat(this.state.numberOfPayment);
    //   let mPay = parseFloat(totalDebit/nOfP);
    //   console.log('mPay: ', mPay)
    //   this.setState({
    //     monthlyPayment: mPay
    //   })
    // }

    handleChangeStartedPayment(e) {
      this.setState({
        startedPayment: e.target.value
      })
    }

    handleChangePayDebit(e) {
      this.setState({
          payDebit: e.target.value
      })
    }


    render() {
        var totalDebit = parseFloat(this.state.totalDebit);
        var nOfP = parseFloat(this.state.numberOfPayment);
        var mPay = parseFloat(totalDebit/nOfP).toFixed(2);

        return(
              <div className="container-fluid">
                <div className="row">
                    <div className='col-lg-9 offset-1 col-md-12 col-sm-12'> 
                        <div className="card">
                            <div className="card-header card-header-primary">
                                {/* <h4 className="card-title">Zaduzenje</h4>
                                <p className="card-category">Unesite trazena informacije</p> */}
                                <div className="nav-tabs-navigation">
                                    <div className="nav-tabs-wrapper">
                                        <ul className="nav">
                                            <li className="nav-item">  
                                                <a className="nav-link">
                                                    <i className="material-icons" title="Nazad" onClick={this.backClick} style={{'cursor':'pointer'}}>keyboard_backspace</i>
                                                    <i className="material-icons p-1 ml-3">access_time</i> Dodaj zaduzenje
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="card-body" >
                                <form>
                                    <div className="row">
                                    {/* <SelectSearch options={users} value="sv" placeholder="Choose your language" /> */}
                                        <div className="col-lg-5 col-md-6 col-sm-6">
                                          <div className="form-group">
                                          <label name="select">Izaberite korisnika: </label>
                                          
                                          <Select 
                                            onChange={this.handleSelectUser}
                                            options={this.state.users}
                                          />
                                          
                                          </div>
                                        </div>

                                        <div className="col-lg-7">
                                          <div className="form-group">
                                            <label name="description">Opis proizvoda:</label>
                                            <textarea onChange={this.handleChangeDetails}
                                             className="form-control" rows="3" name="description" style={{'border': '0px'}}></textarea>
                                          </div>

                                        </div>
                                    </div>

                                    <div className="row">
                                      <div className="col-lg-4 col-sm-6">
                                        <div className="form-group">
                                          <label name="price">Cijena proizvoda:</label>
                                          <input onChange={this.handleChangeTotalDebit} value={this.state.totalDebit}
                                           type="number" className="form-control" name="price" min="0" style={{'border': '0px'}}></input>
                                        </div>
                                      </div>

                                      <div className="col-lg-4 col-sm-6">
                                        <div className="form-group">
                                          <label name="payment">Broj rata:</label>
                                          <input onChange={this.handleChangeNumberOfPayment} value={this.state.numberOfPayment}
                                          type="number" className="form-control" name="" min="0" style={{'border': '0px'}}></input>
                                        </div>
                                      </div>

                                      <div className="col-lg-4 col-sm-6">
                                        <div className="form-group">
                                          <label name="price">Iznos rate:</label>
                                          {/* onChange={this.handleChangeMonthlyPayment} */}
                                          <input value={mPay} 
                                            type="text" className="form-control" name="price" disabled ></input>
                                        </div>
                                      </div>
                                    </div>


                                  <div className="row">

                                    <div className="col-lg-4 p-4">
                                      <div>
                                        <label className="mt-3"> Pocinjem placanje od: </label>
                                      </div>
                                    </div>

                                    <div className="col-lg-4">
                                      <div className="form-group">
                                        <input type="date" name="bday" max="3000-12-31" min="1000-01-01" className="form-control" style={{'border': '0px'}}/>
                                      </div>
                                    </div>

                                    <div className="col-lg-4">
                                        <div className="form-group">
                                          <input className="form-control" 
                                            value={this.state.payDebit}
                                            onChange={this.handleChangePayDebit}
                                            type="number" style={{'border': '0px'}}/>
                                        </div>
                                    </div>

                                  </div>

                                  
                                  <div className="row">
                                        <div className="ml-4 mb-4">
                                            <button type="submit" className="btn btn-primary pull-right">Sacuvaj</button>
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

export default withRouter(AccoundAdd)