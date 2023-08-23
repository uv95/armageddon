import Image from 'next/image';
import style from './Earth.module.css';
import planetLarge from '../../assets/planeta 1@3x.png'
    
export const Earth = () => {
    return (
        <div className={style.earth}>
            <Image height={620} width={undefined} alt='Earth' src={planetLarge} className={style.image}/>
        </div>
    );
};