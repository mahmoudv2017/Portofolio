

document.querySelector('.btton').addEventListener('click' , function () {



    document.querySelector('.main-div').classList.remove('maximize')
    document.querySelector('.main-div').classList.add('animating')
    

    
})

document.querySelector('.exit-btn').addEventListener('click' , function () {



    document.querySelector('.main-div').classList.remove('animating')
    document.querySelector('.main-div').classList.add('maximize')
    

    
})