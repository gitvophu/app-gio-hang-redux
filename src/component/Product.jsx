import React from 'react';
import * as message from './../data/message';
import {connect} from 'react-redux';
import * as actions from './../data/actions';
class Product extends React.Component{
    
    addToCart = (e)=>{
        e.preventDefault();
        
        this.props.addToCart(this.props.product);
        this.props.setMessage(message.THEM_GIO_HANG_THANH_CONG)
    }
    render(){
            // console.log(this.props);
        return(
            <div className="col-lg-4 col-md-6 mb-r">
            <div className="card text-center card-cascade narrower">
                <div className="view overlay hm-white-slight z-depth-1">
                    <img src={this.props.product.image} className="img-fluid" alt="" />
                    <a href="/#">
                        <div className="mask waves-light waves-effect waves-light"></div>
                    </a>
                </div>
                <div className="card-body">
                    <h4 className="card-title">
                        <strong>
                            <a href="/#">{this.props.product.name}</a>
                        </strong>
                    </h4>
                    <ul className="rating">
                        <li>
                            <i className="fa fa-star"></i>
                        </li>
                        <li>
                            <i className="fa fa-star"></i>
                        </li>
                        <li>
                            <i className="fa fa-star"></i>
                        </li>
                        <li>
                            <i className="fa fa-star"></i>
                        </li>
                        <li>
                            <i className="fa fa-star"></i>
                        </li>
                    </ul>
                    <p className="card-text">
                        Sản phẩm do apply sản xuất
                    </p>
                    <div className="card-footer">
                        <span className="left">{this.props.product.price}$</span>
                        <span className="right">
                            <a href="/" className="btn-floating blue-gradient" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add to Cart">
                                <i className="fa fa-shopping-cart" onClick={(e)=>{this.addToCart(e)}}></i>
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
const mapDispatchToProps = (dispatch,props)=>{

    return {
        addToCart:(product)=>{ 
            dispatch(actions.addToCart(product))
        },
        setMessage:(msg)=>{
            dispatch(actions.setMessage(msg));
        }
    }
}
export default connect(null,mapDispatchToProps)(Product);