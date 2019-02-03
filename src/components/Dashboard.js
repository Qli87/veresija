import React, { Component } from 'react'

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
        <div className="row">
       
            {/* Napraviti dvije tablele kao sa templejta, jedna, purple, nedeljni krediti
            druga novi korisnici, sa ukupnim zaduzenjima */}

            <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="card card-stats">
                    <div className="card-header card-header-warning card-header-icon">
                        <div className="card-icon">
                            <i className="material-icons">euro_symbol</i>
                        </div>
                        <p className="card-category">Dan</p>
                        <h5 className="card-title">55
                        </h5>
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
                        <h5 className="card-title">120
                        </h5>
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
                        <h5 className="card-title">520
                        </h5>
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
                        <h5 className="card-title">1200
                        </h5>
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
                            <i className="material-icons">home</i> Zaduzenja
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
                            <tbody style={{'fontSize': '12px'}}>
                                <tr>
                                    <td>1</td>
                                    <td>Dakota Rice</td>
                                    <td>069/069-069</td>
                                    <td>$36,738</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Dakota Rice</td>
                                    <td>069/069-069</td>
                                    <td>$36,738</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Dakota Rice</td>
                                    <td>069/069-069</td>
                                    <td>$36,738</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>

            <div className="col-lg-6 col-md-3 col-sm-3">
                <div className="card">
                    <div className="card-header card-header-warning">
                        <h4 className="card-title">
                        <i className="material-icons">person_pin</i> Korisnici</h4>
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
                            <tbody style={{'fontSize': '12px'}}>
                                <tr>
                                    <td>Luka Kulusic</td>
                                    <td>069/069-069</td>
                                    <td>luka@t-com.me</td>
                                </tr>
                                <tr>
                                    <td>Aleksandar Scepanovic</td>
                                    <td>067/067-067</td>
                                    <td>coa@t-com.me</td>
                                </tr>
                                <tr>
                                    <td>Petar Petrovic</td>
                                    <td>068/068-068</td>
                                    <td>pero@t-com.me</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>



        </div>
        )
    }
}