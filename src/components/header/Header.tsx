import styles from '@/styles/header/Header.module.scss'
import { useState } from 'react'
import { BsMoon, BsSun } from 'react-icons/bs'

export default function Header() {
    const [theme, setTheme] = useState<boolean>(true); // light = true | dark = false

    function changeTheme(theme: boolean) :void {
    const html = document.querySelectorAll('html')[0]
    setTheme(prev => !prev)

    !theme
        ? html.classList.remove('dark-mode')
        : html.classList.add('dark-mode')  
    }

    return (
        <div className={styles.header}>
          <h1>Where in the world?</h1>
          <button className={styles.themeChanger} onClick={() => changeTheme(theme)}>
            { theme ? <><BsMoon /> Dark Mode</> : <><BsSun /> Light Mode</> }
          </button>
        </div>
    )
}