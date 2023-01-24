import Image from "next/image"

import styles from '@/styles/About.module.css'

export default function About() {
    return (
        <div className={styles.about}>
            <h1>Sobre o projeto</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto magni soluta eum cupiditate ipsam officiis nihil ipsa nesciunt autem delectus laudantium libero quia hic, neque, est velit! Perferendis, recusandae! Debitis!</p>
            <Image src="/images/charizard.png" width="300" height="300" alt="Pokemon charizard" />
        </div>
    )
}