import { SignInButton } from '../SignInButton';
import styles from './styles.module.scss'

export function Header(){
    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                 <h1>KF .</h1>
                 <nav>
                     <a href="#home">Home</a>
                     <a href="#sobremim">Sobre Mim</a>
                     <a href="#projetos">Projetos</a>
                     <a href="#contato">Contato</a>
                 </nav>
                 <SignInButton/>
            </div>
        </header>
    );
}