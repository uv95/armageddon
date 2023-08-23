import { IAsteroid } from "@/utils/api";
import { Dispatch } from "react";

export interface IState {
    orderedAsteroids: IAsteroid[]
}

export enum Actions {
    ADD_TO_CART = 'ADD_TO_CART',
    REMOVE_FROM_CART = 'REMOVE_FROM_CART',
}

export interface IActions {
    type: Actions,
    payload: IAsteroid
}

export interface IOrderedAsteroidsContext {
    state: IState;
    dispatch: Dispatch<IActions>;
}