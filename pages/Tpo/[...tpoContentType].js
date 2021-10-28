import React from 'react'
import {useRouter} from "next/router";

export default function TpoContent() {
    const router = useRouter();
    const {tpoContentType=[]} = router.query;
    console.log(tpoContentType);
    return (
        <div>
            Tpo - content
        </div>
    )
}
