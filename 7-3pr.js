const aniCells = document.querySelectorAll('.animal')
const images = document.querySelectorAll('.animal-img')
const cellsPred = document.querySelectorAll('.cell')

let dragItem = null
images.forEach(cell=>{
    cell.addEventListener('dragstart', dragstart)
    cell.addEventListener('dragend', dragend)
})

cellsPred.forEach(cell => {
    //cell.addEventListener('dragenter', dragenter)
    //cell.addEventListener('dragleave', dragleave)
    cell.addEventListener('dragover', dragover)
    cell.addEventListener('drop', drop)
});

aniCells.forEach(cell => {
    cell.addEventListener('dragover', dragover)
    cell.addEventListener('drop', dropBack)
});

function dragstart(e) {
    dragItem = e.target;
    setTimeout(() => {e.target.style.display = 'none';}, 0);
    // e.target.classList.remove('true');
};

function dragend(e) {
    e.target.style.display = '';
};

function dragover(e) {
    e.preventDefault();
};

// function dragenter(e){
//     if(dragItem.dataset.role == 'predator' && e.target.tagName !== 'IMG') {
//         e.target.classList.add('true')
//     }
// }

// function dragleave(e){
//     e.target.classList.remove('true')
// }
let i = 0

function drop(e) {
    e.preventDefault();
    if(dragItem.dataset.role == 'predator' && e.target.tagName !== 'IMG') {
        //e.target.classList.add('true')
        e.target.append(dragItem)
        i++
    }
    // else if(e.target.tagName !== 'IMG') {
    //     e.target.append(dragItem)
    // }
    
    amount.textContent = `Кол-во найденных хищников: ${i}`
};

function dropBack(e) {
    e.preventDefault();
    if(e.target.tagName !== 'IMG'){
        e.target.append(dragItem)
        i--
    }
   
    amount.textContent = `Кол-во найденных хищников: ${i}`
};