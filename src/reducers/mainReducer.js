const initialState = {
    loading: false,
    translations: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case "GET_TRANSLATIONS" :
            return {
                ...state,
                loading:true,
                translations: []
            }   
        case "GET_TRANSLATIONS_SUCCESS":
            return {
                ...state,
                loading: false,
                translations: action.payload
            }
        case "GET_TRANSLATIONS_ERROR":
            return {
                ...state,
                loading: false,
                translations: []
            }
        default:
            return state
    }
}