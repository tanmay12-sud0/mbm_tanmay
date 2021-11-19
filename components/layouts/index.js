import React from 'react'
import Footer from './Footer'
import Header from './Header';

export default function Layout({children, menus, globalVariables}) {
    return (
        <div>
            <Header globalVariables={globalVariables} menus={menus}/>
             <main className="main-layout">{children}</main>
            <Footer/>
        </div>
    )
}
