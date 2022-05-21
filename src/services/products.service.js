import {AxiosService} from "./axios.service";
import {urls} from "../constans/urls";

export const productsService = {
    getAllProducts: () => AxiosService.get(urls.products).then(value => value.data),
}

