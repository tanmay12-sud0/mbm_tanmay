import React from 'react';
import {useRouter} from "next/router";
import BreadcrumbComponent from '../../components/UI/CustomBreadcrumb';
import CustomBanner from '../../components/UI/CustomBanner';

function Category() {
    
    return (
        <div>
          <CustomBanner/>
          <div className="container">
            <BreadcrumbComponent/>
          </div>
        </div>
    )
}

export default Category;
