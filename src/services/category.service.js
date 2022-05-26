import {AxiosService} from "./axios.service";
import {urls} from "../constans/urls";


export const categoryService = {
    getAllCategories: (page) => AxiosService.get(urls.categories(page)).then(value => value.data),
}