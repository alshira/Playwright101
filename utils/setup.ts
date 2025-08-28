// JS const{chromium} = require("playwright")
import {chromium} from "playwright";

export const connectToBrowser = async(capabilities)=>{
    const browser = await chromium.connect({
        wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`
    })
    return browser;
}

//module.exports = { connectToBrowser };
export default {
    connectToBrowser
};
