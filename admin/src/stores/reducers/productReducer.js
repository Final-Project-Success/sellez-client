let initialState = {
    products: []
}

export default function productReducer(state = initialState, action) {
    switch(action.type) {
        case 'products/fetchAll':
        return  {...state, products: action.payload}
        default:
            return state
    }
}