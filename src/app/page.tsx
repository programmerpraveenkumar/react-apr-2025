'use client'
import { useState } from "react";
import { Footer } from "./Header";
import { Header } from "./Header"

export default function Home() {
  let firstname = "bjjgj";
  let lastname = "lkbjjgj";
  const[name,setName] = useState('abcd');
  const[userList,setuserList] = useState([]);
  //arrow function
  const myfunction=()=>{
    setName('efgh');
    alert("sample function")
  }
  const getMyApi=async ()=>{
      let res = await fetch("https://www.apirequest.in/user/api/");
      let json = await res.json();//promise method
      console.log(json);
      setuserList(json);//update the server response into the state variable
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
      {
        userList.map((user,index)=>{
            return (
              <div>
                <h1 key={index}>{user.name}</h1>
                <img src={user.img}/>
                </div>
            )
        })
      }
      <Footer/>
    </div>
  );
}
