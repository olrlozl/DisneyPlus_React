import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "038cc6ab4da7a72b2c7fb429dc5d9b7d",
        language: "ko-KR"
    }
})

export default instance;