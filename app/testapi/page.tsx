"use client"
import React from 'react'
import styles from './test.module.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

const URL_FILOSOFOS = "http://127.0.0.1:8000/filosofo/"
const URL_PHRASES = "http://127.0.0.1:8000/phrases/"
const URL_PICTURES = "http://127.0.0.1:8000/pictures/"



const ApiTest = () => {

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
        console.log('Dados:', dados);
        console.log('Phrases:', phrases);
        console.log('Images:', images);

        const organizedData = dados.map((item) => {
          const name = item.name;
          const location = item.location;
          const frases = phrases.filter((phrase) => phrase.philosopher === item.id).map((item) => (item.phrase));
          const img = images.filter((i) => i.philosopher === item.id).map((item) => (item.img_url));

          return {
            name,
            location,
            frases,
            img,
          };
        });

        // Atualiza o estado dict com os novos dados organizados
        setDict(organizedData);
        console.log(dict)
    }, [dados,phrases,images])


  return (
    <div className={styles.page}>
        <div className={styles.divTitle}>
            <h1>Dados renderizados</h1>
        </div>
            {dict.map((index) => (
                <div className={styles.listContainer}>
                    <p>{index.name}</p>
                    <p>{index.location}</p>
                    <p>{index.frases.map((frase) => (<p>{frase}</p>))}</p>
                    <p>{index.img.map((image)=> (<p>{image}</p>))}</p>
                </div>
            ) )}
    </div>

  )
}

export default ApiTest;