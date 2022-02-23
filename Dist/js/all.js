
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






var swiper = new Swiper('.swiper', {
    
    direction: "vertical",
    initialSlide : 3,
    speed : 400,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    mousewheel: {
        invert: false,
      },



  // effect: 'cards',
  // cardsEffect: {
  //   slideShadows: false,
  // },


    


  });