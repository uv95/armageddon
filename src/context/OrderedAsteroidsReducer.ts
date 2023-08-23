import { Actions, IActions, IState } from "./types";

function orderedAsteroidsReducer(state: IState, action: IActions): IState {
    const { type, payload } = action;
    switch (type) {
    case Actions.ADD_TO_CART:
        return {
            ...state,
            orderedAsteroids: [...state.orderedAsteroids, payload]
        };
    case Actions.REMOVE_FROM_CART:
        return {
            ...state,
            orderedAsteroids: state.orderedAsteroids.filter(item => item.id !== payload.id)
        };
    
    default:
        return state;
    }
}

export default orderedAsteroidsReducer;
