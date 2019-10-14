import React from 'react';

class ProductItem extends React.Component{
  render(){
      // tạo ra biến và lay props ra va hien thi
      var {product} = this.props;
    return (
        <div className="col-lg-4 col-md-6 mb-r">
        <div className="card text-center card-cascade narrower">
            <div className="view overlay hm-white-slight z-depth-1">
                <img src={product.image}
                    className="img-fluid" alt={product.name} />
                <a>
                    <div className="mask waves-light waves-effect waves-light"></div>
                </a>
            </div>
            <div className="card-body">
                <h4 className="card-title">
                    <strong>
                        <a>{product.name}</a>
                    </strong>
                </h4>
                <ul className="rating">
                    <li>{this.showRating(product.rating)}</li>
                </ul>
                <p className="card-text">
                    {product.des}
                </p>
                <div className="card-footer">
                    <span className="left">{product.price}</span>
                    <span className="right">
                        <a className="btn-floating blue-gradient" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add to Cart">
                            <i className="fa fa-shopping-cart"></i>
                        </a>
                    </span>
                </div>
            </div>
        </div>
    </div>
    );
  } 
  showRating = (rating) =>{
    var result = [];
    for(var i = 1; i<= rating; i++){
        result.push(<i key ={i} className="fa fa-start"></i>);
    }
    for(var j = 1; j <= (5-rating); j++){
        result.push(<i key ={i+j} className="fa fa-start-o"></i>);
    }
    return result;
  }

}

export default ProductItem;