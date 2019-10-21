import React from 'react';

class Cart extends React.Component{
  render(){
    var {children} = this.props;
    console.log("children", children)
    //phía dưới sẽ đổ ra
    return (
      <section className="section">
      <div className="table-responsive">
          <table className="table product-table">
              <thead>
                  <tr>
                      <th></th>
                      <th>Sản Phẩm</th>
                      <th>Giá</th>
                      <th>Số Lượng</th>
                      <th>Tổng Cộng</th>
                      <th></th>
                  </tr>
              </thead>
              <tbody>
                {/* cartContainer chuyền vào */}
                {children}
              </tbody>
          </table>
      </div>
  </section>
    );
  } 
}

export default Cart;