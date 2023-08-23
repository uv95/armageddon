import { IApproach } from '@/utils/asteroidType';
import style from './Approach.module.css';
    
interface ApproachProps {
    approach: IApproach
}
    
export const Approach = ({ approach}: ApproachProps) => {
    return (
        <div className={style.approach}>
            <p>{approach.fullDate}</p>
            <p>{approach.velocity.toLocaleString('ru-RU')} км/ч</p>
            <p>{approach.distance.toLocaleString('ru-RU')} км</p>
            <p>{approach.orbitingBody}</p>
        </div>
    );
};