let levelClicks = 0;
let typeClicks = 0;
let teachClicks = 0;

function accordeonL() {
    if (levelClicks % 2 == 0) {
        document.querySelector('.sec-6__filter-pointsL').style.display = 'none';
    }
    else {
        document.querySelector('.sec-6__filter-pointsL').style.display = 'block';
    }
    levelClicks += 1;
}

function accordeonT() {
    if (typeClicks % 2 == 0) {
        document.querySelector('.sec-6__filter-pointsT').style.display = 'none';
    }
    else {
        document.querySelector('.sec-6__filter-pointsT').style.display = 'block';
    }
    typeClicks += 1;
}

function accordeonI() {
    if (teachClicks % 2 == 0) {
        document.querySelector('.sec-6__filter-pointsI').style.display = 'none';
    }
    else {
        document.querySelector('.sec-6__filter-pointsI').style.display = 'block';
    }
    teachClicks += 1;
}