'use client'
import { useOrderedAsteroidsContext } from '@/context/OrderedAsteroidsContext';
import { modifyWord } from '@/utils/numbersDeclension';
import { Button, ButtonSize, ButtonTextColor, ButtonTheme } from '../Button/Button';
import style from './Cart.module.css';
    
export const Cart = () => {
    const {state} = useOrderedAsteroidsContext()
    const orderedAsteroidsNum = state.orderedAsteroids.length

    return (
        <div className={style.cart}>
            <div>
                <strong>Корзина</strong>
                <p>{orderedAsteroidsNum} {modifyWord(orderedAsteroidsNum, ["астероид", "астероида", "астероидов"])}</p>
            </div>
            <Button theme={ButtonTheme.ORANGE} size={ButtonSize.L} textColor={ButtonTextColor.LIGHT}>Отправить</Button>
        </div>
    );
};