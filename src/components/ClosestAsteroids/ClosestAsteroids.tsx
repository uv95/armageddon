import { DistanceUnit, IAsteroid } from '@/utils/asteroidType';
import { SetStateAction } from 'react';
import { AsteroidCard } from '../AsteroidCard/AsteroidCard';
import style from './ClosestAsteroids.module.css';
    
interface ClosestAsteroidsProps {
    distanceUnit: DistanceUnit,
    asteroids: IAsteroid[],
    setDistanceUnit: (value: SetStateAction<DistanceUnit>) => void
}
    
export const ClosestAsteroids = ({distanceUnit, asteroids, setDistanceUnit }: ClosestAsteroidsProps) => {
//
    return (
        <>
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
        </>
    );
};