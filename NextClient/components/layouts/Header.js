import React from 'react'
import Head from 'next/head';
import Link from "next/link";
export default function Header({menus}) {
    return (
        <>
          <Head>
            <title>MBM University</title>
            <meta name="description" content="MBM University"/>
          </Head>
          <div>Header</div>
        </>
    )
}
