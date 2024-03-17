import React, { Children } from 'react'
import './Buttonchik.css'

export default function Buttonchik({children, onClick}) {
    return (
        <button className='button' onClick={onClick}>{children}</button>
    )
}
