'use client'
import { useOrderContext } from '@/context/OrderContext';
import { Actions } from '@/context/types';
import { modifyWord } from '@/utils/numbersDeclension';
import { Button, ButtonSize, ButtonTextColor, ButtonTheme } from '../Button/Button';
import style from './Cart.module.css';
    
export const Cart = () => {
    const {state, dispatch} = useOrderContext()
    const orderedAsteroidsNum = state.cart.length
    const isOrderPlaced = state.ordered.length > 0;

    if(isOrderPlaced) return null;

    return (
        <div className={style.cart}>
            <div>
                <strong>Корзина</strong>
                <p>{orderedAsteroidsNum} {modifyWord(orderedAsteroidsNum, ["астероид", "астероида", "астероидов"])}</p>
            </div>
            <Button theme={ButtonTheme.ORANGE} size={ButtonSize.L} textColor={ButtonTextColor.LIGHT}
                onClick={() => dispatch({type: Actions.PLACE_ORDER})}
            >Отправить</Button>
        </div>
    );
};