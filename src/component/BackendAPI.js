import Axios from "axios";
import * as commonUtil from "/src/component/Common";


export const runGPTAPICall = async (req_prompt, gpt_api_key) => {

    const CHATGPT_BASE_API_URL = "https://api.openai.com/v1/completions";
    let returnStr = "";

    // console.log("----------------")
    // console.log(req_prompt);
    // console.log(gpt_api_key);
    // console.log("----------------")

    await Axios({
        method: "POST",
        url: CHATGPT_BASE_API_URL,
        headers: {
            accept: "application/json",
            Authorization: "Bearer " + String(gpt_api_key),
        },
        data: {
            model: "text-davinci-003",
            prompt: `${req_prompt}`,
            temperature: 0.9,
            max_tokens: 2048,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0.6,
            // stop: [" Human:", " AI:"],
        },
    }).then(resp => {
        console.log(`response:`);
        console.log(resp);
        returnStr = resp;
    }).catch(ex => {
        console.error("api requset fail: " + ex);
        returnStr = ex.response;
    }).finally(() => { console.log("api request end..") });

    return commonUtil.isEmpty(returnStr) ? {} : returnStr;

};

