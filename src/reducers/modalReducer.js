const initialState = {
    modal: []
}

export default function modalReducer(state = initialState, action) {
    switch(action.type) {
        case 'OPEN_MODAL':
            return {
                ...state,
                modal: state.modal(action.modal.id)
            }
        case 'CLOSE_MODAL':
            return {
                ...state,
                modal: state.modal.filter(item => item.id !== action.modal.id)
            }
        default:
            return state
    }
}