import React from 'react';
import {connect} from 'react-redux';
import Products from './../components/Products';
import ProductItem from './../components/ProductItem';
import propTypes from 'prop-types';
import {onAddToCart, actAddToCart, actChangeMessage} from './../actions/index';

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
    var { onAddToCart, onChangeMessage } = this.props;//this.props.onAddToCart
    var result = null;
    if(products.length > 0){
      result = products.map((product, index)=>{
        //product là 1 cái props để chuyền vào productItem
        return <ProductItem 
          key={index} 
          product = {product}
          // chuyền props onAddToCart (phải) dưới cho productItem 
          //với tên là onAddToCart(trái)luôn
          onAddToCart = {onAddToCart}
          onChangeMessage = {onChangeMessage}
        />
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
  ).isRequired,
  //có thể check function, arry
  onChangeMessage: propTypes.func.isRequired
}
const mapStateToProps = state =>{
  return {
    //map từ product trong reducers/index
    // lấy từ store về cái state là ds các product
    products : state.products
  }
}
//dispatch action thành 1 cái props onAddToCart trái để 
//component su dung hoặc có thể chuyền vào productItem
const mapDispathToProps = (dispatch,props)=>{
  return {
    onAddToCart : ( product) =>{
      //quantity : 1
        dispatch(actAddToCart(product, 1))
    },
    // chuyền props này vào từng productItem 
    //để khi click mua hàng sẽ change message
    onChangeMessage : (message) =>{
        dispatch(actChangeMessage(message));
    }
  }
}
export default connect(mapStateToProps, mapDispathToProps)(ProductsContainer);
