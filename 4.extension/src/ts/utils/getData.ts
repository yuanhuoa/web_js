import {DEALGO_SERVER_ADDR} from "../html/constans";

export function AJAX(method,url,params){
    let options:Object = {
        method : method.toUpperCase()
    };

    switch (method.toUpperCase()){
        case "POST":
            let formData = new FormData();
            Object.keys(params).forEach(key=>{
                formData.append(key,params[key]);
            })
            options["body"] = formData;
            break;
        default:
            break;
    }
    return fetch(DEALGO_SERVER_ADDR + url,options)
        .then(response => {
            if (response.headers.get("content-type").indexOf("text/html") == 0) {
                return response.text();
            } else {
                return response.json();
            }
        })
        .catch(error=>{
            console.log(error);
            return error;
        })
}
