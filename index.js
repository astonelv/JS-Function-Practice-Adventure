// Your Code Here
function start() {
    let firstAnswer = window.prompt('Do you head left, or right?')
    if(firstAnswer === 'left'){
        goLeft() 
    } else if(firstAnswer === 'right') {
        goRight()
    }
    
}

function goLeft() {
    if(firstAnswer === 'left') {
        let secondAnswer = window.prompt(`You come across a stray cat. It scampers off down a small hole, just large enough for you to crawl through. Do you follow it, or continue on your path?`)
        if(secondAnswer === 'back') {
            start()
        }
}

function goRight() {
    if(firstAnswer === 'right') {
        let secondAnswer = window.prompt(`You come across a snoring dragon. On the other side of him, you see a shiny chest of treasure. Another path would lead you from the dragon all together. Which do you take?`)
        if(secondAnswer === 'right') {
            start()
        }
    }
}
}