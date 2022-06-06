import {AxiosService} from "./axios.service";
import {urls} from "../constans/urls";

export const productsService = {
    getAllProducts: (page) => AxiosService.get(urls.products(page)).then(value => value.data),
    getAllSearch: (word, page) => AxiosService.get(urls.search(word, page)).then(value => value.data),
}

