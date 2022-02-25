
function maximize(){
    document.querySelector('.main-div').classList.remove('animating')
    document.querySelector('.main-div').classList.add('maximize')
}

function shrink(){
    document.querySelector('.main-div').classList.remove('maximize')
    document.querySelector('.main-div').classList.add('animating')
}



document.querySelector('.btton').addEventListener('click' , function () {


    shrink()
    
    

    
})

document.querySelector('.exit-btn').addEventListener('click' , function () {


    maximize()
   
    

    
})






$('.link-child').each((index ,el) => {
    $(el).on('click' , () => {
        maximize()
   
        swiper.slideTo(index, 600, false) 
        
        
    })
});

let logo = document.querySelector('.logo')
document.onmousemove = e => {
    console.log({x : e.clientX})
    logo.style.transform.translateX += e.clientX
}
