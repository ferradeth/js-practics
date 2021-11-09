let cards = [
    {
        id: "1",
        head: "JAEHYUN & TAEYOUNG",
        body: "Jaehyun looks at him and smiles sleepily, stuck in the doorway as he tries to squeeze into the crowded lecture hall. Taeyong's heart sinks. It hits the chest, threatening to break the ribs, and it doesn't seem to knock anymore. And Taeyong is not at all scared to die like this, looking into someone's sunny-warm eyes with dozens of wrinkled rays radiating from the corners. But, apparently, fate has other plans, because the next moment he is dragged aside, clinging to the soft sleeve of a pale pink, to match his hair, hoodie. Taeyeon re-learns to breathe and persuades his heart to beat, because without him Taeyong is unlikely to succeed, and he suddenly found the meaning of life in the strong-willed features of someone else's beautiful face and soft, sculpted with special tenderness, dimples on his cheeks.",
        image: "img/img1.png"
    },
    {
        id: "2",
        head: "JAEHYUN & MARK",
        body: "Mark doesn't have a day since the morning: getting out of bed, he immediately stumbles over a pile of books, which he has safely forgotten since last evening (like preparing for exams), for breakfast you get not toasts, but two square coals, but coffee, of course , must have burned the tongue, so much so that the stamp does not go down the throat until the evening; and during the day, the teacher still calls, dripping on the minds of his minhyun, you are the headman, what a mess, because in the group they have an eternal mess, for which only he should be responsible. Mark looks gloomily at the nasty weather outside the window, trying to get rid of this all, but, apparently, the end of the week, instead of a pleasant feeling of relative relaxation, decided to bring a feeling of relative fuck, everybody.",
        image: "img/img2.jpg"
    },
    {
        id: "3",
        head: "JAEHYUN & JOHNNY",
        body: "Actually, Jaehyun doesn't like the outskirts. He does not like abandoned warehouses, does not like age-old dust floating in patches of light, does not like decrepit steps, heaps of rubbish in the corners and iron beams. Jaehyun loves comfortable sleeping areas and quiet streets in the old city. He loves morning parks and fresh air.But at work nobody cares about it. At work, he is given the address of point A, in which he must pick up the documents, and the address of point B, to which he must take these same documents. In fact, Jaehyun is familiar with the destination, much better than he would like. But he still stubbornly pushes the address into the navigator and listens to the monotonous “after 200 meters, turn right”, “after three hundred meters, take to the left, to the junction” in the earpiece, while neatly laying bends on a snow-white motorcycle. The wind blows coolness under the jacket, and Jaehyun involuntarily thinks that the white skin and silver rivets will surely be covered with a thin layer of omnipresent dust in that place.",
        image: "img/img3.jpg"
    }    
]

let cardsCont = document.querySelector('.cards')
createManyCards(cards, cardsCont)

rewind.addEventListener('click',()=> {
    cardsCont.innerHTML = ""
    localStorage.clear()
    localEnter(cards)
    createManyCards(cards, cardsCont)
})

function createManyCards(array, cont){
    array.forEach(item=>{
        if (localStorage.getItem(`${item.id}`))
        cont.insertAdjacentHTML('beforeend', localStorage.getItem(`${item.id}`)) 
    })
}

function localEnter(array){
    array.forEach(item=>{
        localStorage.setItem(`${item.id}`, createCard(item))
    })
}


function createCard({image, head, body, id}){
    return `
        <article class="card" id="${id}">
            <img src="${image}"" alt="${head}">
            <h2>${head}</h2>
            <p>${cropText(body)}</p>
            <div class="btns">
                <button class="btn1" onclick="deleteCard(event)">Убрать</button>
                <button class="btn2">Подробнее</button>
            </div>
        </article>
    `
}

let modal = document.querySelector('.modal-wrapper')

function cropText(text, length = 150){
    return text.substr(0, length)+"..."
}

document.querySelectorAll('.btn2').forEach(but=>{
    but.addEventListener('click', (e)=> {
        showCard(cards, e)
        modal.classList.replace('hide', 'active')
})
})

function deleteCard(e){
    e.target.closest('.card').remove()
    localStorage.removeItem(`${e.target.closest('.card').id}`)
}

document.addEventListener('keydown', e=>{
    if (e.key=="Escape"){
        closeW()
    }
})

modal.addEventListener('click', (e)=>{
    if(e.target==e.currentTarget){
        closeW()
    }
})
document.querySelector('.modal-close').addEventListener('click', ()=>closeW())

function closeW(){
    modal.classList.replace('active', 'hide')
}
function showCard(array, e){
    let card = array.find(el=>el.id==e.target.closest('.card').id)
    document.querySelector('.modal-left>img').src  = card.image
    document.querySelector('.modal-right> .card-title').textContent  = card.head
    document.querySelector('.modal-right> .card-text').textContent  = card.body
}