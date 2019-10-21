import * as Types from './../contants/ActionTypes';
import { stringify } from 'querystring';

//đầu tiên lầy dữ liễu trên localstore về
var data = JSON.parse(localStorage.getItem('CART'))
//lấy data nếu có , ko thì rỗng
var initialState = data ? data : [];
// kiểm tra nếu id sản phẩm khi người dùng thêm đã nằm trong giỏ hàng rồi
// => chỉ việc cập nhật lại số lượng - ngược lại thì thêm
const cart = (state = initialState, action) =>{
     //product và quantity này lấy từ trong action
    var { product, quantity } = action;
    var index = -1;
    
    switch(action.type){
        case Types.ADD_TO_CART:
            //state: list sp trong giỏ hàng - product : là product vừa bấm thêm
            index = findProductInCart(state, product);
            //nếu tìm thấy sp thì cộng dồn 
            if(index !== -1){
                state[index].quantity += quantity;
            }else{
                //ngược lại thêm 1 dong 
                //->push vào state 1 object bao gồm product và quantity
                state.push({
                    //product và quantity này lấy từ trong action
                       product,
                       quantity 
                });
            }
           localStorage.setItem('CART',JSON.stringify(state))
            //khi đã lấy được sp user click 
            return [...state]
        case Types.DELETE_PRODUCT_IN_CART:
            index  = findProductInCart(state, product);
            if(index !== -1){
                state.splice(index, 1)
            }
            localStorage.setItem('CART',JSON.stringify(state))
            return [...state]
        case Types.UPDATE_PRODUCT_QUANTITY:
            index = findProductInCart(state, product)
            if(index !== -1){
                // = quantity moi (phải) được chuyền vào từ action
                state[index].quantity =quantity
            }
            localStorage.setItem('CART',JSON.stringify(state))
            return [...state]
        default : return [...state]
    }
}
// truyền vào ds cart và product đang thêm
var findProductInCart =(cart, product) =>{
    
    var index = -1 ;// ko tìm thấy
    // duyệt qua vong lặp
    // lấy từng phần tử trong cart ra, lấy id của nó
    // xem có trùng với id của sản phẩm đang thêm hay ko
    if(cart.length>0){
        for (var i=0; i < cart.length; i++){
            if(cart[i].product.id === product.id){
                index = i;
                break;
            }
        }
    }
    return index;
   
}
export default cart;