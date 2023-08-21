import { Cart } from '@/components/Cart/Cart'
import { Content } from '@/components/Content/Content'
import { Earth } from '@/components/Earth/Earth'
import { Header } from '@/components/Header/Header'
import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
    return (
        <>
            <Header/>
            <main className={styles.main}>
                <Earth/>
                <Content/>
                <Cart/>
            </main>
        </>
    )
}
