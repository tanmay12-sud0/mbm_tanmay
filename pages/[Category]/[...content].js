import React from 'react';
import {useRouter} from "next/router";
import BreadcrumbComponent from '../../components/UI/CustomBreadcrumb';
import CustomCarousel from '../../components/UI/CustomCarousel';
import CustomBanner from '../../components/UI/CustomBanner';

function content() {
    const router = useRouter();
    const {content=[]} = router.query;
    console.log(content);
    
    return (
        <div>
          <CustomBanner image={
            "https://mbm.ac.in/wp-content/uploads/2021/01/banner2.png"
          } caption={content[content.length-1]}/>
          <div className="container">
            <BreadcrumbComponent/>
          </div>
        </div>
    )
}

export default content;
