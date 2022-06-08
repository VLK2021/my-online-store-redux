import {AxiosService} from "./axios.service";
import {urls} from "../constans/urls";

export const productsService = {
    getAllProducts: (page) => AxiosService.get(urls.products(page)).then(value => value.data),
    getCategories: () => AxiosService.get(urls.categories()).then(value => value.data),
    getBrands: () => AxiosService.get(urls.brands()).then(value => value.data),
    // getAllSearch: (word, page) => AxiosService.get(urls.search(word, page)).then(value => value.data),
    // getAllSearch: (url, word, page) => AxiosService.get(urls.search(url, word, page)).then(value => value.data),
}

