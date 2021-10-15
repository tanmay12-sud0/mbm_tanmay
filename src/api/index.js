import HELPERS from "../utils/helper";

const MENU_API = {
    getMenus: params => {
        return HELPERS.request({
            url: `/menus/`,
            method: 'GET',
            params,
        });
    },
}

export default MENU_API;