'use client'
import { DistanceUnit, IAsteroid } from '@/utils/asteroidType';
import { modifyWord } from '@/utils/numbersDeclension';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import arrow from '../../assets/arrow.png';
import asteroidImage from '../../assets/asteroid 2@3x.png';
import { OrderButton } from '../OrderButton/OrderButton';
import style from './AsteroidCard.module.css';

interface AsteroidCardProps {
    asteroid: IAsteroid,
    distanceUnit: DistanceUnit,
    isOrdered?: boolean,
    setIntersecting?: Dispatch<SetStateAction<boolean>>,
    isIntersectionPoint?: boolean
}
    
export const AsteroidCard = ({ asteroid, distanceUnit, isOrdered, setIntersecting, isIntersectionPoint}: AsteroidCardProps) => {
    const router = useRouter()
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIntersecting && setIntersecting(entry.isIntersecting)
        );
        if (ref.current && isIntersectionPoint) {
            observer.observe(ref.current);
        }

        return () => {
            observer.disconnect();
        };
    })

    return (
        <div data-testid='asteroid' ref={isIntersectionPoint ? ref : null} >
            <div className={style.main} onClick={() => router.push(`/${asteroid.id}`)}>
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
            </div>
            <div className={style.bottom}>
                {!isOrdered && <OrderButton asteroid={asteroid}/>}
                {asteroid.isDangerous && <p className={style.isDangerous}>⚠️ Опасен</p>}
            </div>
        </div>
    );
};