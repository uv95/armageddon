import { Cart } from '@/components/Cart/Cart'
import { Content } from '@/components/Content/Content'
import { Earth } from '@/components/Earth/Earth'
import { getAsteroids } from '@/utils/api'
import { useState } from 'react'
import styles from './page.module.css'

export default async function Home() {
    const data = await getAsteroids();
    return (
        <main className={styles.main}>
            <Earth/>
            <Content asteroids = {data}/>
            <Cart/>
        </main>

    )
}
