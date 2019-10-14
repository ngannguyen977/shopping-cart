import React from 'react';

class Products extends React.Component{
  render(){
    return (
        <div className="container">
            <section className="section">
                <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
                <div className="row">
                  {/* productsContainer đã có rồi -> lấy dang children */}
                   {this.props.children}
                </div>
            </section>
           
           
        </div>
    );
  } 
 
}

export default Products;
