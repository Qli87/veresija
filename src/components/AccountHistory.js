import React, { Component } from 'react'
import AccountHistoryItem from './AccountHistoryItem';
import { withRouter } from 'react-router-dom'


class AccountHistory extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            sumTotalDebit : 0,
            sumDebitPayment: 0,
            total: 0
        }
        this.backClick = this.backClick.bind(this)
    }

    componentDidMount() {
        this.props.fetchHistory(this.props.account_id);
    }

    componentWillReceiveProps(nextProps) {
        var sumTD = 0;
        var sumDP = 0;
        var total = 0;
        nextProps.accounts.map((item) => {
            sumTD += item.totalDebit
            sumDP += item.debitPayment
        })
        total = sumTD - sumDP
        this.setState({
            sumTotalDebit: sumTD,
            sumDebitPayment: sumDP,
            total: total
        })
    }

    backClick() {
        let path = '/listaZaduzenja';
        this.props.history.push(path);
    }

    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-header card-header-primary">
                        <div className="nav-tabs-navigation">
                            <div className="nav-tabs-wrapper">
                                <ul className="nav">
                                    <li className="nav-item">  
                                        <a className="nav-link">
                                            <i className="material-icons" title="Nazad" onClick={this.backClick} style={{'cursor':'pointer'}}>keyboard_backspace</i>
                                            {/* DODATI USER NAMA */}
                                            <i className="material-icons p-1 ml-3">access_time</i> Istorija placanja za zaduzenje broj: #{this.props.account_id.id}
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
                                       <th>Datum</th>
                                       <th>Opis</th>
                                       <th>Zaduzenje</th>
                                       <th>Razduzenje</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.props.accounts.map((item) => {
                                        return <AccountHistoryItem 
                                            key={item.id}
                                            description={item.description}
                                            totalDebit={item.totalDebit}
                                            debitPayment={item.debitPayment}
                                            date={item.date}
                                        />
                                    })}    
                                </tbody>
                            </table>

                            <div className="mt-3" style={{'borderRadius':'4px','textAlign':'center', 'backgroundColor':'lightgreen'}}>
                                <label style={{'marginTop':'8px','fontWeight': 'bold', 'color': 'rebeccapurple'}}>Saldo: {this.state.total}€ </label>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default withRouter(AccountHistory)