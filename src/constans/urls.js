export const urls = {
    products: (page) => `/products?_page=${page}&_limit=9`,
    categories: () => `/categories`,
    brands: () => '/brands',
    search: (word, page) => `/products?_page=${page}&_limit=9&${word}`,
    searchOfPrice: (url, page, price_gte, price_lte) => `/products?_page=${page}&_limit=9&${url}&price_gte=${price_gte}&price_lte=${price_lte}`,
}