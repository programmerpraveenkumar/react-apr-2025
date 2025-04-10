'use client'
import React, { useRef } from 'react';
import styles from '@/app/login/style.module.css';

const Register= ()=>{
     
    return(
        <>
        <div className={styles.main_div}>

        <h1>Register form</h1>
        <div>
            <input   className={styles.my_input} type="text" placeholder="Enter User Name" />
        </div>
        <div>
            <input   className={styles.my_input} type="text" placeholder="Enter User Email" />
        </div>
        <div>
            <input   className={styles.my_input} type="text" placeholder="Enter address" />
        </div>
        <div>
            <input   className={styles.my_input} type="text" placeholder="Enter User Password" />
        </div>
        <div>
            <input   className={styles.my_input} type="button"  value="Register"/>
        </div>
        </div>

        </>
    )
}

export default Register;