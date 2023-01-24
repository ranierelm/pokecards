import Link from 'next/link'
import Image from 'next/image'

import styles from '@/styles/NavBar.module.css'



export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Link href={"/"}>
                <div className={styles.logo}>
                    <Image
                        src={"/images/pokeball.png"}
                        width="30"
                        height="30"
                        alt="PokeCards"
                    />

                    <h1>PokeCards</h1>
                </div>
            </Link>
            <ul className={styles.link_items}>
                <li>
                    <Link href={"/"}>Home</Link>
                </li>
                <li>
                    <Link href={"/about"}>Sobre</Link>
                </li>
            </ul>
        </nav>
    )
}