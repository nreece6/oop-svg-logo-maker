const fs = require('fs')
const inquirer = require('inquirer')
const {Circle, Square, Triangle} = require('./utils/shapes.js')

class SVG{
    constructor(){
        this.textEl = ''
        this.shapeEl = ''
    }
    render(){
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeEl}${this.textEl}</svg>`
    }
    setTextEl(text, textColor){
        this.textEl = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`
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
        name: 'textColor',
        message: 'Enter the text color. Enter a keyword or hexadecimal number:',
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the shape color. Enter a keyword or hexadecimal number:',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose the shape you would like the image to be:',
        choices: ['Circle', 'Square', 'Triangle'],
    },
]

//main function to create new file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err)
        }
        console.log("Congratulations, you have generated a new logo.svg!")
    })
}

// asynchronous funtion that calls prompts and reads answers to set the properties of the svg
async function init() {
    let svgString = ""

    // Prompt the user for answers
    const answers = await inquirer.prompt(questions)

	//user text
	let user_text = ""
	if (answers.text.length > 0 && answers.text.length < 4) {

		user_text = answers.text

	} else {

		console.log("Error! Please enter 1-3 Characters for your SVG text.")
        return
	}
    // allows for custom file names based on user input
	let svg_file = `${answers.text}.svg`
    
	//set the colors and shape
	user_font_color = answers.textColor
	
	
	user_shape_color = answers.shapeColor
	
	
	user_shape_type = answers.shape
		
	//select shape based on list choices
	let user_shape

	if (user_shape_type === "Square") {
		user_shape = new Square()

	} else if (user_shape_type === "Circle") {
		user_shape = new Circle()
		
	} else if (user_shape_type === "Triangle") {
		user_shape = new Triangle()
		
	} else {
		console.log("Invalid shape!")
	}

	user_shape.setColor(user_shape_color)

	var svg = new SVG()
	svg.setTextEl(user_text, user_font_color)
	svg.setShapeEl(user_shape)
	svgString = svg.render()
	
	
	writeToFile(svg_file, svgString)
}

// call the function to set the application in motion
init()