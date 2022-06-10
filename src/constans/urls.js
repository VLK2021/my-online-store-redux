export const urls = {
    products: (page) => `/products?_page=${page}&_limit=9`,
    categories: () => `/categories`,
    brands: () => '/brands',


    search: (word, page) => `/products?_page=${page}&_limit=9&${word}`,
    // search: (word, page, url) => `/products?_page=${page}&_limit=9&${word}&`.concat(`${url}`),
    // search: (word, page) => `/products?_page=${page}&_limit=9&q=${word}`.concat(`&q=${word}`),
    // search: (url, word, page) => `/products?_page=${page}&_limit=9&q=${url}`.concat(`&q=${word}`)
    // brands: (page) => `/brands?_limit=9&_page=${page}`,
}