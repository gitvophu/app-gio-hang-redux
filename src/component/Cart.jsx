import React from 'react';
import CartItem from './CartItem';
import propducts from './../data/products';

import {connect} from 'react-redux';
class Cart extends React.Component{
    

    render(){
        var items = [];
        
        var carts = this.props.carts;
        var total_price = 0;
        for(var k in carts){
            for(var i=0;i<propducts.length;i++){
                if(propducts[i]['id'] === carts[k]['product_id']){
                    total_price += propducts[i]['price']*carts[k]['soluong'];
                    var carts_item = {
                        id:propducts[i]['id'],
                        price:propducts[i]['price'],
                        name:propducts[i]['name'],
                        soluong:carts[k]['soluong'],
                        image:propducts[i]['image'],
                    }
                    items.push(<CartItem  key={propducts[i]['id']} carts_item={carts_item} subProduct={this.subProduct} addProduct={this.addProduct} removeProduct={this.removeProduct} />)
                }
            }
        }
        return (
            <section className="section">
                <div className="table-responsive">
                    <table className="table product-table">
                        <thead>
                            <tr>
                                <th>Hình ảnh</th>
                                <th>Sản Phẩm</th>
                                <th>Giá</th>
                                <th>Số Lượng</th>
                                <th>Tổng Cộng</th>
                                <th>Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items}
                            <tr>
                                <td colSpan="3"></td>
                                <td>
                                    <h4>
                                        <strong>Tổng Tiền</strong>
                                    </h4>
                                </td>
                                <td>
                                    <h4>
                                        <strong>{total_price}$</strong>
                                    </h4>
                                </td>
                                <td colSpan="3">
                                    <button type="button" className="btn btn-primary waves-effect waves-light">Thanh toán
                                        <i className="fa fa-angle-right right"></i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
        carts:state.cartReducer
    }
}
export default connect(mapStateToProps,null)(Cart);