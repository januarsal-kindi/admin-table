import http from '@helper/http'

export const getProduct = ({ limit, page }) => {
    return http.get(`/product?_page=${page}&_limit=${limit}`)
}

export const getProductwithSerachAndShort = ({ key, params, page, limit, name_filter, id_filter }) => {
    return http.get(`/product?_sort=${key}&_order=${params}&_page=${page}&_limit=${limit}&name_like=${name_filter}&id_like=${id_filter}`)
}