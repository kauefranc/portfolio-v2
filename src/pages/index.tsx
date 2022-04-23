import Head from 'next/head'
import { Projetos } from '../components/Projetos'
import styles from './home.module.scss'

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
              <img src="/images/eusp.png" alt="Eu"/>
          </div>
      </section>

      <section className={styles.containerSobreMim}>

          <h1>Sobre mim</h1>
        
          <div className={styles.heroSobreMim}>
              <figure className={styles.cardSobreMim}>  
                  <blockquote>
                    Meu nome é Kauê França Cavalcante, nasci em 2001 no Brasil, 
                    mais precisamente em Manaus. Sou cristão, meu passatempo preferido é jogar futebol 
                    e a comida favorita é churrasco com uma coquinha bem gelada.
                    <div className={styles.arrowSobreMim}></div>  
                  </blockquote>  
                  <img src="/images/eupadrao.jpg" alt="Eu" />  
                  <div className={styles.descricaoSobreMim}>  
                    <h5>Eu</h5>  
                  </div>  
              </figure>

              <figure className={styles.cardSobreMim}>  
                  <blockquote>
                    Sou formado (2019) em Técnico em Informática pela <a target="_blank" href="https://www.fundacaomatiasmachline.org.br">FMM</a> onde conheci a programação e fiquei encantado.
                    Cursei Análise e Desenvolvimento de Sistema na <a target="_blank" href='https://www.wyden.com.br/fmf'>Faculdade Martha Falcão</a> e me formei em 2023. Nessa Jornada, me encontrei no Desenvolvimento Frontend.
                    <div className={styles.arrowSobreMim}></div>  
                  </blockquote>  
                  <img src="/images/eumamae.jpg" alt="eu e minha mãe" />  
                  <div className={styles.descricaoSobreMim}>  
                    <h5>Eu & minha mãe</h5>  
                  </div>  
              </figure>  

              <figure className={styles.cardSobreMim}>  
                    <blockquote>
                      Acredito que sou uma pessoa bem carismática, simpática e empática. Não sou extrovertido mas sei o fazer amigos muito 
                      facilmente. Gosto de ser organizado e produtivo. Pra mim, o mais importante sempre são as pessoas ao nosso redor. 
                      <div className={styles.arrowSobreMim}></div>  
                    </blockquote>  
                    <img src="/images/eujeanfernando.jpg" alt="Eu e amigos" />  
                    <div id='oi' className={styles.descricaoSobreMim}>  
                      <h5>eu & Amigos</h5>  
                    </div>  
              </figure>  
          </div>
      </section>

      <Projetos/>

      
    </>


  )
}
