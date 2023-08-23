'use client'
import React, { createContext, FC, PropsWithChildren, useContext, useMemo, useReducer } from 'react';
import orderedAsteroidsReducer from './OrderedAsteroidsReducer';
import { IOrderedAsteroidsContext } from './types';

const initialState ={
    orderedAsteroids: []
}

export const OrderedAsteroidsContext = createContext<IOrderedAsteroidsContext>({
    state: initialState,
    dispatch: () => null,
});

export const OrderedAsteroidsProvider:FC<PropsWithChildren> = ({ children }) => {
    const [state, dispatch] = useReducer(orderedAsteroidsReducer, initialState);
  
    const values = useMemo(
        () => ({
            state, dispatch,
        }),
        [state]
    )

    return (
        <OrderedAsteroidsContext.Provider value={values}>
            {children}
        </OrderedAsteroidsContext.Provider>
    );
};

export const useOrderedAsteroidsContext = () => useContext(OrderedAsteroidsContext)