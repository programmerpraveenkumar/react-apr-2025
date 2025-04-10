'use client'
import React, { useRef } from 'react';
import styles from './style.module.css';
import { useSearchParams } from 'next/navigation';
import Register from '../register/page';
import Login from '../login/page';
 

const showAnyOne= ()=>{
     const pageType = useSearchParams().get('type');
     
    return(
        // conditional rendering
      <>
            {
                pageType=='login'?<Login/>:<Register/>
            }
      </>
    )
}

export default showAnyOne;