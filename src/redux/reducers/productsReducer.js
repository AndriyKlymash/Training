import {RESET_PRODUCTS_LOADING, SET_PRODUCTS, SET_PRODUCTS_LOADING} from "../actionTypes";


const initialState = {
    products: [],
    isProductsLoading: false
}

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS : {
            return {
                ...state,
                products: action.payload
            }
        }

        case SET_PRODUCTS_LOADING :{
            return {
                ...state,
                isProductsLoading: true
            }
        }

        case RESET_PRODUCTS_LOADING :{
            return {
                ...state,
                isProductsLoading: false
            }
        }


        default:
            return state
    }
}
