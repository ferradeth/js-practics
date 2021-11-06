const aniCells = document.querySelectorAll('.animal')
const images = document.querySelectorAll('.animal-img')
const cellsPred = document.querySelectorAll('.cell')

let dragItem = null
let count = cellsPred.length
let dragSource = null

images.forEach(cell=>{
    cell.addEventListener('dragstart', dragstart)
    cell.addEventListener('dragend', dragend)
})

cellsPred.forEach(cell => {
    //cell.addEventListener('dragenter', dragenter)
    //cell.addEventListener('dragleave', dragleave)
    cell.addEventListener('dragover', dragover)
    cell.addEventListener('drop', drop)
})

aniCells.forEach(cell => {
    cell.addEventListener('dragover', dragover)
    cell.addEventListener('drop', dropBack)
})

function dragstart(e) {
    dragItem = e.target;
    dragSource = e.target.closest('.cell')
    setTimeout(() => {e.target.style.display = 'none';}, 0)
    // e.target.classList.remove('true')
}

function dragend(e) {
    e.target.style.display = ''
}

function dragover(e) {
    e.preventDefault()
}

//let i = 0

function drop(e) {
    e.preventDefault();
    if( e.target.tagName !== 'IMG') {
        //e.target.classList.add('true')
        e.target.append(dragItem)
        //i++
        if(dragItem.dataset.role == 'predator') 
            changeStyle(dragSource, e.target.closest('.cell'), 'true')
    }
    // else if(e.target.tagName !== 'IMG') {
    //     e.target.append(dragItem)
    // }
    //amount.textContent = `Кол-во найденных хищников: ${i}`
}

function dropBack(e) {
    e.preventDefault();
    changeStyle(dragSource, e.target.closest('.cell'), 'true')
    if(e.target.tagName !== 'IMG'){
        e.target.append(dragItem)
        //i--
    }
   
    //amount.textContent = `Кол-во найденных хищников: ${i}`
}

function changeStyle(elSource, elRes, classRes){
    if(elRes != null) elRes.classList.add(classRes)
    if(elSource != null) elSource.classList.remove(classRes)
}