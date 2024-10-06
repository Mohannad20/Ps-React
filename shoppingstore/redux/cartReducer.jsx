import { ADD_TO_CART, DECREMENT_QUANTITY, INCREMENT_QUANTITY, REMOVE_FROM_CART, } from "./actions";

const initialState = {
    cart : []
}

export const cartReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TO_CART:
            const product=state.cart.find(p=>p.id===action.payload.id);
            if(product){
            return {...state,cart:state.cart.map((p)=>p.id===action.payload.id?{...p,quantity:p.quantity+1}:p)};
            }else{
            return {...state,cart:[...state.cart,{...action.payload,quantity:1}]};
            }

        case REMOVE_FROM_CART:
        return {...state,cart:state.cart.filter((p)=>p.id!==action.payload)};
        case  INCREMENT_QUANTITY:
        return {...state,cart:state.cart.map((p)=>p.id===action.payload?{...p,quantity:p.quantity+1}:p)};
        case DECREMENT_QUANTITY:
        return {...state,cart:state.cart.map((p)=>p.id===action.payload?{...p,quantity:p.quantity-1}:p).filter(p=>p.quantity>0)};
        default:
        return state;
     }
}