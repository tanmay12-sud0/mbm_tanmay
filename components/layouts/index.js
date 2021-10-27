import React from 'react'
import Footer from './Footer'
import Header from './Header'

export default function Layout(props) {
    return (
        <div>
            <Header menus={props.menus}/>
             <main>{props.children}</main>
            <Footer/>
        </div>
    )
}
