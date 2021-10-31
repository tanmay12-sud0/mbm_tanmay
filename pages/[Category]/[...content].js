import React from 'react';
import {useRouter} from "next/router";
import BreadcrumbComponent from '../../components/UI/CustomBreadcrumb';

function content() {
    const router = useRouter();
    const {content=[]} = router.query;
    console.log(content);
    
    return (
        <div>
          <BreadcrumbComponent/>
        </div>
    )
}

export default content;
