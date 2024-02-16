"use client"

import React from 'react'
import Image from 'next/image';
import styles from './card.module.css'
import { useState } from 'react';
import { useEffect } from 'react';
import testImg from './images/Test.jpg'
import axios from 'axios';

import philosopherData from '../../config.json'

// const philosophers = philosopherData.philosophers;

const URL_FILOSOFOS = "http://127.0.0.1:8000/filosofo/"
const URL_PHRASES = "http://127.0.0.1:8000/phrases/"
const URL_PICTURES = "http://127.0.0.1:8000/pictures/"


const Card = () => {

    //Definir os estados que usaremos

    // const [mainName, setMainName] = useState("")
    // const [mainInfo, setMainInfo] = useState("")
    // const [message, setMessage] = useState("")
    const [imgemFilosofo, setImagemFilosofo] = useState("")
    const [counter, setCounter] = useState(0)
    const [imgCounter, setImgCounter] = useState(0)
    const [phraseCounter, setPhraseCounter] = useState(0)

    //Criar o estado para CSS Fade In:
    // const [fadeIn, setFadeIn] = useState(false);

    // const changeStates = () => {
    //     setFadeIn(false); // Ative o efeito fadeIn
    //     setTimeout(() => {
    //       setFadeIn(true); // Desative o efeito fadeIn após algum tempo (ajuste conforme necessário)
    //     }, 1000); // Tempo em milissegundos, ajuste conforme necessário
    //   };

    //Fazer o fetch na API

    const [dados, setDados] = useState([])
    const [phrases, setPhrases] = useState([])
    const [images, setImages] = useState([])
    const [dict, setDict] = useState([])

    useEffect(() => {
        const fetchData = async () => {
          try {
            const responseFilosofo = await axios.get(URL_FILOSOFOS);
            setDados(responseFilosofo.data);
            const responsePhrase = await axios.get(URL_PHRASES)
            setPhrases(responsePhrase.data)
            const responseImage = await axios.get(URL_PICTURES)
            setImages(responseImage.data)

          } catch (error) {
            console.error('Erro ao obter dados da API:', error);
          }
        };

        fetchData();
      }, []);

    useEffect(() => {

        const organizedData = dados.map((item) => {
          const nomeFilosofo = item.name;
          const locationFilosofo = item.location;
          const frasesFilosofo = phrases.filter((phrase) => phrase.philosopher === item.id).map((item) => (item.phrase));
          const imgFilosofo = images.filter((i) => i.philosopher === item.id).map((item) => (item.img_url));

          return {
            nomeFilosofo,
            locationFilosofo,
            frasesFilosofo,
            imgFilosofo,
          };
        });

        // Atualiza o estado dict com os novos dados organizados
        setDict(organizedData);
        console.log(dict)
        const filosofoUm = dict[0]
        if(filosofoUm){
            console.log(filosofoUm.nomeFilosofo)
        }
    }, [dados,phrases,images])

// Descomente se voce quiser utilizar a fake API:

    // const changeStates = (counter) => {
    //     setMainName(philosophers[counter]['name']);
    //     setMainInfo(philosophers[counter]['date']);
    //     setMessage(philosophers[counter]['message']);
    // }

// Descomente se voce quiser utilizar a API Django:

//     const changeStates = (counter) => {
//         if(dict[counter]){
//             // setMainName(dict[counter].nomeFilosofo);
//             // setMainInfo(dict[counter].locationFilosofo);
//             // setMessage(dict[counter].frasesFilosofo[phraseCounter]);
//             setImagemFilosofo(dict[counter].imagemFilosofo[imgCounter]);

// }}

    const handleClick = (e) => {
        e.preventDefault()
        console.log("Counter: ", counter)

        let randomPhraseIndex = Math.floor(Math.random() * 4);
        let randomImgIndex = Math.floor(Math.random() * 2);

        setImgCounter(randomImgIndex)
        setPhraseCounter(randomPhraseIndex)
        // changeStates()

        console.log("Img Counter: ", imgCounter)
        console.log("Phrase Counter: ", phraseCounter)

        if(counter >= (dict.length - 1)){
            setCounter(0)
            // changeStates(counter)
        } else {
            setCounter(counter + 1);
            // changeStates(counter)
    }}

    useEffect(() =>{
        // changeStates(0)
        setCounter(counter + 1);
        // setImgCounter(imgCounter + 1)
        // setPhraseCounter(phraseCounter + 1)
    },[])



  return (
    <main className="main-page">
        {dict[counter]?
            <div className={styles.cardContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.mainName}>{dict[counter].nomeFilosofo}</h1>
                    <p className={styles.mainInfo}>{dict[counter].locationFilosofo}</p>
                    <div className={styles.messageContainer}>
                        <p className={styles.mainMessage}>
                            {dict[counter].frasesFilosofo[phraseCounter]}
                        </p>
                    </div>
                </div>
                <div className={styles.imgContainer}>
                    <Image
                        src={testImg}
                        alt="Descrição da imagem"
                        width={150}
                        height={150}
                        className={styles.img}
                    />
                </div>
            </div>
        :
            <div className={styles.cardContainerLoading}>
                <h1>Loading...</h1>
            </div>
            }
            <div className={styles.buttonContainer}>
                    <button className={styles.button} onClick={handleClick}>
                        <span className="buttonSpan">Next</span>
                    </button>
            </div>
        </main>
  )
}

export default Card;