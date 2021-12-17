
import HELPERS from "../utiles/helper";

const MBM_API = {
    getHeader: params => {
        return HELPERS.request({
            baseURL:"http://65.0.236.193:8055/items",
            url: `/website_props`,
            method: 'GET',
            params,
        });
    },
}

export default MBM_API;