const inquirer = require('inquirer')
const {Circle, Square, Triangle} = require('./utils/shapes.js')

class SVG{
    constructor(){
        this.textEl = ''
        this.shapeEl = ''
    }
    render(){

    }
    setTextEl(text, color){
        this.textEl = ''
    }
    setShapeEl(shape){
        this.shapeEl = shape.render()
    }
}