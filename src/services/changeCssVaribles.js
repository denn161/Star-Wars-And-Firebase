
/*
Формат CSS-переменной:
--theme-default-УникальноеИмя # дефолтная переменная
--theme-light-УникальноеИмя   # для "light"
--theme-dark-УникальноеИмя    # для "dark"
--theme-neitral-УникальноеИмя # для "neitral"
*/

export const changeCssVaribles = (theme) => {
    
    const root = document.querySelector(':root')    
    const paramsVar = ['header', 'bgimage']    
    paramsVar.forEach((item) => {
        root.style.setProperty(`--theme-default-${item}`,`var(--theme-${theme}-${item})`)
    })
  
}


  
