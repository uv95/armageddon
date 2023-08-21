import style from './Header.module.css';
    
export const Header = () => {
    return (
        <header className={style.header}>
            <h1 className={style.title}>ARMAGEDDON 2023</h1>
            <div>
                <p>ООО “Команда им. Б. Уиллиса”.</p>
                <p>Взрываем астероиды с 1998 года.</p>
            </div>
        </header>
    );
};