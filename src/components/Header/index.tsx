import { SignInButton } from '../SignInButton';
import styles from './styles.module.scss'

export function Header(){
    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                 <h1>KF .</h1>
                 <nav>
                     <a href="">Home</a>
                     <a href="">Sobre Mim</a>
                     <a href="">Projetos</a>
                     <a href="">Contatos</a>
                 </nav>
                 <SignInButton/>
            </div>
        </header>
    );
}