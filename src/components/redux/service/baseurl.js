import axios from "axios"
export const axiosBaseUrl = axios.create({
    baseURL:`http://staging.redappletech.com:4010/api/v1`
    });
