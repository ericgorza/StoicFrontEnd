"use client"

import React from 'react'
import Image from 'next/image';
import styles from './card.module.css'
import { useState } from 'react';

import philosopherData from '../../config.json'

const philosophers = philosopherData.philosophers;


// const randomPhilosopher = philosophers[randomIndex]

const Card = () => {

    const [mainName, setMainName] = useState("")
    const [mainInfo, setMainInfo] = useState("")
    const [message, setMessage] = useState("")
    const [counter, setCounter] = useState(0)

    const changeStates = (counter) => {
        setMainName(philosophers[counter]['name']);
        setMainInfo(philosophers[counter]['date']);
        setMessage(philosophers[counter]['message']);
    }

    const handleClick = (e) => {
        e.preventDefault()
        console.log(counter)
        console.log(philosophers.length)
        if(counter >= (philosophers.length - 1)){
            setCounter(0)
            changeStates(counter)
        } else {
            setCounter(counter + 1);
            changeStates(counter)
    }}



  return (
    <main className="main-page">
            <div className={styles.cardContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.mainName}>{mainName}</h1>
                    <p className={styles.mainInfo}>{mainInfo}</p>
                    <div className={styles.messageContainer}>
                        <p className={styles.mainMessage}>
                            {message}
                        </p>
                    </div>
                </div>
                <div className={styles.imgContainer}>
                    <Image
                        src=""
                        alt="Descrição da imagem"
                        width={100}
                        height={100}
                    />
                </div>
            </div>
            <div className={styles.buttonContainer}>
                    <button className={styles.button} onClick={handleClick}>
                        <span className="buttonSpan">Button</span>
                    </button>
            </div>
        </main>
  )
}

export default Card;