import React from 'react';
import './Navbar.scss';
import logo from '../../logo.png'

export default function Navbar() {
    return ( <
        nav className = "navbar" >
        <
        img src = { logo }
        alt = "logo img" / >
        <
        ul className = "navlinks" >
        <
        li >
        <
        a href = "/"
        className = "navlink" > Home < /a> < /
        li > <
        li >
        <
        a href = "/"
        className = "navlink" > About < /a> < /
        li > <
        li >
        <
        a href = "/"
        className = "navlink active" > Tours < /a> < /
        li > <
        /ul> < /
        nav >
    )
}