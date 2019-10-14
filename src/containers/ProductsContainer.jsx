import React from 'react';
import {connect} from 'react-redux';
import Products from './../components/Products';
import ProductItem from './../components/ProductItem';
import propTypes from 'prop-types';

 // nhiệm vụ của container là lên store lấy dl về và chuyền cho product component
class ProductsContainer extends React.Component{
  render(){
    // lấy props products này từ ProductsCotainer
    var { products} = this.props;
    return (
        // hiện thị các productItem
        <Products>
            {/* truyen vao dang children để products component lấy */}
            {this.showProducts(products)}
        </Products>
    );
  } 

  showProducts(products){
    var result = null;
    if(products.length > 0){
      result = products.map((product, index)=>{
        //product là 1 cái props để chuyền vào productItem
        return <ProductItem key={index} product = {product}/>
      })
    }
    return result;
  }
}
// products phải có và là mảng
ProductsContainer.propTypes = {
  products: propTypes.arrayOf(
    //trong array phải có object 
    propTypes.shape({
      id: propTypes.number.isRequired ,
      name: propTypes.string.isRequired,
      image: propTypes.string.isRequired,
      des: propTypes.string.isRequired,
      price: propTypes.number.isRequired,
      rating: propTypes.number.isRequired
    })
  ).isRequired
}
const mapStateToProps = state =>{
  return {
    //map từ product trong reducers/index
    // lấy từ store về cái state là ds các product
    products : state.products
  }
}
export default connect(mapStateToProps, null)(ProductsContainer);
