let $ = document

const iconMenu = $.querySelector('.icon-menu')
const containerNav = $.querySelector('.container-nav')
let flag = true

iconMenu.onclick = ()=>{
    

    if (flag) {
        containerNav.style.left = '0px'

        flag = false
        
    }else{
        containerNav.style.left = '-100%'
        flag = true
    }
    
}

const btnCloseNav = $.querySelector('.icon-close')

btnCloseNav.onclick = ()=>{
    containerNav.style.left = `-100%`
}
