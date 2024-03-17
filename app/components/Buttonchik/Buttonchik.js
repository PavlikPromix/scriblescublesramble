'use client'
import React from 'react'
import './Buttonchik.css'
import { useRouter } from 'next/navigation';


export default function Buttonchik({children, onClick, redirect}) {
    const router = useRouter()
    return (
        redirect ? 
        <button className='button' onClick={() => router.push(redirect)}>{children}</button> :
        <button className='button' onClick={onClick}>{children}</button>
    )
}
