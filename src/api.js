import axios from "axios";

export default function createApi(baseUrl = "https://swapi.co/api/starships/") {
    var responseCache = {};

    function getPage(pageNumber) {
        const url = `${baseUrl}?page=${pageNumber}`;

        return get(url);
    }

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

    return {
        getPage,
        get
    }
}
