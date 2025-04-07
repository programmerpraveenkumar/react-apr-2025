'use client'
import { useState } from "react";
import { Footer } from "./Header";
import { Header } from "./Header"

export default function Home() {
  let firstname = "bjjgj";
  let lastname = "lkbjjgj";
  const[name,setName]=useState('ikhjhg');
  return (
    <div>
      <Header/>
      <h1>this is my next app</h1>
      <h2>{firstname}</h2>
      <h2>{lastname}</h2>
      {name}
      <Footer/>
    </div>
  );
}
