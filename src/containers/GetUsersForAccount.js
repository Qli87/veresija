import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { fetchUsersForAccount } from '../actions';
import { fetchUsers } from '../actions';

import AccoundAdd from '../components/AccountAdd';

const mapStateToProps = state => 
    ({ users: state.userReducer.users });

const mapDispatchToProps = dispatch => bindActionCreators({fetchUsers}, dispatch);

const GetUsersForAccount = connect(
    mapStateToProps,
    mapDispatchToProps
)(AccoundAdd)

export default GetUsersForAccount;
