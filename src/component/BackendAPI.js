import Axios from "axios";
import * as commonUtil from "/src/component/Common";

export const UNSPLASH_ACCESS_KEY =
    "Qh1nIfKS9_P30WuIRPydGyF0NPrkADn5v3Au-8uNSLA";
export const UNSPLASH_SECRET_KEY =
    "ub3ceP-InlG6Gz1f6XInqx0QBy-QFhIv1HfRNJXFKLw";

const CHATGPT_API_KEY = typeof window !== 'undefined' ? localStorage.getItem("CHATGPT_API_KEY") : "";
const GITHUB_TOKEN = typeof window !== 'undefined' ? localStorage.getItem("GITHUB_TOKEN") : "";
const GITHUB_ACCOUNT = typeof window !== 'undefined' ? localStorage.getItem("GITHUB_ACCOUNT") : "";


//sample : https://api.unsplash.com/search/photos?page=1&query=house&client_id=Qh1nIfKS9_P30WuIRPydGyF0NPrkADn5v3Au-8uNSLA&per_page=2
//참고 블로그 : https://nscworld.net/2022/04/13/unsplash-api-%ec%82%ac%ec%9a%a9%eb%b2%95-%ec%9d%b4%eb%af%b8%ec%a7%80-%ea%b0%80%ec%a0%b8%ec%98%a4%ea%b8%b0/

export const runGPTAPICall = async (req_prompt) => {
    const CHATGPT_BASE_API_URL = "https://api.openai.com/v1/completions";
    let returnStr = "";

    console.log(`req_prompt : ${req_prompt}`);

    await Axios({
        method: "POST",
        url: CHATGPT_BASE_API_URL,
        headers: {
            accept: "application/json",
            Authorization: "Bearer " + String(CHATGPT_API_KEY),
        },
        data: {
            model: "text-davinci-003",
            prompt: `${req_prompt}`,
            temperature: 0.9,
            max_tokens: 4000,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0.6,
            // stop: [" Human:", " AI:"],
        },
    })
        .then((resp) => {
            console.log(`response:`);
            console.log(resp);
            returnStr = resp;
        })
        .catch((ex) => {
            console.error("api requset fail: " + ex);
            returnStr = ex.response;
        })
        .finally(() => {
            console.log("api request end..");
        });

    return commonUtil.isEmpty(returnStr) ? {} : returnStr;
};

export const githubAPICall = async (data) => {
    let returnStr = "";
    data.github_token = GITHUB_TOKEN;
    data.github_account = GITHUB_ACCOUNT;

    if (commonUtil.isEmpty(GITHUB_TOKEN)) {
        return {
            status: 404,
            data: "GITHUB TOKEN이 없습니다."
        }
    }

    if (commonUtil.isEmpty(GITHUB_ACCOUNT)) {
        return {
            status: 404,
            data: "GITHUB 계정정보가 없습니다."
        }
    }



    await Axios({
        method: "POST",
        url: "/api/github",
        headers: {
            accept: "application/json",
        },
        data: data,
    })
        .then((resp) => {
            console.log(`response:`);
            console.log(resp);
            returnStr = resp;
        })
        .catch((ex) => {
            console.error("api requset fail: " + ex);
            returnStr = ex.response;
        })
        .finally(() => {
            console.log("api request end..");
        });

    return commonUtil.isEmpty(returnStr) ? {} : returnStr;
};
