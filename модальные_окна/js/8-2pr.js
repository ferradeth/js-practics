const enter = document.querySelector('.enter')
const modal = document.querySelector('.modal-window')
const out = document.querySelector('.out')
const username = document.querySelector('.username')

if (localStorage.getItem('user')){
    document.querySelector('.username').textContent = JSON.parse(localStorage.getItem('user')).name
    enter.classList.add('hide')
    out.classList.remove('hide')
}

function openModal(){
    document.querySelector('.modal-window').classList.replace('hide', 'active')
}
enter.addEventListener('click', openModal)

function logOut(e){
    e.target.classList.add('hide')
    username.classList.add('hide') 
    localStorage.removeItem('user')
    enter.classList.remove('hide')
    login.value = ""
    pass.value = ""
}

modal.addEventListener('click', (e)=>{
    if(e.target==e.currentTarget){
        modal.classList.replace('active', 'hide')
    }
})

document.addEventListener('keydown', e=>{
    if (e.key=="Escape"){
        modal.classList.replace('active', 'hide')
    }
})

function valid(el){
    if (el.value.trim().length <=0)return true
    else return false
}

function closM(){
    modal.classList.replace('active', 'hide') 
    enter.classList.add('hide')
    out.classList.remove('hide')
    localStorage.setItem('user', JSON.stringify({name: login.value, password: pass.value}))
    username.classList.remove('hide')
    username.textContent = JSON.parse(localStorage.getItem('user')).name
    document.querySelector('.login').textContent = ""
    document.querySelector('.pass').textContent = ""
}

function closeModal(){
    if (valid(login)){
        document.querySelector('.login').textContent = 'username must contain more than 0 symbols'
        if (valid(pass))
        document.querySelector('.pass').textContent = 'password must contain more than 0 symbols'
        else document.querySelector('.pass').textContent = ""
    }
    else if (valid(pass)){
        document.querySelector('.login').textContent = ""
        document.querySelector('.pass').textContent = 'password must contain more than 0 symbols'
    }
    else closM()
}

