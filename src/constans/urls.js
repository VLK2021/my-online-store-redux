export const urls = {
    products: (page) =>`/products?_limit=9&_page=${page}`,
    categories: (page) => `/categories?_limit=9&_page=${page}`,
    brands: (page) => `/brands?_limit=9&_page=${page}`,
}