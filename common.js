//brand 아이콘 반복

const brandBox = document.querySelector('.brand_box'),
    imgP = ['uk_brand_logo01.jpg',
        'uk_brand_logo02.jpg',
        'uk_brand_logo03.jpg',
        'uk_brand_logo04.jpg',
        'uk_brand_logo05.jpg',
        'uk_brand_logo06.jpg'
    ];

for (let i = 0; i < 6; i++) {

    let logoIcon = document.createElement('div')
    logoIcon.classList.add('logo_icon')

    let img = document.createElement('img')
    let idx = i % imgP.length;
    let imgUrl = `./img/${imgP[idx]}`

    img.src = imgUrl;
    img.alt = `uk_brand${idx + 1}`

    logoIcon.appendChild(img);
    brandBox.appendChild(logoIcon);
}


//Awards 아이콘 반복

const AwardsBox = document.querySelector('.awards_cont'),
    imgA = ['awards_logo01.jpg',
        'awards_logo02.jpg',
        'awards_logo03.jpg',
        'awards_logo04.jpg',
        'awards_logo05.jpg',
        'awards_logo06.jpg',
        'awards_logo07.jpg',
        'awards_logo08.jpg',
    ];

for (let j = 0; j < 8; j++) {

    let awardIcon = document.createElement('div');
    awardIcon.classList.add('awards_icon')

    let img = document.createElement('img')
    let idx = j % imgA.length;
    let imgUrl = `./img/${imgA[idx]}`

    img.src = imgUrl;
    img.alt = `uk_award${idx + 1}`

    awardIcon.appendChild(img);
    AwardsBox.appendChild(awardIcon);

}


//버거 메뉴

const berger = document.querySelector('.nav_berger');
const navBack = document.querySelector('.nav_back');

berger.onclick = function () {
    berger.classList.toggle('active');
    navBack.classList.toggle('active');
}


//헤더 스크롤

const navMenu = document.querySelector('.nav_menu');

window.addEventListener("scroll", function () {

    if (window.scrollY > 0) {
        navMenu.classList.add('active')
    } else {
        navMenu.classList.remove('active')
    }

});
