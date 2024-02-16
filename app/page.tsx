"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "./components/header";
import Card from "./components/card";
import Footer from "./components/footer";
import Api from "./components/apitest";


import "./page.css";

export default function Page() {
    return (
    <div>
        <Header />
        <Card/>
        <Footer />
        {/* <div style={{width:"400px"}}>
            <Api />
        </div> */}
    </div>
);
}