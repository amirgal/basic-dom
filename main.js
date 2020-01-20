
const moveRight = function(){
    let block = document.getElementById("block")
    let left = parseInt(block.style.left) || 0    // will parse a number, or return 0 if it can't parse
    left = left +15
    block.style.left = left+'px'
  }
  