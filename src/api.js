import axios from "axios";
import { API_BASE_URL } from "./constants";

export default function createApi(baseUrl = API_BASE_URL) {
    var responseCache = {};

    function get(url) {
        if (responseCache[url]) {
            return Promise.resolve(responseCache[url]);
        }

        return axios.get(url)
            .then(({ data }) => {
                responseCache[url] = data;
                
                return data;
            })
    }

    function pageNumberToRequestUrl(pageNumber) {
        return `${baseUrl}?page=${pageNumber}`;
    }

    return {
        get,
        pageNumberToRequestUrl
    }
}
