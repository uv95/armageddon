import { DistanceUnit, IAsteroid } from '@/utils/api';
import { modifyWord } from '@/utils/numbersDeclension';
import Image from 'next/image';
import arrow from '../../assets/arrow.png';
import asteroidImage from '../../assets/asteroid 2@3x.png';
import { OrderButton } from '../OrderButton/OrderButton';
import style from './AsteroidCard.module.css';

interface AsteroidCardProps {
    asteroid: IAsteroid,
    distanceUnit: DistanceUnit,
    isOrdered?: boolean
}
    
export const AsteroidCard = ({ asteroid, distanceUnit, isOrdered}: AsteroidCardProps) => {

    return (
        <div className={style.asteroidCard}>
            <div className={style.date}>{asteroid.approachDate}</div>
            <div className={style.info}>
                <div className={style.distance}>
                    <p>{asteroid.distance[distanceUnit].toLocaleString('ru-RU')} {distanceUnit===DistanceUnit.KM ? 'км' : modifyWord(asteroid.distance[distanceUnit], ['лунная орбита', 'лунные орбиты', 'лунных орбит'])}</p>
                    <div className={style.arrow}>
                        <Image src={arrow} alt='arrow' fill/>
                    </div>
                </div>
                <Image src={asteroidImage} alt='asteroid' width={asteroid.size < 100 ? 22 : 36} height={asteroid.size < 100 ? 24 : 40}/>
                <div>
                    <p className={style.name}>{asteroid.name}</p>
                    <p>Ø {asteroid.size} м</p>
                </div>
            </div>
            <div className={style.order}>
                {!isOrdered && <OrderButton asteroid={asteroid}/>}
                {asteroid.isDangerous && <p>⚠️ Опасен</p>}
            </div>
        </div>
    );
};