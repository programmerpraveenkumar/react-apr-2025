'use client'
import { useState } from "react";
import { Footer } from "./Header";
import { Header } from "./Header"

export default function Home() {
  let firstname = "bjjgj";
  let lastname = "lkbjjgj";
  const[name,setName] = useState('abcd');
  const[userList,setuserList] = useState<[user]>();//not initilize
  //arrow function
  const myfunction=()=>{
    setName('efgh');
    alert("sample function")
  }
  //data type of server response
  interface user{
    "name":string,
    "img":string,
    "id":string
  }
  const getMyApi=async ()=>{
      let res = await fetch("https://www.apirequest.in/user/api/");
      let json = await res.json();//promise method
      console.log(json);
      setuserList(json);//update the server response into the state variable
  }
  const showDetail=(user:user)=>{
    alert(user.id+" "+user.name)
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
        (!userList)?<h1>No user found</h1>:null
      }
      {
        userList && userList.map((userObj,index)=>{
            return (
              <div>
                <a href={`userDetail?id=${userObj.id}`}>
                <h1 key={index}>{userObj.name}</h1>
                <img src={userObj.img}/>
                </a>
                <button onClick={()=>showDetail(userObj)}>see quick detail...</button>
                </div>
                
            )
        })
      }
      <Footer/>
    </div>
  );
}
