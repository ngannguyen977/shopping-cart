import React from 'react';
import * as Message from './../contants/Messages'

class CartItem extends React.Component{
    constructor(props){
        super(props);
        //
        this.state = {
            quantity: 1
        }
    }
  render(){
    var {item} = this.props;
    var {quantity} = item.quantity > 0 ? item : this.state
    console.log("sô luong", quantity)
    
    return (
      <tr>
        <th scope="row">
            <img src={item.product.image}
                alt="" className="img-fluid z-depth-0" />
        </th>
        <td>
            <h5>
                <strong>{item.product.name}</strong>
            </h5>
        </td>
        <td>{item.product.price}</td>
        <td className="center-on-small-only">
            <span className="qty">{quantity}</span>
            <div className="btn-group radio-group" data-toggle="buttons">
                <label className="btn btn-sm btn-primary
                    btn-rounded waves-effect waves-light"
                    onClick = {()=>this.onUpdateQuantity(item.product, item.quantity -1)}
                    >
                    <a>—</a>
                </label>
                <label className="btn btn-sm btn-primary
                    btn-rounded waves-effect waves-light"
                    onClick = {()=>this.onUpdateQuantity(item.product, item.quantity +1)}
                    >
                    <a>+</a>
                </label>
            </div>
        </td>
        <td>{this.showTotal(item.product.price, item.quantity)}$</td>
        <td>
            <button type="button" 
                className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top"
                title="" 
                onClick = {()=>{this.onDelete(item.product)}}
                data-original-title="Remove item">
                X
            </button>
        </td>
    </tr>
    );
  } 
  // tham số là product và quantity đã giảm hoặc đã tăng
  onUpdateQuantity = (product, quantity) =>{
    if(quantity>0){
        this.setState({
            // set lại quantity mới rồi render lại giao diện
            quantity: quantity
        })
        this.props.onUpdateProductQuantity(product, quantity);
    }
  }
  onDelete = (product)=>{
      var {onDeleteProductInCart, onChangeMessage} = this.props;
      onDeleteProductInCart(product);
      onChangeMessage(Message.MSG_DELETE_PRODUCT_SUCCESS)
  }
  showTotal = (price, quantity) =>{
    return price * quantity;
  }
}

export default CartItem;