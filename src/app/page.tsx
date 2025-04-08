'use client'
import { useState } from "react";
import { Footer } from "./Header";
import { Header } from "./Header"

export default function Home() {
  let firstname = "bjjgj";
  let lastname = "lkbjjgj";
  const[name,setName] = useState('abcd');
  //arrow function
  const myfunction=()=>{
    setName('efgh');
    alert("sample function")
  }
  const getMyApi=async ()=>{
      let res = await fetch("https://www.apirequest.in/user/api/");
      // console.log(res);
      let json = await res.json();
      console.log(json);
  }
  return (
    <div>
      <Header/>
      <h1>this is my next app</h1>
      <h2>{firstname}</h2>
      <h2>{lastname}</h2>
      <h1>{name}</h1>   
      <button onClick={myfunction}>Click me</button>
      <button onClick={getMyApi}>get  My Api</button>
      <Footer/>
    </div>
  );
}
