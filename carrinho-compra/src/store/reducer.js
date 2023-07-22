import * as types from "./types"

export function reducer(state, action) {
    switch (action.type) {
        case types.fetchCartType:
            return {
                ...state,
                type: action.type,
                cart: action.payload
            }
        case types.fetchProductsType:
            return {
                ...state,
                type: action.type,
                products: action.payload
            }
        case types.fetchSubTotal:
            return {
                ...state,
                type: action.type,
                subtotal: action.payload
            }
        case types.saveProductInCartType:
            return {
                ...state,
                type: action.type,
                cart: action.payload
            }
        case types.deleteProductFromCartType:
            return {
                ...state,
                type: action.type,
                cart: action.payload
            }

        default:
            return {
                ...state,
                type: action.type
            }
    }
}