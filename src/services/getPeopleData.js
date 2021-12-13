
import { SWAPI_PEOPLE,SWAPI_BASE_URL,GUIDE_PEOPLE_EXTENSION,GUIDE_PEOPLE_IMG,QUERY_PARAM_PAGE } from "@constants/api"


/**
 * Функция возвращает номер текущей страницы
 * @param {String} url Адрес текущей страницы 
 * @returns {Number} Номер текущей страницы
 */
export const getPeoplePageId = (url) => {
    const pos = url.lastIndexOf(QUERY_PARAM_PAGE) // послденне вхождение
    const id = url.slice(pos + QUERY_PARAM_PAGE.length, url.length) // обрезаем по индексу плюс длину
     return  Number(id)
}

/**
 * Функция возвращает id по нужной категории
 * @param {String} url 
 * @param {String} category 
 * @returns {Number} 
 */
const getId = (url, category) => {
    const id = url
        .replace(SWAPI_BASE_URL + category, '')
        .replace(/\//g,'')
    return id
    
}

/**
 * Функция возвращает id 
 * @param {*} url 
 * @returns 
 */
export const getPeopleId = (url) => getId(url, SWAPI_PEOPLE)

export const getPeopleImage = (id) => `${GUIDE_PEOPLE_IMG}/${id}${GUIDE_PEOPLE_EXTENSION}`

