import { Actions, IActions, IState } from "./types";

function orderReducer(state: IState, action: IActions): IState {
    const { type, payload } = action;
    switch (type) {
    case Actions.ADD_TO_CART:
        return {
            ...state,
            cart: [...state.cart, payload!]
        };
    case Actions.REMOVE_FROM_CART:
        return {
            ...state,
            cart: state.cart.filter(item => item.id !== payload?.id)
        };
    case Actions.PLACE_ORDER:
        return {
            ...state,
            ordered: state.cart,
            cart: [],
        };
    
    default:
        return state;
    }
}

export default orderReducer;
