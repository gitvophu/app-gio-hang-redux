import React from 'react';
import ProductList from './ProductList' ;
import Cart from './Cart' ;
import Message from './Message' ;



class MainContainer extends React.Component{
  
    
    setRemoveItemMessage = (msg)=>{
        this.messageRef.current.setMessage(msg);
    }
    render(){
        
        return(
            <main id="mainContainer">
            
            <div className="container">
                
                <ProductList />
                <Message />
                <Cart   setRemoveItemMessage={this.setRemoveItemMessage}/>
            </div>
        </main>
        )
    }
}

export default MainContainer;