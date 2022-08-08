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

const counters = $.querySelectorAll('.num')
const sectionCardContainer = $.querySelector('.sec4-container')

let startCounter = false

window.onscroll = (e)=>{

    if (window.scrollY >= sectionCardContainer.offsetTop) { 
        if (!startCounter) {
            counters.forEach(counter => setCounter(counter))
            
        }
        startCounter = true
    }
}

function setCounter(el){
    let elemNumberCount = el.dataset.count 

  let countInterVal =   setInterval(()=>{

      if (el.textContent == elemNumberCount) {
        clearInterval(countInterVal)
      }
               
        el.textContent++
    },10)

}