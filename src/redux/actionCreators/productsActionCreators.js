import {SET_PRODUCTS,SET_PRODUCTS_LOADING,RESET_PRODUCTS_LOADING}  from '../actionTypes'

export const setProducts = (payload)=>({type: SET_PRODUCTS, payload})
export const setProductsLoading = ()=>({type: SET_PRODUCTS_LOADING})
export const resetProductsLoading= ()=>({type: RESET_PRODUCTS_LOADING})