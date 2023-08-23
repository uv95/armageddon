import { ButtonHTMLAttributes } from 'react';
import style from './Button.module.css';

export enum ButtonTheme {
    ORANGE = 'orange',
    BROWN = 'brown',
  }

export enum ButtonTextColor {
    ORANGE = 'text_orange',
    LIGHT = 'text_light',
  }
  
export enum ButtonSize {
    M = 'medium',
    L = 'large'
  }
    
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: React.ReactNode,
    size: ButtonSize,
    theme: ButtonTheme,
    textColor: ButtonTextColor
}
    
export const Button = ({ children, size, theme, textColor, ...otherProps}: ButtonProps) => {
    return (
        <button className={`${style.button} ${style[theme]} ${style[size]} ${style[textColor]}`} {...otherProps}>
            {children}
        </button>
    );
};