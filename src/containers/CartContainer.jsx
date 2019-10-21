import React from 'react';
import {connect} from 'react-redux';
import propTypes from 'prop-types';
import * as Message from './../contants/Messages';
import Cart from './../components/Cart';
import CartItem from './../components/CartItem';
import CartResult from './../components/CartResult';
import {actDeleteProductInCart, actChangeMessage, actUpdateProductQuantity} from './../actions/index'

 // nhiệm vụ của container là lên store lấy dl về và chuyền cho product component
class CartContainer extends React.Component{
  render(){
    // lấy props về để chuyền cho Cart component
    var {cart} = this.props;
    //bắt đầu hiển thị ds sp đã mua
    return (
        <Cart>
          {this.showCartItem(cart)}
          {/* vào cart component nhận lại chirldern */}
          {this.showTotalAmount(cart)}
        </Cart>
    );
  } 
  showCartItem = (cart) =>{
    var {onDeleteProductInCart, onChangeMessage, onUpdateProductQuantity} = this.props;
    var result =<tr>
      <td>{ Message.MSG_CART_EMPTY}</td>
    </tr>
    if(cart.length > 0){
      //cart này lấy trên store xuống( chỗ mapStateToProps)
      result = cart.map((item,index) =>{
        return (
          // tại cartItem sẽ nhận lại props là item, index để hiển thị
          <CartItem 
            key ={index}
            item ={item}
            index = {index}
            onDeleteProductInCart = {onDeleteProductInCart}
            onChangeMessage ={onChangeMessage}
            onUpdateProductQuantity ={onUpdateProductQuantity}

            //tại cartItem component nhận lại
          />
        )
      })
    }
    return result;
  }
  showTotalAmount = (cart) =>{
	var result = null;
	if(cart.length>0){
		result = <CartResult cart = {cart}/>
	}
	return result;
  }
}
// products phải có và là mảng
CartContainer.propTypes = {
    cart: propTypes.arrayOf(propTypes.shape({
      propduct: propTypes.shape({
        id: propTypes.number.isRequired ,
        name: propTypes.string.isRequired,
        image: propTypes.string.isRequired,
        des: propTypes.string.isRequired,
        price: propTypes.number.isRequired,
        rating: propTypes.number.isRequired
    }).isRequired,
    quantity: propTypes.number.isRequired
  })).isRequired
}
const mapStateToProps = state =>{
  return {
    //map với cart trong reducers/index
    // props cart này có ds các san pham trong gio hang
    cart : state.cart
  }
}
const mapDispatchToProps = (dispatch, props) =>{
  return {
    // chuyền props này vào cartitem
    onDeleteProductInCart : (product) =>{
       dispatch(actDeleteProductInCart(product))
    },
    onChangeMessage : (message) =>{
      dispatch(actChangeMessage(message))
    },
    onUpdateProductQuantity: (product, quantity) =>{
      dispatch(actUpdateProductQuantity(product, quantity))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
