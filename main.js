const header = document.createElement("h1")
header.innerHTML = "The Best Game Ever"
header.style.color = "#c0392b"
header.style.fontFamily = "Helvetica"
document.body.appendChild(header)
header.setAttribute("class", "my-header")

const subHeader = document.createElement('h2')
subHeader.innerHTML = 'Game by : Amir Gal'
subHeader.setAttribute('class', 'subhead')
document.body.appendChild(subHeader)

const block = document.getElementById("block")

const moveBlock = function(direction) {
    switch (direction){
        case 'right':
            let newLeft = parseInt(block.style.left) || 0   
            if(newLeft > 400) {break}
            newLeft += 15
            block.style.left = newLeft+'px'
            break
        case 'left': 
            let newRight = parseInt(block.style.left) || 0    
            if(newRight < 15) {break}
            newRight -= 15
            block.style.left = newRight+'px'
            break
        case 'down':
            let newDown = parseInt(block.style.top) || 0
            if(newDown > 380) {break}
            newDown += 15
            block.style.top = newDown+'px'
            break
        case 'up':
            let newUp = parseInt(block.style.top) || 0
            if(newUp < 15) {break}
            newUp -= 15
            block.style.top = newUp+'px'
            break
    }
}

block.onclick = function() {
    block.style.backgroundColor = '#8e44ad'
}

const addItem = function() {
    let newListItem = document.createElement("li")
    newListItem.innerHTML = "A New Item!"
    document.getElementById('list').appendChild(newListItem)
}

const enterColor = function () {
    box.style.backgroundColor = "#c0392b"
    
}

const leaveColor = function () {
    box.style.backgroundColor = "#1abc9c"
    
}

const arrows = document.getElementsByClassName('arrow')
for (let arrow of arrows) {
    arrow.onmouseenter = function() {
        arrow.style.backgroundColor = "turquoise"
    }
    arrow.onmouseleave = function() {
        arrow.style.backgroundColor = ""
    }
}

const rightArrow = document.getElementById('right')
const leftArrow = document.getElementById('left')
const upArrow = document.getElementById('up')
const downArrow = document.getElementById('down')

rightArrow.onclick = () => moveBlock('right')
leftArrow.onclick = () => moveBlock('left')
upArrow.onclick = () => moveBlock('up')
downArrow.onclick = () => moveBlock('down')