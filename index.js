const inquirer = require('inquirer')
const {Circle, Square, Triangle} = require('./utils/shapes.js')

class SVG{
    constructor(){
        this.textEl = ''
        this.shapeEl = ''
    }
    render(){
        return ``
    }
    setTextEl(text, color){
        this.textEl = ''
    }
    setShapeEl(shape){
        this.shapeEl = shape.render()
    }
}

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter the text for your logo. Enter up to (3) characters:',
    },
    {
        type: 'input',
        name: 'text-color',
        message: 'Enter the text color. Enter a keyword or hexadecimal number:',
    },
    {
        type: 'input',
        name: 'shape-color',
        message: 'Enter the shape color. Enter a keyword or hexadecimal number:',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose the shape you would like the image to be:',
        choices: ['Circle', 'Square', 'Triangle'],
    },
]