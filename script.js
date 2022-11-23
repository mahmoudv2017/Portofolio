const sass = require('sass')
const fs = require('fs')

const result = sass.compile('./style.scss');

fs.writeFile('./html/style.css' , result.css ,{},() => {
    console.log('done')
})



