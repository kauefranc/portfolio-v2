import Head from 'next/head'
import styles from './home.module.scss'
import { FaAngleDown } from 'react-icons/fa'

export default function Home() {
  return (
    <>
      <Head>
          <title>Home | ig.news</title>
      </Head>

      <section className={styles.contentContainer}>
          <div className={styles.hero}>
              <span>🤙 Olá,</span>
              <h1>Bem-vindo ao meu <span>Portfólio.</span></h1>
              <p>
                Descubra um pouco sobre mim e <br />
                sobre meu <span>mundo.</span>
              </p>
          </div>
          <div className={styles.imgWrapper}>
              <img src="/images/eusp.png" alt=""/>
          </div>
      </section>

    </>


  )
}
