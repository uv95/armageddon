'use client'

import { useOrderContext } from '@/context/OrderContext';
import { DistanceUnit, getAsteroids, IAsteroid } from '@/utils/api';
import { useEffect, useState } from 'react';
import { AsteroidCard } from '../AsteroidCard/AsteroidCard';
import { ClosestAsteroids } from '../ClosestAsteroids/ClosestAsteroids';
import { OrderPlaced } from '../OrderPlaced/OrderPlaced';
import style from './Content.module.css';
    
interface ContentProps {
    asteroids?: IAsteroid[]
}
    
export const Content = ({asteroids }: ContentProps) => {
    const [distanceUnit, setDistanceUnit] = useState<DistanceUnit>(DistanceUnit.KM);
    const {state} = useOrderContext();
    const orderedAsteroids = state.ordered;
    const cart = state.cart;

    return (
        <div className={style.content}>
            {
                orderedAsteroids.length ? <OrderPlaced asteroids={orderedAsteroids} distanceUnit={distanceUnit}/> : asteroids &&<ClosestAsteroids asteroids={asteroids} distanceUnit={distanceUnit} setDistanceUnit={setDistanceUnit}/>
            }
        </div>
    );
};