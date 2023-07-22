import * as types from "./types";
import * as cartServices from "../services/cartService";

export const fetchProductsAction = async (dispatch) => {
    const products = await cartServices.getProducts();  
    dispatch({
        type: types.fetchProductsType,
        payload: products
    })
};

export const fetchCartAction = async (dispatch) => {
    const cart = await cartServices.getCart();
    dispatch({
        type: types.fetchCartType,
        payload: cart
    })
}; 

export const fetchSubTotal = async (dispatch) => {
    const subTotal = await cartServices.getSubTotal();
    dispatch({
        type: types.fetchSubTotal,
        payload: subTotal
    })
}; 

export const saveProductInCartAction = async (dispatch, productId, value) => {
    const newProduct = await cartServices.saveProductInCart(productId, value);
    dispatch({
        type: types.saveProductInCartType,
        payload: newProduct
    })
    fetchSubTotal(dispatch);
};


export const deleteProductFromCartType = async (dispatch, productId) => {
    const newProduct = await cartServices.deleteProductFromCartType(productId);
    dispatch({
        type: types.deleteProductFromCartType,
        payload: newProduct
    })
    fetchSubTotal(dispatch);
};