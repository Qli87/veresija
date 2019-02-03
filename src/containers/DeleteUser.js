import { connect } from 'react-redux';
import UserList from '../components/UserList'
import { deleteUser } from '../actions'

const mapStateToProps = state => ({
        user: state.userReducer.users
})

const mapDispatchToProps = dispatch => ({
        deleteUser: (id) => dispatch(deleteUser(id))
})

const DeleteUser = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserList)


export default DeleteUser;