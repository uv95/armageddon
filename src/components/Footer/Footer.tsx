import style from './Footer.module.css';
    
interface FooterProps {
}
    
export const Footer = ({ }: FooterProps) => {
//
    return (
        <footer className={style.footer}>
            <p>© Все права и планета защищены</p>
        </footer>
    );
};