// Get the selector toggle
const toggle = document.getElementById('slider')

/**
 * Get all the elements that need to be styled
 */
const container = document.querySelector('.container')
const calculator = document.querySelector('.calculator')
const nav = document.querySelector('.theme')
const screen = document.querySelector('.screen')
const input = document.querySelector('.input')
const numbers = document.querySelectorAll('.number')
const del = document.querySelector('.del')
const plus = document.querySelector('.plus')
const minus = document.querySelector('.minus')
const decimal = document.querySelector('.decimal')
const divide = document.querySelector('.divide')
const multiply = document.querySelector('.multiply')
const reset = document.querySelector('.reset')
const equals = document.querySelector('.equals')
const calcTitle = document.querySelector('.calcTitle')
const themeText = document.querySelector('.theme-text')
const sliderLabel = document.querySelector('.slider-label')

const regularButtons =  [...numbers, multiply, minus, divide, decimal, plus]
const delResetButtons = [del, reset]

/**
 * First style
 */
const firstMainBackground = '#3a4764'
const firstToggleBackground = '#232c43'
const firstScreenBackground = '#182034'

const firstDelResetBackground = '#637097'
const firstDelResetShadow = '#404e72' 

const firstEqualsBackground = '#d03f2f'
const firstEqualsShadow = '#93261a'

const firstNumberKeyBackground = '#eae3dc'
const firstNumberKeyShadow = '#b4a597'

const firstNumberTextColor = '#444b5a'
const firstDelResetTextColor = '#fff'

/**
 * Second Style
 */
 const secondMainBackground = '#e6e6e6'
 const secondToggleBackground = '#d1cccc'
 const secondScreenBackground = '#ededed'
 
 const secondDelResetBackground = '#377f86'
 const secondDelResetShadow = '#1b5f65' 
 
 const secondEqualsBackground = '#ca5502'
 const secondEqualsShadow = '#893901'
 
 const secondNumberKeyBackground = '#e5e4e1'
 const secondNumberKeyShadow = '#a69d91'
 
 const secondNumberTextColor = '#35352c'
 const secondDelResetTextColor = '#fff'



/**
 * Third style
 */
 const thirdMainBackground = '#160628'
 const thirdToggleBackground = '#1d0934'
 const thirdScreenBackground = '##1d0934'
 
 const thirdDelResetBackground = '#58077d'
 const thirdDelResetShadow = '#bc15f4' 
 
 const thirdEqualsBackground = '#00e0d1'
 const thirdEqualsShadow = '#6cf9f2'
 
 const thirdNumberKeyBackground = '#341c4f'
 const thirdNumberKeyShadow = '#871c9c'
 
 const thirdNumberTextColor = '#ffe53d'
 const thirdDelResetTextColor = '#fff'
 const thirdEqualsTextColor = '#1b2428'


/**
 * Toggle the theme
 */
const determineTheme = () => {

    if(toggle.value == 1) {

        container.style.backgroundColor = firstMainBackground
        toggle.style.backgroundColor = firstToggleBackground
        calcTitle.style.color = 'white'
        themeText.style.color = 'white'
        sliderLabel.style.color = 'white'
        equals.style.color = 'white'
        reset.style.color = 'white'
        del.style.color = 'white'
        regularButtons.forEach((button) => {
            button.style.color = firstNumberTextColor
            button.style.backgroundColor = firstNumberKeyBackground
            button.style.boxShadow = `0px 5px 0px ${firstNumberKeyShadow}`
        })
        delResetButtons.forEach((button) => {
            button.style.color = firstDelResetTextColor
            button.style.backgroundColor = firstDelResetBackground
            button.style.boxShadow = `0px 5px 0px ${firstDelResetShadow}`
        })
        screen.style.backgroundColor = firstScreenBackground
        screen.style.color = 'white'
        input.style.backgroundColor = firstToggleBackground
        equals.style.backgroundColor = firstEqualsBackground
        equals.style.boxShadow = `0px 5px 0px ${firstEqualsShadow}`

    } else if (toggle.value == 2) {

        container.style.backgroundColor = secondMainBackground
        toggle.style.backgroundColor = secondToggleBackground
        calcTitle.style.color = secondNumberTextColor
        themeText.style.color = secondNumberTextColor
        sliderLabel.style.color = secondNumberTextColor
        equals.style.color = 'white'
        reset.style.color = 'white'
        del.style.color = 'white'
        regularButtons.forEach((button) => {
            button.style.color = secondNumberTextColor
            button.style.backgroundColor = secondNumberKeyBackground
            button.style.boxShadow = `0px 5px 0px ${secondNumberKeyShadow}`
        })
        delResetButtons.forEach((button) => {
            button.style.color = secondDelResetTextColor
            button.style.backgroundColor = secondDelResetBackground
            button.style.boxShadow = `0px 5px 0px ${secondDelResetShadow}`
        })
        screen.style.backgroundColor = secondScreenBackground
        screen.style.color = secondNumberTextColor
        input.style.backgroundColor = secondToggleBackground
        del.style.backgroundColor = secondDelResetBackground
        reset.style.backgroundColor = secondDelResetBackground
        equals.style.backgroundColor = secondEqualsBackground
        equals.style.color = 'white'
        equals.style.boxShadow = `0px 5px 0px ${secondEqualsShadow}`
    
    } else if (toggle.value == 3) {

        container.style.backgroundColor = thirdMainBackground
        toggle.style.backgroundColor = thirdToggleBackground
        calcTitle.style.color = thirdNumberTextColor
        themeText.style.color = thirdNumberTextColor
        sliderLabel.style.color = thirdNumberTextColor
        equals.style.color = thirdEqualsTextColor
        reset.style.color = 'white'
        del.style.color = 'white'
        regularButtons.forEach((button) => {
            button.style.color = thirdNumberTextColor
            button.style.backgroundColor = thirdNumberKeyBackground
            button.style.boxShadow = `0px 5px 0px ${thirdNumberKeyShadow}`
        })
        delResetButtons.forEach((button) => {
            button.style.color = thirdDelResetTextColor
            button.style.backgroundColor = thirdDelResetBackground
            button.style.boxShadow = `0px 5px 0px ${thirdDelResetShadow}`
        })
        screen.style.backgroundColor = thirdToggleBackground
        screen.style.color = thirdNumberTextColor
        input.style.backgroundColor = thirdToggleBackground
        del.style.backgroundColor = thirdDelResetBackground
        reset.style.backgroundColor = thirdDelResetBackground
        equals.style.backgroundColor = thirdEqualsBackground
        equals.style.color = thirdEqualsTextColor
        equals.style.boxShadow = `0px 5px 0px ${thirdEqualsShadow}`
    }
}

/**
 * on load choose theme
 */
window.addEventListener('load', determineTheme)
toggle.addEventListener('change', determineTheme)