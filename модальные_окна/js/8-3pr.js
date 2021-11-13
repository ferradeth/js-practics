let cards = [
    {
        id: "1",
        head: "JAEHYUN & TAEYOUNG",
        body: "",
        image: "img/img1.png"
    },
    {
        id: "2",
        head: "JAEHYUN & MARK",
        body: "",
        image: "img/img2.jpg"
    },
    {
        id: "3",
        head: "JAEHYUN & JOHNNY",
        body: "",
        image: "img/img3.jpg"
    },
    {
        id: "4",
        head: "JAEHYUN & WINWIN",
        body: " 1 version",
        image: "img/img4.jpg"
    }, 
    {
        id: "5",
        head: "JAEHYUN & WINWIN",
        body: "2 version",
        image: "img/img5.png"
    },
    {
        id: "6",
        head: "JAEHYUN & JOHNNY",
        body: "",
        image: "img/img6.jpg"
    },
]

const cont = document.querySelector('.cards')
const modal = document.querySelector('.modal-wrapper')
const openModal = document.querySelector('.card-modal')
const butClose = document.querySelector('.modal-close')

let count = 1

createManyCards(cards, cont)

function createManyCards(array, cont) {
    array.forEach(item => {
        cont.insertAdjacentHTML('beforeend', createCard(item))
    })
}

function createCard({image, head, id}) {
    return `
        <div class="img" id="${id}">
            <img src="${image}"" alt="${head}">
        </div>
    `
}

modal.addEventListener('click', (e) => {
    if(e.target == e.currentTarget) {
        closeW()
    }
})

document.addEventListener('keydown', (e) => {
    if(e.code == 'Escape') {
        closeW()
    }
})

function left (){
    if(count>1) {
            count--
           
        }
        else {
            count=cards.length
        }
    showModal(count)
}

function right (){
    if (count < cards.length){
            count++
        }
        else {
            count = 1
        } 
    showModal(count)
}
document.addEventListener('keyup', (e) => {
    if(e.code == 'ArrowLeft') {
        left()
    }
    if (e.code == 'ArrowRight'){
        right()
    }
})

// document.getElementById('left'),addEventListener('click', left)
// document.getElementById('right'),addEventListener('click', right)
//если я их добавляю у меня перестаёт даже крестик кликаться(( не знаю в чём проблема

document.querySelectorAll('.img').forEach((elem)=> {
    elem.addEventListener('click', (e)=>{
        count=e.currentTarget.id
        showModal(count)
    })
})

function showModal(count){
    modal.classList.replace('hide', 'active')
    let card = cards.find(el => el.id == count)
    document.querySelector('.modal-top > img').src = card.image
    document.querySelector('.card-title').textContent = card.head
    document.querySelector('.card-text').textContent = card.body
}

document.querySelector('.modal-close').addEventListener('click', ()=>closeW())

function closeW(){
    modal.classList.replace('active', 'hide')
}
