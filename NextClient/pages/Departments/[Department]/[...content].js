import React from 'react';
import {useRouter} from "next/router";

function content() {
    const router = useRouter();
    const {content=[]} = router.query;
    console.log(content);
    // if(content.length===1){
    //     return (
    //         <div>
    //            Hey {content[0]}
    //         </div>
    //     )
    // }
    return (
        <div>
            Hey content 
        </div>
    )
}

export default content;
