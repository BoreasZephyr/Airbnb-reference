const header = document.querySelector('#header');
const covidText = document.querySelector('.covid-info-text');
const headerNav = document.querySelector('.header-nav');
const headerLogolink = document.querySelector('.header-logo-link')
const headerNavChoice = document.querySelector('.header-nav-choice');
const headerUsernav = document.querySelector('.header-user-nav');
const headerUsernavMenu = document.querySelector('.header-user-nav-menu');
const headerSearch = document.querySelector('.header-search');
const headerSearchinput = document.querySelector('.header-search-location__input');
const headerSearchlists = document.querySelectorAll('.header-search-list');
const lastheaderSearch = document.getElementById('last-header-search-list');
const headerSearchbtn = document.querySelector('.header-search__btn');
const headerUserbtns = document.querySelectorAll('.header-user__btn')


function changeHeader(){
    let scrollY = this.scrollY;
    if(scrollY >=10){
        header.classList.add('small')
        covidText.classList.add('hidden')
        headerLogolink.classList.add('red')
        headerNav.classList.add('small')
        headerNavChoice.classList.add('hidden')
        headerSearch.classList.add('small')
        for(let headerUserbtn of headerUserbtns){
            headerUserbtn.classList.add('black')
        }
        for(const headerSearchlist of headerSearchlists){
            headerSearchlist.style.display = 'none'
        }
        headerSearch.innerHTML = `<div class="header-search-placeholder">Bắt đầu tìm kiếm</div>
        <div class="header-search__btn-wrap">
        <button class="header-search__btn">
            <i class="header-search-icon fas fa-search"></i>
        </button>
    </div>`
    let headerSearchbtn = document.querySelector('.header-search__btn');
    headerSearchbtn.style.width = '32px'
    headerSearchbtn.style.height = '32px'

    }
    else{
        header.classList.remove('small')
        covidText.classList.remove('hidden')
        headerLogolink.classList.remove('red')
        headerNav.classList.remove('small')
        headerNavChoice.classList.remove('hidden')
        headerSearch.classList.remove('small')
        for(let headerUserbtn of headerUserbtns){
            headerUserbtn.classList.remove('black')
        }
        for(const headerSearchlist of headerSearchlists){
            headerSearchlist.style.display = 'block'
        }
        headerSearch.innerHTML = `<ul class="header-search-location header-search-list">
        <li class="header-search-heading header-search-location-heading">Địa điểm</li>
        <li class="header-search-location__li">
            <input type="text" class="header-search-location__input" placeholder="Bạn sắp đi đâu?">
        </li>
    </ul>
    <ul class="header-search-check-in header-search-list">
        <li class="header-search-heading header-search-check-in-heading">Nhận phòng</li>
        <li class="header-search-check-in-placeholder">Thêm ngày</li>
    </ul>
    <ul class="header-search-check-out header-search-list">
        <li class="header-search-heading header-search-check-out-heading">Trả phòng</li>
        <li class="header-search-check-out-placeholder">Thêm ngày</li>
    </ul>
    <div id="last-header-search-list" class="header-search-customer header-search-list">
        <ul class="">
            <li class="header-search-heading header-search-customer-heading">Khách</li>
            <li class="header-search-customer-placeholder">Thêm khách</li>
        </ul>
        <div class="header-search__btn-wrap">
            <button class="header-search__btn">
                <i class="header-search-icon fas fa-search"></i>
            </button>
        </div>
    </div>`
    }
}
function showhideHeadernavMenu(){
    if(headerUsernavMenu.hasAttribute('style') == false){
        headerUsernavMenu.style.display = 'block'
    }
    else{
        headerUsernavMenu.removeAttribute('style')
    }
}
var headerNavisClicked = false;
function checkheaderNav(){
    headerNavisClicked = true;
}

headerUsernav.addEventListener('click', checkheaderNav)
window.addEventListener('click', function(){
    if(headerNavisClicked == true){
        if(headerUsernavMenu.hasAttribute('style')){
            headerUsernavMenu.removeAttribute('style')
        }
        else{
            headerUsernavMenu.style.display = 'block'
        }
        headerNavisClicked = false
    }
    else{
        if(headerUsernavMenu.hasAttribute('style')){
            headerUsernavMenu.removeAttribute('style')
        }
    }
})
window.addEventListener('scroll', changeHeader)
headerSearchbtn.addEventListener('mouseover', function(){
    lastheaderSearch.style.backgroundColor = "white";
})
headerSearchbtn.addEventListener('mouseleave', function(){
    lastheaderSearch.removeAttribute('style')
})
for(var i = 0; i < headerSearchlists.length; i++){
    (function(index){
        headerSearchlists[i].onclick = function(){
            for(var j = 0; j < headerSearchlists.length; j++){
                if(j === index){
                    headerSearchlists[j].classList.add('selected')
                    headerSearch.classList.add('gray')
                }
                else{
                    headerSearchlists[j].classList.remove('selected')
                }
            }
        }    
    })(i);
}