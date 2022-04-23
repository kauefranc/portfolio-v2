import styles from './projetos.module.scss'
import { FaLaravel, FaVuejs } from 'react-icons/fa'
import { SiFlutter } from 'react-icons/si'
import { IoPieChartSharp } from 'react-icons/io5'


export function Projetos (){
    return(
        <>  
            <h1 className={styles.cab}>Projetos</h1>
            <p className={styles.p}>
                Projetos que fiz como desenvolvedor.
            </p>
            <section className={styles.projetos}>

                <div className={styles.container}>

                    <div className={styles.card}>
                        <div className={styles.face1}>
                            <div className={styles.content}>
                            <span className={styles.stars}></span>
                            <h2 className={styles.amarelo}>Agendamento de Ambulatório</h2><br />
                            <p className={styles.amarelo}>Sistema web que automatiza consultas de pacientes do projeto de saúde "Pé Diabético". </p>
                            <a target="_blank" href="https://laravel.com"><FaLaravel className={styles.icons}/></a>
                            </div>
                        </div>
                        <div className={styles.face2}>
                            <h2>01</h2>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.face1}>
                            <div className={styles.content}>
                            <span className={styles.stars}></span>
                            <h2 className={styles.azul}>Fugulin</h2><br />
                            <p className={styles.azul}>Sistema web baseado na "Escala de Fugulin". Analisa o estado do paciente e gera um relatório de acordo com as respostas.</p>
                            <a target="_blank" href="https://vuejs.org"><FaVuejs className={styles.icons}/></a>
                            <a target="_blank" href="https://laravel.com"><FaLaravel className={styles.icons}/></a>
                            </div>
                        </div>
                        <div className={styles.face2}>
                            <h2>02</h2>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.face1}>
                            <div className={styles.content}>
                            <span className={styles.stars}></span>
                            <h2 className={styles.amarelo}>Sorriso top</h2><br />
                            <p className={styles.amarelo}>Sistema para investigar a saúde bocal de alunos do ensino médio. Consiste em um aplicativo mobile que guarda as informações e envia a um serviço para ser gerado gráficos.</p>
                            <a target="_blank" href="https://flutter.dev"><SiFlutter className={styles.icons}/></a>
                            <a target="_blank" href="https://laravel.com"><FaLaravel className={styles.icons}/></a>
                            <a target="_blank" href="https://powerbi.microsoft.com/pt-br/"><IoPieChartSharp className={styles.icons}/></a>
                            </div>
                        </div>
                        <div className={styles.face2}>
                            <h2>03</h2>
                        </div>
                    </div>

                    </div>
            </section>
        </>
    );
}