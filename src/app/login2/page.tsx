'use client'
import React, { useRef, useState } from 'react';
import styles from './style.module.css';
import { log } from 'console';

const login= ()=>{
    // const svgRef = React.createRef();

    const[ name,setName] =  useState<string>();
    const[ pwd,setPwd]  = useState<string>('');
    const loginApiCall=async()=>{
            if(name == '' || name == undefined){
                alert("name should not be empty")
                return 
            }
           else  if(pwd == '' || pwd == undefined){
                alert("pwd should not be empty")
                return 
            }else{
                let data = {
                    "email":name,
                    "password":pwd
                    }
                let res = await fetch("https://www.apirequest.in/user/api/login",
                    {
                        "method":"post",
                        "body":JSON.stringify(data),
                        "headers":{"content-type":"application/json"}
                    })
                   // if(res.status ==200){
                    if(res.ok){
                        let json = await res.json();
                        console.log(json);
                    }else{
                        alert("request failure");
                    }
               
                
                //api call for login validation
            }
            
            // let    pwd = 
        // /await fetch("")
    }
    return(
        <>
        <div className={styles.main_div}>

        <h1>Login form</h1>
        <div>
            <input onChange={(e)=>setName(e.target.value)} className={styles.my_input} type="text" placeholder="Enter User Name" />
        </div>
        <div>
            <input onChange={(e)=>setPwd(e.target.value)}  className={styles.my_input} type="text" placeholder="Enter User Password" />
        </div>
        <div>
            <input onClick={loginApiCall} className={styles.my_input} type="button"  value="click"/>
        </div>
        </div>

        </>
    )
}

export default login;