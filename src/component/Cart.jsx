import React from 'react';
import CartItem from './CartItem';
import products from './../data/products';
import * as actions from './../data/actions';
import {connect} from 'react-redux';
class Cart extends React.Component{
    
    purchase = ()=>{
        this.props.purchase();
         var carts = this.props.carts;
        var total_price = 0;
     carts.forEach((element,index) => {
            console.log(element);
            for(var k in products)  {
                if(products[k]['id'] === element['product_id']){
                    total_price += products[k]['price']*element['soluong'];
                }
            }  
        });
        this.props.setMessage("Đã thanh toán toàn bộ giỏ hàng: $" + total_price);
    }
    render(){
        var items = [];
        
        var carts = this.props.carts;
        var total_price = 0;
        for(var k in carts){
            for(var i=0;i<products.length;i++){
                if(products[i]['id'] === carts[k]['product_id']){
                    total_price += products[i]['price']*carts[k]['soluong'];
                    var carts_item = {
                        id:products[i]['id'],
                        price:products[i]['price'],
                        name:products[i]['name'],
                        soluong:carts[k]['soluong'],
                        image:products[i]['image'],
                    }
                    items.push(<CartItem  key={products[i]['id']} carts_item={carts_item} subProduct={this.subProduct} addProduct={this.addProduct} removeProduct={this.removeProduct} />)
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
                                    <button onClick={()=>{this.purchase()}} type="button" className="btn btn-primary waves-effect waves-light">Thanh toán
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

const mapDispatchToProps = (dispatch, props)=>{
    return {
        purchase: ()=>{
            dispatch(actions.purchase());
        },
        setMessage:(msg)=>{
            dispatch(actions.setMessage(msg));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart);