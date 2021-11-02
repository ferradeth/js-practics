let tabs = [
    {
        header: '<img src="bear.png" class="tab-icon">Вклады',
        body: '<div><h1>Вклады Лига Банка - выгодная инвистицая в твоё будущее</h1> <ul> <li>Проценты по вкладам до 7%</li> <li>Разнообразные условия</li> <li>Возможность ежемесячной капитализации или вывод процентов на банковскую карту</li> </ul> <button>Узнать подробности</button></div><img src="img1.jpg" class="b">',
        target: 'tab-1'
    },
    {
        header: '<img src="bear.png" class="tab-icon"> Кредиты',
        body: '<div><h1>Кредиты Лига Банка - выгодная инвистицая в твоё будущее</h1> <ul> <li>Проценты по вкладам до 7%</li> <li>Разнообразные условия</li> <li>Возможность ежемесячной капитализации или вывод процентов на банковскую карту</li> </ul> <button>Узнать подробности</button></div><img src="img1.jpg" class="b">',
        target: 'tab-2'
    },
    {
        header: '<img src="bear.png" class="tab-icon"> Страхование',
        body: '<div><h1>Страхование Лига Банка - выгодная инвистицая в твоё будущее</h1> <ul> <li>Проценты по вкладам до 7%</li> <li>Разнообразные условия</li> <li>Возможность ежемесячной капитализации или вывод процентов на банковскую карту</li> </ul> <button>Узнать подробности</button></div><img src="img1.jpg" class="b">',
        target: 'tab-3'
    },
    {
        header: '<img src="bear.png" class="tab-icon"> Онлайн-сервисы',
        body: '<div><h1>Онлайн-сервисы Лига Банка - выгодная инвистицая в твоё будущее</h1> <ul> <li>Проценты по вкладам до 7%</li> <li>Разнообразные условия</li> <li>Возможность ежемесячной капитализации или вывод процентов на банковскую карту</li> </ul> <button>Узнать подробности</button></div><img src="img1.jpg" class="b">',
        target: 'tab-4'
    }
    ]
const tabHeader = document.querySelector('.tab-header')
const tabBody = document.querySelector('.tab-body')
    
tabs.forEach(tab => {
    let divHeader = document.createElement('div')
    divHeader.classList.add('tab-header_item')
    divHeader.dataset.target = tab.target
    divHeader.innerHTML = `<span>${tab.header}</span>`
    divHeader.addEventListener('click', doActiveTab )
    
    let divBody = document.createElement('div')
    divBody.classList.add('tab-body_item')
    divBody.innerHTML = `<p>${tab.body}</p>`
    divBody.id = tab.target
    
    tabHeader.append(divHeader)
    tabBody.append(divBody)
})
    
function clearTab() {
    [...tabHeader.children].forEach(item => {item.classList.remove('active')});
    [...tabBody.children].forEach(item => {item.classList.remove('active')});
}
    
function doActiveTab(e) {
    clearTab()
    let currentHeader = e.target.closest('div.tab-header_item')
    currentHeader.classList.add('active')
    
    let currentBody = document.querySelector(`#${currentHeader.dataset.target}`)
    currentBody.classList.add('active')
}