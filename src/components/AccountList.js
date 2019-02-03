import React, { Component } from 'react'
import Account from './Account'
import { fetchAccounts } from '../actions'

import Pagination from 'react-js-pagination';
import ReactPaginate from 'react-paginate';
import Modal from 'react-responsive-modal';


export default class AccountList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activePage : 1,
            accountsPerPage: 15,
            numberOfPages : 5,
            showModal: false,
            account: [],
            sortedData: [],
            filteredData: [],
            sort: {
                column: null,
                direction: 'desc'
            }
        }
        this.handleActivePage = this.handleActivePage.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        // console.log('nextProps: ',nextProps)
        let paginationAccounts = [];
            if(nextProps.accounts.length > 0) {
                paginationAccounts = nextProps.accounts.slice(this.state.activePage*this.state.accountsPerPage-this.state.accountsPerPage,
                    this.state.activePage*this.state.accountsPerPage, []);
            }
        this.setState({
            sortedData: paginationAccounts,
            filteredData: paginationAccounts
        })
    }


    handleActivePage(pageNumber) {
        this.setState({
            activePage: pageNumber
        })
    }

    componentDidMount() {
        this.props.fetchAccounts();
    }

    handleShow(_account) {
        console.log('handle show: ', _account)
        this.setState({ 
            showModal: true,
            account: _account
        });
    }

    handleClose() {
        this.setState({ showModal: false });
    }

    
    deleteAccount(account) {
        console.log('acc: ',account)
        this.props.deleteAccount(account);
        this.handleClose();
    }

    onSort = (column) => (e) => {
        const direction = this.state.sort.column ? (this.state.sort.direction === 'asc' ? 'desc' : 'asc') : 'desc';
        const sData = this.state.sortedData.sort((a,b) => {
            if(column === 'name') {
                const nameA = a.name.toUpperCase();
                const nameB = b.name.toUpperCase();
                if(nameA < nameB){
                    return -1;
                }
                if(nameA > nameB){
                    return 1;
                }
                return 0;
            }
            if(column === 'accountId'){
               return b.id - a.id
            }
            if(column === 'numberOfPayment') {
               return b.id - a.id
            }
            if(column === 'phone') {
                return b.phone - a.phone
            }
            if(column === 'total'){
                return b.totalDebit - a.totalDebit
            }
            if(column === 'monthly'){
                return b.monthlyDebit - a.monthlyDebit
            }
        })

        if(direction === 'asc'){
            sData.reverse();
        }

        this.setState({
            sort:{
                column: column,
                direction: direction
            },
            sortedData: sData
        })
    }

    searchByName = (e) => {
        let filteredAccounts = this.state.filteredData;
        filteredAccounts = filteredAccounts.filter((item) => {
            return item.name.toLowerCase().search(
                e.target.value.toLowerCase()) !== -1
        })
        this.setState({
            sortedData: filteredAccounts
        })
    }
    

    render() {

        console.log('props: ', this.props)

        return (
            <div>
                <div className="card">
                    <div className="card-header  card-header-primary">
                        <div className="nav-tabs-navigation">
                            <div className="nav-tabs-wrapper">
                                <ul className="nav">
                                    <li className="nav-item">  
                                        <a className="nav-link">
                                            <i className="material-icons p-1">access_time</i> Pregled svih zaduzenja
                                            <span className="nav-link" style={{'position':'absolute', 'right':'0', 'marginTop':'-36px', 'fontSize':'15px'}}>
                                                <i className="material-icons">search</i>
                                                <input className="" type="text"  placeholder="  Name" 
                                                    style={{'border':'0px','marginLeft':'5px', 'height':'26px', 'fontFamily':'Times New Roman', 'borderRadius': '2px'}} 
                                                    onChange={this.searchByName}/>
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table">
                                <thead className=" text-primary">
                                    <tr>
                                        <th onClick={this.onSort('accountId')}>
                                            <div style={{'marginBottom': '-5px', 'fontSize':'10px'}}>
                                                <span className="fa fa-chevron-up" ></span> 
                                            </div>
                                            <div style={{'marginRight':'8px', 'fontSize':'10px'}}>
                                                <span className="fa fa-chevron-down"></span>
                                            </div>
                                            <p style={{'marginTop': '-25px', 'marginLeft': '16px'}}>Account ID</p>
                                        </th>
                                        <th onClick={this.onSort('name')}>
                                            <div style={{'marginBottom': '-5px', 'fontSize':'10px'}}>
                                                <span className="fa fa-chevron-up" ></span> 
                                            </div>
                                            <div style={{'marginRight':'8px', 'fontSize':'10px'}}>
                                                <span className="fa fa-chevron-down"></span>
                                            </div>
                                            <p style={{'marginTop': '-25px', 'marginLeft': '16px'}}>Ime i prezime</p>
                                        </th>
                                        <th onClick={this.onSort('phone')}>
                                            <div style={{'marginBottom': '-5px', 'fontSize':'10px'}}>
                                                <span className="fa fa-chevron-up" ></span> 
                                            </div>
                                            <div style={{'marginRight':'8px', 'fontSize':'10px'}}>
                                                <span className="fa fa-chevron-down"></span>
                                            </div>
                                            <p style={{'marginTop': '-25px', 'marginLeft': '16px'}}>Telefon</p>
                                        </th>
                                        <th onClick={this.onSort('total')}>
                                            <div style={{'marginBottom': '-5px', 'fontSize':'10px'}}>
                                                <span className="fa fa-chevron-up" ></span> 
                                            </div>
                                            <div style={{'marginRight':'8px', 'fontSize':'10px'}}>
                                                <span className="fa fa-chevron-down"></span>
                                            </div>
                                            <p style={{'marginTop': '-25px', 'marginLeft': '16px'}}>Ukupno</p>
                                        </th>
                                        <th onClick={this.onSort('numberOfPayment')}>
                                            <div style={{'marginBottom': '-5px', 'fontSize':'10px'}}>
                                                <span className="fa fa-chevron-up" ></span> 
                                            </div>
                                            <div style={{'marginRight':'8px', 'fontSize':'10px'}}>
                                                <span className="fa fa-chevron-down"></span>
                                            </div>
                                            <p style={{'marginTop': '-25px', 'marginLeft': '16px'}}>Br.rata</p>
                                        </th>
                                        <th onClick={this.onSort('monthly')}>
                                            <div style={{'marginBottom': '-5px', 'fontSize':'10px'}}>
                                                <span className="fa fa-chevron-up" ></span> 
                                            </div>
                                            <div style={{'marginRight':'8px', 'fontSize':'10px'}}>
                                                <span className="fa fa-chevron-down"></span>
                                            </div>
                                            <p style={{'marginTop': '-25px', 'marginLeft': '16px'}}> Mjesecna rata</p>   
                                        </th>
                                        <th style={{'textAlign':'center'}}>
                                            <p>Akcije</p>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>

                                     {this.state.sortedData.map(account => {
                                     return <Account key={account.id} 
                                     //proslijediti iz match.params account_id?????
                                        accountId={account.id}
                                        userId={account.userId} 
                                        name={account.name} 
                                        phone={account.phone}
                                        totalDebit={account.totalDebit}
                                        monthlyDebit={account.monthlyDebit}
                                        numberOfPayment={account.numberOfPayment}
                                        handleSh={() => this.handleShow(account.id)}
                                        />
                                     })}   

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>


                <div className="pagination-centred">
                    {/* react-js-pagination */}
                    {/* className="pagination" */}
                    <Pagination  
                        activePage={this.state.activePage}
                        itemsCountPerPage={5}
                        totalItemsCount={this.props.accounts.length}
                        pageRangeDisplayed={5}
                        onChange={this.handleActivePage}
                    />

                </div>

                <Modal open={this.state.showModal} onClose={this.handleClose} 
                    style={{'height': '300px', 'width': '400px'}}>
                    <div className="card">
                        <div className="card-header card-header-primary">
                            <div className="nav-tabs-navigation">
                                <div className="nav-tabs-wrapper">
                                    <ul className="nav">
                                        <li className="nav-item">  
                                            <a className="nav-link">
                                                <i className="material-icons p-1">priority_high</i> Da li ste sigurni?
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="p-5">
                            Da li zelite da obrisete zaduzenje " {this.state.account} " ? 
                        </div>
                    </div>      
                    <div style={{'textAlign':'right'}}>
                        <button className="btn btn-danger btn-sm" onClick={this.handleClose}>Cancel</button>
                        <button className="btn btn-primary btn-sm" 
                            onClick={(id) => this.deleteAccount(this.state.account)}>
                            Save
                        </button>
                    </div>
                </Modal> 



            </div>
        )
    }
}
