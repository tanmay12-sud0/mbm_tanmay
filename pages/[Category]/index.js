import React from 'react';
import {useRouter} from "next/router";

function content() {
    const router = useRouter();
    return (
        <div>
            Hey content 
        </div>
    )
}

export default content;
