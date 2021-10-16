import React from 'react';
import {useRouter} from "next/router";
import Head from 'next/head'

export default function content() {
    const router = useRouter()
    let contentType = router.query.Department; 
    return (
        <>
        <Head>
            <title>MBM - {contentType}</title>
            <meta name="description" content={`MBM University`}/>
        </Head>
        <div>
                Hello {contentType}
        </div>
        </>
    )
}
