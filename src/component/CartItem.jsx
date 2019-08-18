import React from 'react';
import {connect} from 'react-redux';
import * as message from './../data/message';
import * as actions from './../data/actions';
class CartItem extends React.Component{

    subProduct(e,product_id){
        this.props.subProduct(product_id);
        e.preventDefault();
        this.props.setMessage(message.GIAM_1_SP);

    }
    addProduct(e,product_id){
        e.preventDefault();
        this.props.addProduct(product_id);
        this.props.setMessage(message.TANG_THEM_1_SP);
    }
    removeProduct(e,product_id){
        e.preventDefault();
        this.props.removeProduct(product_id);
        this.props.setMessage(message.XOA_SP_KHOI_GIO_HANG);
    }
    render(){
        
        var total_price = this.props.carts_item.soluong*this.props.carts_item.price;
        
        return(
            <tr>
                <th scope="row">
                    <img src={this.props.carts_item.image}
                        alt="" className="img-fluid z-depth-0" />
                </th>
                <td>
                    <h5>
                        <strong>{this.props.carts_item.name}</strong>
                    </h5>
                </td>
                <td>{this.props.carts_item.price}$</td>
                <td className="center-on-small-only">
                    <span className="qty">{this.props.carts_item.soluong} </span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label className="btn btn-sm btn-primary
                            btn-rounded waves-effect waves-light"  onClick={(e)=>{this.subProduct(e,this.props.carts_item.id)}}>
                            <a href="/#">—</a>
                        </label>
                        <label className="btn btn-sm btn-primary 
                            btn-rounded waves-effect waves-light" onClick={(e)=>{this.addProduct(e,this.props.carts_item.id)}}>
                            <a href="/" >+</a>
                        </label>
                    </div>
                </td>
                <td>{total_price}$</td>
                <td>
                    <button type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top"
                        title="" data-original-title="Remove item" onClick={(e)=>{this.removeProduct(e,this.props.carts_item.id)}}>
                        X
                    </button>
                </td>
            </tr>
        )
    }
}
const mapDispatchToPros =  (dispatch,props)=>{
    return {
        addProduct: (product_id)=>{
            dispatch(actions.addProduct(product_id));
        },
        subProduct:(product_id)=>{
            dispatch(actions.subProduct(product_id));
        },
        removeProduct:(product_id)=>{
            dispatch(actions.removeProduct(product_id));
        },
        setMessage:(msg)=>{
            dispatch(actions.setMessage(msg));
        }
        
    }
}
export default connect(null,mapDispatchToPros)(CartItem);