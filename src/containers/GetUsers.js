import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { fetchUsers } from '../actions';
import UserList from '../components/UserList';
import { deleteUser } from '../actions';
import { editUser } from '../actions'


const mapStateToProps = state => 
    (
    { users: state.userReducer.users});

// const mapDispatchToProps = dispatch => bindActionCreators({fetchUsers}, dispatch);
const mapDispatchToProps = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers()),
    deleteUser: (id) => dispatch(deleteUser(id))
})

const GetUsers = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserList)

export default GetUsers;
