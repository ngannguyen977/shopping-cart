import * as types from './../contants/ActionTypes';

export const actAddToCart = (product, quantity) =>{
    return {
        type: types.ADD_TO_CART,
        //tra ve product và quatity
        product,
        quantity
    }
}
