'use client'
import React, { useRef } from 'react';
import styles from './style.module.css';

const login=()=>{
    // const svgRef = React.createRef();

    let nameRef =  React.createRef<HTMLDivElement>();
    let pwdRef =  React.createRef<HTMLDivElement>();
    const loginApiCall=()=>{
            let name =  nameRef.current;
            let pwd = pwdRef.current;
            if(name == ''){
                alert("name should not be empty")
                return 
            }
           else  if(pwd == ''){
                alert("pwd should not be empty")
                return 
            }else{
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