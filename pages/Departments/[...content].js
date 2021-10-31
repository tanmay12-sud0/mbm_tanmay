import React from 'react';
import {useRouter} from "next/router";

function content() {
    const router = useRouter();
    const {content=[]} = router.query;
    console.log(content);
    return (
        <div>
            Hey content 
        </div>
    )
}

export default content;
