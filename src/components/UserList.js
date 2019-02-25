import React from 'react'
import User from '../components/User';
import Pagination from 'react-js-pagination';
import Modal from 'react-responsive-modal';

export default class UserList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            activePage : 1,
            usersPerPage: 5,
            numberOfPages : 5,
            showModal: false,
            sort: {
                column: null,
                direction: 'desc'
            },
            sortedData: [],
            filteredData: [],
            user: [],
            showPagination: false
        }
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleActivePage = this.handleActivePage.bind(this);
    }

    componentDidMount() {
        // console.log('componentDidMount');
        this.props.fetchUsers();
    }

    componentWillReceiveProps(nextProps) {
        // console.log('componentWillReceiveProps');
        // console.log('USER LIST NEXT PROPS: ',nextProps);
        let paginationUsers= [];
        let showP = false;
        if(nextProps.users.length > 0) {
            paginationUsers = nextProps.users.slice(this.state.activePage*this.state.usersPerPage-this.state.usersPerPage,
                this.state.activePage*this.state.usersPerPage, []);
            if(this.state.usersPerPage >= nextProps.users.length){
                showP = true
            } else {
                showP = false
            }
        }
        this.setState({
            sortedData: paginationUsers,
            filteredData: paginationUsers,
            showPagination: showP
        })
    }

    handleClose() {
        this.setState({ showModal: false });
      }
    
    handleShow(_user) {
        // console.log('user in handleShw: ', _user.name);
        this.setState({ 
            showModal: true,
            user: _user
        });
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
            } else if(column ==='email') {
                const mailA = a.email.toUpperCase();
                const mailB = b.email.toUpperCase();
                if(mailA < mailB){
                    return -1;
                }
                if(mailA > mailB){
                    return 1;
                }
                return 0;
            } else if(column === 'address') {
                const addressA = a.email.toUpperCase();
                const addressB = b.email.toUpperCase();
                if(addressA < addressB){
                    return -1;
                }
                if(addressA > addressB){
                    return 1;
                }
                return 0;
            }
             else {
                return b.id - a.id;     
            }
        })
        if(direction === 'asc') {
            sData.reverse();
        }
        this.setState({
            sort: {
                column: column,
                direction: direction
            },
            sortedData: sData
        })
    }


    searchByName = (event) => {
        let filteredUsers = this.state.filteredData;
        filteredUsers = filteredUsers.filter((item) => {
            return item.name.toLowerCase().search(
                event.target.value.toLowerCase()) !== -1
        })
        this.setState({
            sortedData: filteredUsers
        })
    }


    deleteUser(user) {
        this.props.deleteUser(user.id);
        // console.log('props in delete user: ', this.props);
        this.handleClose();
    }

    handleActivePage(pageNumber) {
        let paginationUsers = [];
        paginationUsers = this.props.users.slice(pageNumber*this.state.usersPerPage-this.state.usersPerPage,
            pageNumber*this.state.usersPerPage, []);
        this.setState({
            activePage: pageNumber,
            sortedData: paginationUsers
        })
    }


    render() {
        // console.log("USER LIST PROPS: ", this.props)
        return (
            <div className="row">
                <div className="card">
                    <div className="card-header card-header-primary">
                        <div className="nav-tabs-navigation">
                            <div className="nav-tabs-wrapper">
                                <ul className="nav">
                                    <li className="nav-item">  
                                        <a className="nav-link">
                                            <i className="material-icons p-1">supervisor_account</i> Pregled svih korisnika
                                            <span className="nav-link" style={{'position':'absolute', 'right':'0', 'marginTop':'-36px', 'fontSize':'15px'}}>
                                                <i className="material-icons">search</i>
                                                <input className="" type="text"  placeholder="Name"
                                                    style={{'border':'0px','marginLeft':'5px', 'height':'26px', 'fontFamily':'Lucida Console, Monaco, monospace', 'borderRadius': '2px'}} 
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
                                        <th onClick={this.onSort('id')} style={{'cursor':'pointer'}}>
                                            <div style={{'marginBottom': '-5px', 'fontSize':'10px'}}>
                                                <span className="fa fa-chevron-up" ></span> 
                                            </div>
                                            <div style={{'marginRight':'8px', 'fontSize':'10px'}}>
                                                <span className="fa fa-chevron-down"></span>
                                            </div>
                                            <p style={{'marginTop': '-25px', 'marginLeft': '16px'}}>User ID</p>
                                        </th>

                                        <th className="sortable" onClick={this.onSort('name')} style={{'cursor':'pointer'}}>
                                            <div style={{'marginBottom': '-5px', 'fontSize':'10px'}}>
                                                <span className="fa fa-chevron-up" ></span> 
                                            </div>
                                            <div style={{'marginRight':'8px', 'fontSize':'10px'}}>
                                                <span className="fa fa-chevron-down"></span>
                                            </div>
                                            <p style={{'marginTop': '-25px', 'marginLeft': '16px'}}>Ime</p>
                                        </th>
                                        <th onClick={this.onSort('email')} style={{'cursor':'pointer'}}>
                                            <div style={{'marginBottom': '-5px', 'fontSize':'10px'}}>
                                                <span className="fa fa-chevron-up" ></span> 
                                            </div>
                                            <div style={{'marginRight':'8px', 'fontSize':'10px'}}>
                                                <span className="fa fa-chevron-down"></span>
                                            </div>
                                            <p style={{'marginTop': '-25px', 'marginLeft': '16px'}}>E-mail</p>
                                        </th>
                                        <th onClick={this.onSort('address')} style={{'cursor':'pointer'}}>
                                            <div style={{'marginBottom': '-5px', 'fontSize':'10px'}}>
                                                <span className="fa fa-chevron-up" ></span> 
                                            </div>
                                            <div style={{'marginRight':'8px', 'fontSize':'10px'}}>
                                                <span className="fa fa-chevron-down"></span>
                                            </div>
                                            <p style={{'marginTop': '-25px', 'marginLeft': '16px'}}>Adresa</p>
                                        </th>
                                        <th style={{'textAlign':'center'}}>
                                            <p>Akcije</p>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {   this.state.sortedData.map(user => {
                                            return <User key={user.id}
                                                    user_id={user.id}
                                                    id={user.id}
                                                    name={user.name}
                                                    email={user.email}
                                                    address={user.address}
                                                    handleSh={() => this.handleShow(user)}
                                            />
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                    {
                        this.state.showPagination
                        ?
                        ""
                        :
                        <div className="pagination-centred">
                        {/* react-js-pagination */}
                        <Pagination className="pagination" 
                            activePage={this.state.activePage}
                            itemsCountPerPage={this.state.usersPerPage}
                            totalItemsCount={this.props.users.length}
                            pageRangeDisplayed={5}
                            onChange={this.handleActivePage}
                            hideDisabled
                        />
                        </div>
                    }




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
                            Da li zelite da obrisete korisnika " {this.state.user.name} " ? 
                        </div>
                    </div>      
                    <div style={{'textAlign':'right'}}>
                        <button className="btn btn-danger btn-sm" onClick={this.handleClose}>Cancel</button>
                        <button className="btn btn-primary btn-sm" onClick={(id) => this.deleteUser(this.state.user)}>Save</button>
                    </div>
                </Modal>  

            </div>
        )
    }
}



