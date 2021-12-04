const displayableKeys = document.querySelectorAll('.display')
const screen1 = document.querySelector('.screen')
const reset1 = document.querySelector('.reset')
const del1 = document.querySelector('.del')
const equals1 = document.querySelector('.equals')

reset1.addEventListener('click', () => {
    screen1.innerHTML = ''
})

del1.addEventListener('click', () => {
    let text = ''
    for(let i = 0; i < screen1.innerHTML.length - 1; i++) {
        text += screen1.innerHTML[i]
    }
    screen1.innerHTML = text
})

displayableKeys.forEach((key) => {
    key.addEventListener('click', () => {
        screen1.innerHTML += key.innerHTML
    })
})

const evaluate = () => {
    const expression = screen1.innerHTML.toString()
    const answer = math.evaluate(expression)
    screen.innerHTML = answer
}

equals1.addEventListener('click', evaluate)