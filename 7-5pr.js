let dragItems = document.querySelectorAll('.draggable')
let dropZones = document.querySelectorAll('.dropzone')

dragItems.forEach(item => {
    item.addEventListener('dragstart', dragStart)
    item.addEventListener('dragend', dragEnd)
})
let dragItem = null


dropZones.forEach(zone => {
    zone.addEventListener('dragover', dragOver)
    zone.addEventListener('dragenter', dragEnter)
    zone.addEventListener('drop', dragDrop)
    zone.addEventListener('dragleave', dragLeave)
})

function dragStart(e) {
    dragItem = e.target
    e.target.classList.add('drag-start')
    setTimeout(() => {e.target.style.display = 'none';}, 0)
}

function dragEnd(e) {
    e.target.classList.remove('drag-start')
    e.target.style.display = ''
}

function dragEnter(e) {
    e.preventDefault()
    e.target.classList.add('drop-enter')
}

function dragOver(e) {
    e.preventDefault()
}

function dragLeave(e) {
    e.preventDefault()
    e.target.classList.remove('drop-enter')
}

function dragDrop(e) {
    e.preventDefault()
    e.target.classList.remove('drop-enter')
    e.target.prepend(dragItem)
    if (e.target.dataset.place=='done')
    dragItem.classList.add('done')
}
current = document.querySelector('.current')

btn.addEventListener('click', function() {
    let el = document.createElement('p')
    let txt = document.querySelector('#inText').value
    el.textContent = txt
    el.draggable = 'true'
    current.append(el)
    el.addEventListener('dragstart', dragStart)
    el.addEventListener('dragend', dragEnd)
})