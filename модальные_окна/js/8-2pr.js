document.querySelector('.username').textContent = JSON.parse(localStorage.getItem('user')).name

if (localStorage.getItem('user').name !== null){
    document.querySelector('.enter').classList.add('hide')
    document.querySelector('.out').classList.remove('hide')
}

let modal = document.querySelector('.modal-window')

function openModal(){
    modal.classList.replace('hide', 'active')
}

function logOut(e){
    e.target.classList.add('hide')
    document.querySelector('.username').classList.add('hide') 
    localStorage.removeItem('user')
    document.querySelector('.enter').classList.remove('hide')
}

function closeModal(){
    modal.classList.replace('active', 'hide')
    document.querySelector('.enter').classList.add('hide')
    document.querySelector('.out').classList.remove('hide')
    localStorage.setItem('user', JSON.stringify({name: login.value, password: pass.value}))
    document.querySelector('.username').classList.remove('hide')
    document.querySelector('.username').textContent = JSON.parse(localStorage.getItem('user')).name
}

