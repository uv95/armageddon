'use client'
import React, { createContext, FC, PropsWithChildren, useContext, useMemo, useReducer } from 'react';
import orderReducer from './OrderReducer';
import { IOrderContext } from './types';

const initialState ={
    cart: [],
    ordered: []
}

export const OrderContext = createContext<IOrderContext>({
    state: initialState,
    dispatch: () => null,
});

export const OrderProvider:FC<PropsWithChildren> = ({ children }) => {
    const [state, dispatch] = useReducer(orderReducer, initialState);
  
    const values = useMemo(
        () => ({
            state, dispatch,
        }),
        [state]
    )

    return (
        <OrderContext.Provider value={values}>
            {children}
        </OrderContext.Provider>
    );
};

export const useOrderContext = () => useContext(OrderContext)