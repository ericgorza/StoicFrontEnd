"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "./components/header";
import Card from "./components/card";
import Footer from "./components/footer";
import Api from "./components/api";
import { useState, useEffect } from 'react'
import axios from 'axios'

const URL_FILOSOFOS = "http://127.0.0.1:8000/filosofo/"
const URL_PHRASES = "http://127.0.0.1:8000/phrases/"
const URL_PICTURES = "http://127.0.0.1:8000/pictures/"



import "./page.css";

export default function Page() {

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
    <div>
        <Header />
        <Card filosofo={dict}/>
        <Footer />
        {/* <div style={{width:"400px"}}>
            <Api />
        </div> */}
    </div>
);
}