import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Modal from '../components/Modal'
import { deleteUser } from '../actions'

const mapStateToProps = state => 
    ({modal: state.modalReducer.modal})

const mapDispatchToProps = dispatch => ({
    deleteUser: (id) => dispatch(deleteUser(id))
})

const ModalContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Modal)

export default ModalContainer