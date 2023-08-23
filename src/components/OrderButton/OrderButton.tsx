import { useOrderContext } from "@/context/OrderContext";
import { Actions } from "@/context/types";
import { IAsteroid } from "@/utils/asteroidType";
import { Button, ButtonSize, ButtonTextColor, ButtonTheme } from "../Button/Button";

interface OrderButtonProps {
    asteroid: IAsteroid,
}
    
export const OrderButton = ({ asteroid}: OrderButtonProps) => {
    const {state, dispatch} = useOrderContext()
    const isOrdered = (asteroid:IAsteroid) => !!state.cart.find(item => item.id === asteroid.id)

    return (
        <Button 
            size={ButtonSize.M} 
            theme={ButtonTheme.BROWN} 
            textColor={isOrdered(asteroid) ? ButtonTextColor.LIGHT : ButtonTextColor.ORANGE}
            onClick = {() => isOrdered(asteroid) ? dispatch({type: Actions.REMOVE_FROM_CART, payload: asteroid}) : dispatch({type: Actions.ADD_TO_CART, payload: asteroid})}>
            {isOrdered(asteroid) ? 'В КОРЗИНЕ' : "ЗАКАЗАТЬ"}
        </Button>
    );
};