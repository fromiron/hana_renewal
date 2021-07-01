import Axios from "axios";

async function publicApi(apiUrl: string) {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    const res = await Axios.get(API_URL+apiUrl);
    return res.data;
}

export default publicApi;