import {AxiosService} from "./axios.service";
import {urls} from "../constans";

export const productsService = {
    getAllProducts: (page) => AxiosService.get(urls.products(page)).then(value => value.data),
    getCategories: () => AxiosService.get(urls.categories()).then(value => value.data),
    getBrands: () => AxiosService.get(urls.brands()).then(value => value.data),

    getAllSearch: (word, page) => AxiosService.get(urls.search(word, page)).then(value => value.data),
    getSearchPrice: (url, page, price_gte, price_lte) => AxiosService(urls.searchOfPrice(url, page, price_gte, price_lte)).then(value => value.data),

    getTotalPagesProducts: (page) => AxiosService.get(urls.products(page)).then(value => value.headers['x-total-count']),
    getTotalPagesSearch: (word, page) => AxiosService.get(urls.search(word, page)).then(value => value.headers['x-total-count']),
}

