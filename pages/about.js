import Image from "next/image"

import styles from '@/styles/About.module.css'

export default function About() {
    return (
        <div className={styles.about}>
            <h1>Sobre o projeto</h1>
            <p>Projeto criado com o intuito de testar o uso do NextJS, aplicando a integração da API pokeapi para as informações sobre os Pokemons e buscando as imagens de "nexus.traction.one".  </p>
            <p>O deploy foi feito no site da Vercel e o código está em "https://github.com/ranierelm/pokecards".</p>
            <p>Levando em consideração a finalidade do projeto, não houve um detalhamento na estilização/responsividade da página, pois não era o foco.</p>
            <Image src="/images/charizard.png" width="300" height="300" alt="Pokemon charizard" />
        </div>
    )
}