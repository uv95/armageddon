import { useOrderedAsteroidsContext } from "@/context/OrderedAsteroidsContext";
import { Actions } from "@/context/types";
import { IAsteroid } from "@/utils/api";
import { Button, ButtonSize, ButtonTextColor, ButtonTheme } from "../Button/Button";

interface OrderButtonProps {
    asteroid: IAsteroid,
}
    
export const OrderButton = ({ asteroid}: OrderButtonProps) => {
    const {state, dispatch} = useOrderedAsteroidsContext()
    const isOrdered = (asteroid:IAsteroid) => !!state.orderedAsteroids.find(item => item.id === asteroid.id)
    
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