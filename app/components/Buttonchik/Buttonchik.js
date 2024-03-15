import React, { Children } from 'react'
import './Buttonchik.css'

export default function Buttonchik({children}) {
    return (
        <div className='button'>{children}</div>
    )
}
