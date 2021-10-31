import React from 'react';
import {useRouter} from "next/router";
import CustomBreadcrumb from '../../components/UI/CustomBreadcrump';

function content() {
    const router = useRouter();
    const {content=[]} = router.query;
    console.log(content);
    
    return (
        <div>
          <CustomBreadcrumb content={content}/>
        </div>
    )
}

export default content;
