
// 문자열 empty 상태 체크 
export const isEmpty = (str) => {

    // str = str.replace(/(\s*)/g, "");
    if (typeof str == "undefined" || str == null || str == "" || str == NaN) return true;
    else return false;
};

// 공백문자 제거 
export const removeStrSpace = (str) => {
    return str.replace(/(\s*)/g, "");
};


export const removeLoginSessionStorage = () => {
    sessionStorage.removeItem("USER_ID");
    sessionStorage.removeItem("EARS_API_TOKEN");
};

export const uuidVal = () => {
    return "xxxxxxxx".replace(/[xy]/g, function (c) {
        var r = (Math.random() * 16) | 0,
            v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
};


export const evaluateResultChecker = (str) => {
    if (!isEmpty(str)) {
        let json = jsonRegulerFormatter(str);

        if (json.isValid === "true") return true;
        else return false;
    } else return true;
};


export const jsonRegulerFormatter = (str) => {
    try {

        str = str.replace("('", '(');
        str = str.replace("')", ')');
        let jsonStr = str.replace(/\'/gi, '"');

        let json = JSON.parse(jsonStr);
        if (typeof json === 'object') {
            return json;
        } else return "";

    } catch (e) {

        return "";
    }
}


export const getToday = () => {
    var date = new Date();
    var year = date.getFullYear();
    var month = ("0" + (1 + date.getMonth())).slice(-2);
    var day = ("0" + date.getDate()).slice(-2);

    return year + "-" + month + "-" + day;
}



export const sleep = delay => new Promise(resolve => setTimeout(resolve, delay));