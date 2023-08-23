import { DistanceUnit, IAsteroid } from '@/utils/asteroidType';
import { AsteroidCard } from '../AsteroidCard/AsteroidCard';
import style from './OrderPlaced.module.css';
    
interface OrderPlacedProps {
    distanceUnit: DistanceUnit,
    asteroids: IAsteroid[],
}
    
export const OrderPlaced = ({ distanceUnit, asteroids}: OrderPlacedProps) => {
    return (
        <>
            <div className={style.header}>
                <h2>Заказ отправлен!</h2>
            </div>
            {
                asteroids.map((asteroid: IAsteroid) => (
                    <AsteroidCard key={asteroid.id} asteroid={asteroid} distanceUnit = {distanceUnit} isOrdered/>
                ))
            }
        </>
    );
};