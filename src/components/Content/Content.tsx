'use client'

import { DistanceUnit, getAsteroids, IAsteroid } from '@/utils/api';
import { useEffect, useState } from 'react';
import { AsteroidCard } from '../AsteroidCard/AsteroidCard';
import style from './Content.module.css';
    
interface ContentProps {
    asteroids?: IAsteroid[]
}
    
export const Content = ({asteroids }: ContentProps) => {
    const [distanceUnit, setDistanceUnit] = useState<DistanceUnit>(DistanceUnit.KM);
    getAsteroids()
    return (
        <div className={style.content}>
            <div className={style.header}>
                <h2>Ближайшие подлёты астероидов</h2>
                <p className={style.distanceUnits}>
                    <span className={`${style.distanceUnit} ${distanceUnit===DistanceUnit.KM && style.distanceUnitActive || ''}`} onClick={() => setDistanceUnit(DistanceUnit.KM)}>в километрах</span> | <span className={`${style.distanceUnit} ${distanceUnit===DistanceUnit.LUNAR && style.distanceUnitActive || ''}`} onClick={() => setDistanceUnit(DistanceUnit.LUNAR)}>в лунных орбитах</span>
                </p>
            </div>
            {
                asteroids && asteroids.map(asteroid => (
                    <AsteroidCard key={asteroid.id} asteroid={asteroid} distanceUnit = {distanceUnit}/>
                ))
            }
        </div>
    );
};