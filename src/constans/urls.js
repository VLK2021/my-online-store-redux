export const urls = {
    products: (page) =>`/products?_limit=9&_page=${page}`,
    search: (page, word) => `/products?_limit=9&_page=${page}&q=${word}`,
    brands: (page) => `/brands?_limit=9&_page=${page}`,
}