

import carts from './../data/carts';
import * as actionTypes from './../data/actionTypes';
const initialState = carts;
 
 const cartReducer = (state = initialState, action) => {
     if(action.type === actionTypes.ADD_TO_CART){
        
        var product = action.product;
        var flag = 0;
        for(let k in state){
            if(product['id'] === state[k]['product_id']){
                state[k]['soluong']+=1;
                flag = 1;
                break;
            }
        }
        if(flag===0){
            state.push({
                'product_id':product['id'],
                'soluong':1
            })
        }
         return [...state];
     
    }
    if(action.type === actionTypes.ADD_PRODUCT){
        console.log('add');
    
        let product_id = action.product_id;
        for(let k in state){
            if(product_id === state[k]['product_id']){
                state[k]['soluong']+=1;
                break;
            }
        }
        return [...state];
    }
    if(action.type === actionTypes.SUB_PRODUCT){
        let product_id = action.product_id;
        let flag = 0;
        for(var k in state){
            if(state[k]['soluong'] >1){
                if(product_id === state[k]['product_id']){
                    state[k]['soluong']-=1;
                    flag = 1;
                    break;
                }
            
            }
        }
        if(flag === 0){
            state = state.filter((element, index)=>{
                return element['product_id'] !== product_id;
            });
            
        }
        return [...state];
    }
    if(action.type === actionTypes.REMOVE_ITEM){
        var product_id = action.product_id;
        state = state.filter((element, index)=>{
            return element['product_id'] !== product_id;
        });
            
        return [...state];
    }
    if(action.type === actionTypes.PURCHASE){
        
        state = [];
        return [...state];
    }
    return [...state];
 }

 export default cartReducer;