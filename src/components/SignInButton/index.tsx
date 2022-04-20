import styles from './styles.module.scss'
import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { useState } from 'react';

export function SignInButton (){

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    return isLoggedIn
    ? (
        <button className={styles.btn}>
            <FaGithub color='#04d361'/>
            Kauê França 
            <FiX className={styles.closeIcon}/>
        </button>
    ) 
    : (
        <button className={styles.btn}>
            <FaGithub color='#eba417'/>
            Sign in with Github 
        </button>
    ) 
}

