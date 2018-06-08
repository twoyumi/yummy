var restaurants = [
    '잇츠 돈가스',
    '하루 한상',
    '두레국수',
    '마포숯불갈비',
    '봉산집',
    '새마을식당',
    '양철집',
    '돌곰네',
    '용객잔닭발',
    '10',
];

var total = restaurants.length;

var listEl = document.getElementById('list');

var i = 0;
while(i < total){
    var pEl = document.createElement('p');
    pEl.classList.add('restaurant');
    pEl.innerText = restaurants[i];
    listEl.appendChild(pEl);
    i = i+1
}

function clicked(){
    var seleted = Math.floor(Math.random()*total);

    // var restaurantEls = document.getElementsByClassName('restaurant');
    var restaurantEls = listEl.children;

    var i = 0;
    while(i < total) {
        restaurantEls[i].classList.remove('selected');
        i = i + 1;
    }

    restaurantEls[seleted].classList.add('selected');
}
