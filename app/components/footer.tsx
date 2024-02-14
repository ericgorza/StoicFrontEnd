import React from 'react'
import Link from 'next/link';
import styles from "./footer.module.css"
import Image from 'next/image';
import instagram from "./icons/logo-instagram.svg"
import github from "./icons/logo-github.svg"
import linkdin from "./icons/logo-linkedin.svg"


const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
        {/* <div className={styles.spanContainer}> */}
            <span className={styles.span}>By Eric Gorza</span>
        {/* </div> */}
        {/* // <div className={styles.linkContainer}> */}
            <Link href={"https://www.instagram.com/ericgorza/"} className={styles.link}>
              <Image
                src={instagram}
                alt="instagramLogo"
                width={20}
                height={20}
              />
            </Link>
            <Link href={"https://github.com/ericgorza"} className={styles.link}>
              <Image
                  src={github}
                  alt="gitLogo"
                  width={20}
                  height={20}
              />
            </Link>
            <Link href={"https://www.linkedin.com/in/eric-pires-gorza-a164b7191/"} className={styles.link}>
              <Image
                src={linkdin}
                alt="linkdinLogo"
                width={20}
                height={20}
              />
            </Link>
        {/* </div> */}
    </footer>
  )
}

export default Footer;