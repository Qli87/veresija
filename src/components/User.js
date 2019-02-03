import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'


class User extends React.Component {
    constructor(props) {
        super(props);
        this.handleClickDetails = this.handleClickDetails.bind(this);
        this.handleClickEdit = this.handleClickEdit.bind(this);
        // this.handleClickDelete = this.handleClickDelete.bind(this);
    }



    // nextPath(path) {
    //     this.props.history.push(path);
    // }

    handleClickDetails(user_id) {
        let path = '/userDetails/'+user_id;
        this.props.history.push(path);
    }

    handleClickEdit(user_id) {
        console.log('edit:' ,user_id)
        let path = '/userEdit/'+user_id;
        this.props.history.push(path);
    }

    // handleClickDelete(user_id){
    //     console.log('delete user from user component')
    //     alert('are you sure', user_id);
    //     console.log(user_id)
    // }

    handleHistoryForUser(user_id) {
        let path = '/userHistory/'+user_id
        this.props.history.push(path)
    }

    render() {
        return (    
                <tr>
                    <td> #{this.props.id} </td>
                    <td> {this.props.name} </td>
                    <td> {this.props.email} </td>
                    <td> {this.props.address} </td>
                    <td className="td-actions text-center">
                        <button type="button" rel="tooltip" 
                                onClick={() => this.handleHistoryForUser(this.props.user_id)}
                                title="Istorija korisnika" 
                                className="btn btn-success btn-link btn-sm" style={{'border': '0'}}>
                            <i className="material-icons">format_list_bulleted</i>
                        </button>
                        <button type="button" rel="tooltip" 
                                onClick={() => this.handleClickDetails(this.props.user_id)}
                                title="Pogledaj korisnika" 
                                className="btn btn-success btn-link btn-sm" style={{'border': '0'}}>
                            <i className="material-icons">remove_red_eye</i>
                        </button>
                        <button type="button" rel="tooltip" 
                                onClick={() => this.handleClickEdit(this.props.user_id)}
                                title="Izmjeni korisnika" 
                                className="btn btn-primary btn-link btn-sm" style={{'border': '0'}}>
                            <i className="material-icons">edit</i>
                        </button>
                        {/*   onClick={() => this.handleClickDelete(this.props.user_id)} */}
                        <button type="button" rel="tooltip" onClick={() => this.props.handleSh(this.props.user_id)}
                                title="Obrisi korisnika" 
                                className="btn btn-danger btn-link btn-sm" style={{'border': '0'}}>
                            <i className="material-icons">close</i>
                        </button>
                    </td>
                </tr>
        );
    }
}

export default withRouter(User)



