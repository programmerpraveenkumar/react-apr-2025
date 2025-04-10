'use client'
import { useSearchParams } from "next/navigation";
import { useState } from "react";
 

export default function Home() {
    let params = useSearchParams();//to get the query params
  console.log("id value is ",params.get('id'));
  
  const[user,setuser] = useState<user>({
    "name":"sets",
    "img":"aasdfs",
    "id":"4",
    "email":"test@rgmail.com",
    "city":"sample"
  }); 
   
  //data type of server response
  interface user{
    "name":string,
    "img":string,
    "id":string,
    "email":string,
    "city":string
  }
  // const getMyApi=async ()=>{
  //     // let res = await fetch("https://www.apirequest.in/user/api/id=");
  //     // let json = await res.json();//promise method
  //     // console.log(json);
  //     // setuser(json);//update the server response into the state variable
  //     setuser()
  // }

  return (
    <div>
      <div>
        <h1>{user?.id}</h1>
        <h1>{user?.name}</h1>
        <h1>{user?.email}</h1>
        <h1>{user?.city}</h1>
      </div>
    </div>
  );
}
