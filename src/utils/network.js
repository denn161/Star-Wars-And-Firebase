 
/**
 * Функция запроса на базовый API 
 * @param {Link} url 
 * @returns {Promise}
 */
export const getApiResurce = async (url) => {
    try {
        const response = await fetch(url)
        if (!response.ok) {
            console.error('Could not fetch',response.status)               
           }
       const data = await response.json()      
          return data       
    } catch (error) {
        console.warn('Could not fetch',error.message)
         return false
   }   
}

// (async () => {
//     const body = await getApiResurce(SWAPI_REQUEST)
//     console.log(body)   

// })()


/**
 * Фгнкция использует Promise all  и делает запросы на url в массиве адресов 
 * @param {Array} urls 
 * @returns {Promise} нужный промис с информацией
 */

export const makeConCurrentRequest = async (urls) => {

    const data = await Promise.all(urls.map(url => {
        return fetch(url).then(res => res.json());
    }))

    return data;
}

// export const makeConCurrentRequest = async (urls) => {
    
//     const res = await Promise.all(urls.map(url => {
//         return fetch(url).then(res=>res.json())
//     }))

//     return res
// }