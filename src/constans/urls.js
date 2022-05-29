export const urls = {
    products: (page) => `/products?_page=${page}&_limit=9`,
    search: (page, word) => `/products?_page=${page}&_limit=9&q=${word}`,
    brands: (page) => `/brands?_limit=9&_page=${page}`,
}