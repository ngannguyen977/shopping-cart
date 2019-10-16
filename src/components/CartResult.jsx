import React from 'react';

class CartResult extends React.Component{
  render(){
    var { cart } = this.props;
    console.log("cart result", cart)
    return (
      <div className="table-responsive">
          <table className="table product-table">
              <tbody>
                  <tr>
                      <td colSpan="3"></td>
                      <td>
                          <h4>
                              <strong>Tổng Tiền</strong>
                          </h4>
                      </td>
                      <td>
                          <h4>
                              <strong>{this.showTotalResult(cart)}$</strong>
                          </h4>
                      </td>
                      <td colSpan="3">
                          <button type="button" className="btn btn-primary waves-effect waves-light">Complete purchase
                              <i className="fa fa-angle-right right"></i>
                          </button>
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>
    );
  } 
  showTotalResult = (cart) =>{
    var total = 0;
    if(cart.length>0){
        for(var i=0; i<cart.length; i++){
            total += cart[i].product.price * cart[i].quantity;
        }
    }
    return total;
  }
}

export default CartResult;