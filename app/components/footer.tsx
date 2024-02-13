import React from 'react'
import Link from 'next/link';
import styles from "./footer.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
        {/* <div className={styles.spanContainer}> */}
            <span className={styles.span}>By Eric Gorza</span>
        {/* </div> */}
        {/* // <div className={styles.linkContainer}> */}
            <Link href={""} className={styles.link}>Insta</Link>
            <Link href={""} className={styles.link}>Face</Link>
            <Link href={""} className={styles.link}>LinkdIn</Link>
        {/* </div> */}
    </footer>
  )
}

export default Footer;