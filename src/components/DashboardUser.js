import React from 'react'
import { withRouter } from 'react-router-dom'

class DashboardUser extends React.Component {
    constructor(props){
        super(props);
        this.handleClickUser = this.handleClickUser.bind(this)
    }

    handleClickUser(user_id) {
        let path = '/userEdit/'+user_id;
        this.props.history.push(path)
    }
    render() {
        return(
            <tr onClick={() => this.handleClickUser(this.props.user_id)}>
                <td>{this.props.name}</td>
                <td>{this.props.phone.slice(0,9)}</td>
                <td>{this.props.email}</td>
                <td></td>
            </tr>
        )
    }
}

export default withRouter(DashboardUser)
