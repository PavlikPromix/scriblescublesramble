'use client'
import React from 'react'
import styles from './Buttonchik.module.scss'
import { useRouter } from 'next/navigation';


export default function Buttonchik({children, onClick, redirect}) {
    const router = useRouter()
    return (
        redirect ? 
        <button className={styles.button} onClick={() => router.push(redirect)}>{children}</button> :
        <button className={styles.button} onClick={onClick}>{children}</button>
    )
}
