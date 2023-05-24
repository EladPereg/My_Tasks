import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
    let menu = document.getElementById('menu')

    return (
        <div>
            <h2>Error 404</h2>
            <h1 style={{marginTop:'80px'}}>This page was not found</h1>
        </div>
    )
}
