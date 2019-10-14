import * as types from './../constant/ActionTypes';

export const actAddToCart = (product, quantity) =>{
    return {
        type: types.ADD_TO_CART,
        //tra ve product và quatity
        product,
        quantity
    }
}
