import React from 'react'
import {useRouter} from "next/router";

export default function TpoContent() {
    const router = useRouter();
    const {content=[]} = router.query;
    console.log(content);
    return (
        <div>
            Tpo - content
        </div>
    )
}
