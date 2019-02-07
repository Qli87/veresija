import React from 'react'
import { withRouter } from 'react-router-dom'

class DashboardAccount extends React.Component {
    constructor(props){
        super(props);
        this.handleClickAccountID = this.handleClickAccountID.bind(this);
        this.handleClickUser = this.handleClickUser.bind(this);
    }

    handleClickAccountID(account_id) {
        let path = '/accountEdit/'+account_id;
        this.props.history.push(path)
    }

    handleClickUser(user_id){
        let path = "/userHistory/"+user_id;
        this.props.history.push(path);
    }
    render() {
        return(
            <tr>
                <td onClick={() => this.handleClickAccountID(this.props.id)}>{this.props.id}</td>
                <td onClick={() => this.handleClickUser(this.props.user_id)}>{this.props.name}</td>
                <td>{this.props.totalDebit}</td>
                <td>{this.props.monthlyDebit}</td>
            </tr>
        )
    }
}

export default withRouter(DashboardAccount)
