import React from 'react';
import {useRouter} from "next/router";

export default function content() {
    const router = useRouter()
    let contentType = router.query.Department; 
    return (
        <div>
            Hello {contentType}
        </div>
    )
}
