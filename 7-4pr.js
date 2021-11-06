let pieces = document.querySelectorAll('.piece')
let cells = document.querySelectorAll('.cell')
console.log(pieces)

let dragItem = null
let dragSource = null

pieces.forEach(img=>{
    img.addEventListener('dragstart', dragstart)
    img.addEventListener('dragend', dragend)
})

cells.forEach(cell => {
    cell.addEventListener('dragover', dragover)
    cell.addEventListener('drop', drop)
})

let count = 0
function dragstart(e) {
    dragItem = e.target;
    setTimeout(() => {e.target.style.display = 'none';}, 0)
}

function dragend(e) {
    e.target.style.display = ''
}

function dragover(e) {
    e.preventDefault()
}


function drop(e) {
    e.preventDefault();
    e.target.append(dragItem)
    if (e.target.dataset.number == dragItem.dataset.number){
        count++
    }
    if (count==6)
    res.textContent = "ЗАДАЧА РЕШЕНА"
}
