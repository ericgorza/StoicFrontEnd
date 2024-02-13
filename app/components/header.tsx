import React from 'react'
import styles from "./header.module.css"

const Header = () => {
  return (
    <header className={styles.header}>
        <div className={styles.headerContainer}>
            <h1 className="header-h1">Your daily stoic app</h1>
        </div>
    </header>
  )
}

export default Header;