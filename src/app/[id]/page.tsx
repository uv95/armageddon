import { Approach } from '@/components/Approach/Approach';
import { getOneAsteroid } from '@/utils/api'
import style from './page.module.css'

export default async function Asteroid({params}:{params: {id: string}}) {
    const asteroid = await getOneAsteroid(params.id);

    return (
        <main className={style.main}>
            {
                asteroid && 
                <>
                    <h1>Астероид {asteroid.name}</h1>
                    <div className={style.info}>
                        <p>Приблизительный диаметр: {asteroid.size} м</p>
                        {asteroid.isDangerous && <p className={style.isDangerous}>⚠️ Опасен</p>}
                    </div>
                    <div className={style.approachesList}>
                        <h2>Все сближения:</h2>
                        <div className={style.listHeader}>
                            <strong>🕑 Точное время</strong>
                            <strong>⚡︎ Скорость</strong>
                            <strong>🌎 Расстояние до Земли</strong>
                            <strong>💫 Орбита</strong>
                        </div>
                        { 
                            asteroid.allApproaches && asteroid.allApproaches.map(approach => (
                                <Approach key={approach.fullDate} approach={approach}/>
                            ))
                        }
                    </div>
                </>
            }
        </main>
    )
}
