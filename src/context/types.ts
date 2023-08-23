import { IAsteroid } from "@/utils/api";
import { Dispatch } from "react";

export interface IState {
    cart: IAsteroid[],
    ordered: IAsteroid[]
}

export enum Actions {
    ADD_TO_CART = 'ADD_TO_CART',
    REMOVE_FROM_CART = 'REMOVE_FROM_CART',
    PLACE_ORDER = 'PLACE_ORDER',
}

export interface IActions {
    type: Actions,
    payload?: IAsteroid
}

export interface IOrderContext {
    state: IState;
    dispatch: Dispatch<IActions>;
}