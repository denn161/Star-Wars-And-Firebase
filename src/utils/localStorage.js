

/**
 * Функция устанавливает значение в LocalStorage
 * @param {String} key Ключ, который устанавливаем в  LocalStorage
 * @param {Object} data Данные 
 */
export const setLoacalStorage = (key, data) => {
     localStorage.setItem(key, JSON.stringify(data))    

}

/**
 * Забираем данные из LocalStorage
 * @param {String} key 
 * @returns {Object}  Данные ввиде обьекта 
 */
export const getLocalStorage = (key) => {
   const data =localStorage.getItem(key)
    if (data !==null) {
         return JSON.parse(data)
    }    
    return {}
}
