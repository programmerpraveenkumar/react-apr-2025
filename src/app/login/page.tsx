'use client'
import React, { useRef } from 'react';
import styles from './style.module.css';
import { log } from 'console';

const login= ()=>{
    // const svgRef = React.createRef();

    let nameRef =  React.createRef<HTMLDivElement>();
    let pwdRef =  React.createRef<HTMLDivElement>();
    const loginApiCall=async()=>{
            let name =  nameRef.current.value;
            let pwd = pwdRef.current.value;
            if(name == ''){
                alert("name should not be empty")
                return 
            }
           else  if(pwd == ''){
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
            <input ref={nameRef} className={styles.my_input} type="text" placeholder="Enter User Name" />
        </div>
        <div>
            <input ref={pwdRef}  className={styles.my_input} type="text" placeholder="Enter User Password" />
        </div>
        <div>
            <input onClick={loginApiCall} className={styles.my_input} type="button"  value="click"/>
        </div>
        </div>

        </>
    )
}

export default login;