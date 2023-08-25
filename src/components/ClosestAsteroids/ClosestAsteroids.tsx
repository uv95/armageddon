'use client'
import { getAsteroids } from '@/utils/api';
import { DistanceUnit, IAsteroid } from '@/utils/asteroidType';
import { getDate } from '@/utils/getDate/getDate';
import { SetStateAction, useEffect, useState } from 'react';
import { AsteroidCard } from '../AsteroidCard/AsteroidCard';
import style from './ClosestAsteroids.module.css';
    
interface ClosestAsteroidsProps {
    distanceUnit: DistanceUnit,
    asteroids: IAsteroid[],
    setDistanceUnit?: (value: SetStateAction<DistanceUnit>) => void
}
    
export const ClosestAsteroids = ({distanceUnit, asteroids, setDistanceUnit }: ClosestAsteroidsProps) => {
    const [moreAsteroidsData, setMoreAsteroidsData] = useState<IAsteroid[]>([])
    const [isIntersecting, setIntersecting] = useState(false);
    const [allAsteroids, setAllAsteroids] = useState(asteroids)
    const [startDate, setStartDate] = useState(1);
    const [endDate, setEndDate] = useState(1);
    const [intersectedCardIndex, setIntersectedCardIndex] = useState(Math.floor(asteroids.length / 2));

    useEffect(() => {
        if(isIntersecting) 
            getAsteroids(getDate(startDate), getDate(endDate)).then(data => data && setMoreAsteroidsData(data))
    }, [isIntersecting])

    useEffect(() => {
        if(moreAsteroidsData.length) {
            setAllAsteroids(prev => [...prev, ...moreAsteroidsData])
            setIntersectedCardIndex(prev => prev + Math.floor(moreAsteroidsData.length))
            setStartDate(prev => prev+1);
            setEndDate(prev => prev+1);
        }
    }, [moreAsteroidsData])
    
    return (
        <>
            <div className={style.header}>
                <h2>Ближайшие подлёты астероидов</h2>
                <p className={style.distanceUnits}>
                    <span className={`${style.distanceUnit} ${distanceUnit===DistanceUnit.KM && style.distanceUnitActive || ''}`} onClick={() => setDistanceUnit && setDistanceUnit(DistanceUnit.KM)}>в километрах</span> | <span className={`${style.distanceUnit} ${distanceUnit===DistanceUnit.LUNAR && style.distanceUnitActive || ''}`} onClick={() => setDistanceUnit && setDistanceUnit(DistanceUnit.LUNAR)}>в лунных орбитах</span>
                </p>
            </div>
            {
                allAsteroids && allAsteroids.map((asteroid, index) => (
                    <AsteroidCard key={asteroid.id} asteroid={asteroid} distanceUnit = {distanceUnit} setIntersecting={setIntersecting} isIntersectionPoint = {index===intersectedCardIndex}/>
                ))
            }
        </>
    );
};