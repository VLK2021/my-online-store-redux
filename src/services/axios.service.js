import axios from 'axios';

import baseURL from "../constans/base.url";

export const AxiosService = axios.create({
    baseURL,
})