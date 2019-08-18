import React from 'react';
import Product from './Product';
import products from './../data/products';

class ProductList extends React.Component{
  
   
    
    render(){

        var product_list = products.map((element, index)=>{
           return <Product key={element.id} product={element}/>
        });
        
        
        return (

            <section className="section">
                <h1 className="section-heading">Danh Sách Sản Phẩm Bán Chạy</h1>
                
                <div className="row">
                    {product_list}   
                </div>
            </section>
        )
    }
}


export default ProductList;