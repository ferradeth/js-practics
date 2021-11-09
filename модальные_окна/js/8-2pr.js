
const modal = document.querySelector('.modal-window')

if (localStorage.getItem('user')){
    document.querySelector('.username').textContent = JSON.parse(localStorage.getItem('user')).name
    document.querySelector('.enter').classList.add('hide')
    document.querySelector('.out').classList.remove('hide')
}

function openModal(){
    document.querySelector('.modal-window').classList.replace('hide', 'active')
}
document.querySelector('.enter').addEventListener('click', openModal)

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

