import React, { Component } from 'react'
import DashboardUser from './DashboardUser';
import DashboardAccount from './DashboardAccount';

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchUsers();
        this.props.fetchAccounts();
    }

    render() {

        return (
        <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="card card-stats">
                    <div className="card-header card-header-warning card-header-icon">
                        <div className="card-icon">
                            <i className="material-icons">euro_symbol</i>
                        </div>
                        <p className="card-category">Dan</p>
                        <h6 className="card-title">55.00 {'\u20AC'}
                        </h6>
                    </div>
                    <div className="card-footer">
                        <div className="stats">
                            <i className="material-icons text-danger">warning</i>
                            <a href="#pablo">Dnevna dugovanja</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="card card-stats">
                    <div className="card-header card-header-success card-header-icon">
                        <div className="card-icon">
                            <i className="material-icons">euro_symbol</i>
                        </div>
                        <p className="card-category">Nedelja</p>
                        <h6 className="card-title">120.00 {'\u20AC'}
                        </h6>
                    </div>
                    <div className="card-footer">
                        <div className="stats">
                            <i className="material-icons text-danger">warning</i>
                            <a href="#pablo">Nedeljna dugovanja</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="card card-stats">
                    <div className="card-header card-header-primary card-header-icon">
                        <div className="card-icon">
                            <i className="material-icons">euro_symbol</i>
                        </div>
                        <p className="card-category">Mjesec</p>
                        <h6 className="card-title">520.00 {'\u20AC'}
                        </h6>
                    </div>
                    <div className="card-footer">
                        <div className="stats">
                            <i className="material-icons text-danger">warning</i>
                            <a href="#pablo">Mjesecna dugovanja</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="card card-stats">
                    <div className="card-header card-header-danger card-header-icon">
                        <div className="card-icon">
                            <i className="material-icons">account_balance</i>
                        </div>
                        <p className="card-category">Ukupno</p>
                        <h6 className="card-title">1200.00 {'\u20AC'}
                        </h6>
                    </div>
                    <div className="card-footer">
                        <div className="stats">
                            <i className="material-icons text-danger">warning</i>
                            <a href="#pablo">Ukupna dugovanja</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-lg-6 col-md-3 col-sm-3">

                <div className="card">
                    <div className="card-header card-header-tabs card-header-primary">
                            
                        <h4 className="card-title">
                            <a href="accountList">
                               <i className="material-icons">home</i> Zaduzenja
                            </a>
                        </h4>
                        <p className="card-category"><i className="material-icons">fiber_new</i>
                         Nova zaduzenja</p>
                    </div>
                    <div className="card-body table-responsive">
                        <table className="table table-hover">
                            <thead className="text-warning">
                                <tr>
                                    <th>ID</th>
                                    <th>Ime</th>
                                    <th>Zaduzenje</th>
                                    <th>Rata</th>
                                </tr>
                            </thead>
                            <tbody >
                                {/* accountEdit je problem
                                    provjeriti reducer?
                                */}
                                {this.props.accounts.map(account => {
                                    return <DashboardAccount
                                            key={account.id}
                                            id={account.id}
                                            name={account.name}
                                            monthlyDebit={account.monthlyDebit}
                                            totalDebit={account.totalDebit}
                                            user_id={account.userId}
                                            />
                                })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className="col-lg-6 col-md-3 col-sm-3">
                <div className="card">
                    <div className="card-header card-header-warning">
                        <h4 className="card-title">
                            <a href="userList">
                                <i className="material-icons">person_pin</i> Korisnici
                            </a>
                        </h4>
                        <p className="card-category"><i className="material-icons">fiber_new</i> Novi korisnici</p>
                    </div>
                    <div className="card-body table-responsive">
                        <table className="table table-hover">
                            <thead className="text-warning">
                                <tr>
                                    <th>Ime</th>
                                    <th>Telefon</th>
                                    <th>Adresa/e-mail</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.users.map(user => {
                                    return <DashboardUser 
                                        key={user.id}
                                        name={user.name}
                                        phone={user.phone}
                                        email={user.email}
                                        user_id={user.id}
                                        />
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}