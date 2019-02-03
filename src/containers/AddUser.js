import { connect } from 'react-redux'
import UserAdd from '../components/UserAdd'
import { addUser } from '../actions' 


const mapStateToProps = state => ({
    users: state.userReducer.users
})

const mapDispatchToProps = dispatch => ({
    addUser: (user) => dispatch(addUser(user))
})

const AddUser = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserAdd)

export default AddUser;