let tabs = [
    {
        header: 'Sticker',
        body: '<img src="fortabs1.jpg" class="b">',
        target: 'tab-1'
    },
    {
        header: 'JONNHY FAVOTITE',
        body: '<img src="fortabs2.jpg" class="b">',
        //target: 'tab-2'
    },
    {
        header: 'NCT 127 FAVORITE',
        body: '<img src="fortabs3.jpg" class="b">',
        //target: 'tab-3'
    },
    {
        header: 'radio',
        body: '<img src="fortabs4.jpg" class="b">',
        //target: 'tab-4'
    }
    ]
const tabHeader = document.querySelector('.tab-header')
//const tabBody = document.querySelector('.tab-body')
const tabBodyItem = document.querySelector('.tab-body_item')
    
let i=0;
tabs.forEach(tab => {
    let divHeader = createElement('div', ['tab-header_item'], `<span>${tab.header}</span>`) 
    //divHeader.dataset.target = tab.target
    divHeader.dataset.target = i
    divHeader.addEventListener('click', doActiveTab )
    
    // let divBody = createElement('div', ['tab-body_item'],`<p>${tab.body}</p>`)
    // divBody.id = tab.target
    
    tabHeader.append(divHeader)
    //tabBody.append(divBody)
    i++
})

start()

function start (){
    tabHeader.firstChild.classList.add('active');
    tabBodyItem.innerHTML = `${tabs[0].body}`
}

function createElement(el, classes, template){
    let element = document.createElement(el)
    element.classList.add(...classes)
    element.innerHTML = template
    return element
}
    
function clearTab() {
    [...tabHeader.children].forEach(item => {item.classList.remove('active')});
    //[...tabBody.children].forEach(item => {item.classList.remove('active')});
}
    
function doActiveTab(e) {
    clearTab()
    let currentHeader = e.target.closest('div.tab-header_item')
    currentHeader.classList.add('active')
    
    //let currentBody = tabs.find(item=>item.target === currentHeader.dataset.target)
    let currentBody = tabs[currentHeader.dataset.target]
    tabBodyItem.innerHTML = `<p>${currentBody.body}</p>`
    // let currentBody = document.querySelector(`#${currentHeader.dataset.target}`)
    // currentBody.classList.add('active')
}