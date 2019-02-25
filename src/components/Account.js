import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    withRouter
  } from 'react-router-dom'


class Account extends React.Component {
    constructor(props) {
        super(props);
        this.handleClickDetails = this.handleClickDetails.bind(this);
        this.handleClickEdit = this.handleClickEdit.bind(this);
        this.handleClickDebtPayment = this.handleClickDebtPayment.bind(this);
        this.handleClickHistory = this.handleClickHistory.bind(this)
    }


    handleClickDetails(account_id) {
        let path = '/detaljiZaduzenja/'+account_id;
        this.props.history.push(path);
    }

    handleClickEdit(account_id) {
        let path = '/izmjeniZaduzenje/'+account_id;
        this.props.history.push(path);
    }

    handleClickDebtPayment(account_id) {
        let path = '/uplataZaduzenja/'+account_id;
        this.props.history.push(path)
    }

    handleClickHistory(account_id) {
        let path = '/istorijaZaduzenja/'+account_id;
        this.props.history.push(path)
    }

    render() {

        // console.log('props: ',this.props)

        return (
                <tr>
                    <td> #{this.props.accountId} </td>
                    {/* <td> {this.props.title} </td> */}
                    <td> {this.props.name} </td>
                    <td> {this.props.phone} </td>
                    <td style={{'textAlign':'center'}}> {this.props.totalDebit} </td>
                    <td style={{'textAlign':'center'}}> {this.props.numberOfPayment} </td>
                    <td style={{'textAlign':'center'}}> {this.props.monthlyDebit} </td>
                    <td className="td-actions text-right" style={{'textAlign':'center'}}>
                        <button type="button" rel="tooltip" 
                                onClick={() => this.handleClickHistory(this.props.accountId)}
                                title="Istorija" 
                                className="btn btn-success btn-link btn-sm" style={{'border': '0'}}>
                            <i className="material-icons">format_list_bulleted</i>
                        </button>
                        <button type="button" rel="tooltip" 
                                onClick={() => this.handleClickDebtPayment(this.props.accountId)}
                                title="Upisi ratu" 
                                className="btn btn-danger btn-link btn-sm" style={{'border': '0'}}>
                            <i className="material-icons">note_add</i>
                        </button>
                        <button type="button" rel="tooltip" 
                                onClick={() => this.handleClickDetails(this.props.accountId)}
                                title="Pogledaj zaduzenje" 
                                className="btn btn-success btn-link btn-sm" style={{'border': '0'}}>
                            <i className="material-icons">remove_red_eye</i>
                        </button>
                        <button onClick={() => this.handleClickEdit(this.props.accountId)}
                                type="button" rel="tooltip" 
                                title="Izmjeni zaduzenje" 
                                className="btn btn-primary btn-link btn-sm" style={{'border': '0'}}>
                            <i className="material-icons">edit</i>
                        </button>
                        <button type="button" rel="tooltip" 
                                onClick={() => this.props.handleSh(this.props.accountId)}
                                title="Obrisi zaduzenje" 
                                className="btn btn-danger btn-link btn-sm" style={{'border': '0'}}>
                            <i className="material-icons">close</i>
                        </button>
                    </td>
                </tr>
        )
    }
}


export default withRouter(Account)
