import * as Types from './../contants/ActionTypes';

export const actAddToCart = (product, quantity) =>{
    return {
        type: Types.ADD_TO_CART,
        //tra ve product và quatity
        product,
        quantity
    }
}
export const actChangeMessage = (message)=>{
    return{
        type: Types.CHANGE_MESSAGE,
        message

    }
}
// khi action chuyền qua se nhận được type và product
export const actDeleteProductInCart = (product) =>{
    return {
        type: Types.DELETE_PRODUCT_IN_CART,
        product
    }
}
export const actUpdateProductQuantity = (product, quantity) =>{
    return{
        type : Types.UPDATE_PRODUCT_QUANTITY,
        product,
        quantity
    }
}