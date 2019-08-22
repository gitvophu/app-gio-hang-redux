import * as actionTypes from './actionTypes';

export const addToCart = (product)=>{
    return {
        type:actionTypes.ADD_TO_CART,
        product:product
    }
}

export const addProduct = (product_id) =>{
    return {
        type:actionTypes.ADD_PRODUCT,
        product_id:product_id
    }
}

export const subProduct = (product_id) =>{
    return {
        type:actionTypes.SUB_PRODUCT,
        product_id:product_id
    }
}
export const removeProduct = (product_id) =>{
    return {
        type:actionTypes.REMOVE_ITEM,
        product_id:product_id
    }
}
export const setMessage = (msg) =>{
    return {
        type:actionTypes.SET_MESSAGE,
        msg:msg
    }
}

export const purchase = () =>{
    return {
        type:actionTypes.PURCHASE
    }
}

