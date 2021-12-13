import { useLocation } from "react-router-dom"


/**Функция возвращает URL текущей страницы
 * 
 * @returns {Object} Обькт с необходимыми методами, в данном случае используем метод get
 */
export const useQueryParams = () => {

 return new URLSearchParams(useLocation().search)
    
}