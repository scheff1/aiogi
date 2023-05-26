let cards = document.querySelectorAll('.sec-6__lesson');

function checkbeg() {
    cards.forEach( elem => {
        elem.classList.remove('hide');
        if ((elem.classList.contains('med')) || (elem.classList.contains('high'))) {
            elem.classList.add('hide');
        }
    });
}

function checkmed() {
    cards.forEach( elem => {
        elem.classList.remove('hide');
        if ((elem.classList.contains('beg')) || (elem.classList.contains('high'))) {
            elem.classList.add('hide');
        }
    });
}

function checkhigh() {
    cards.forEach( elem => {
        elem.classList.remove('hide');
        if ((elem.classList.contains('beg')) || (elem.classList.contains('med'))) {
            elem.classList.add('hide');
        }
    });
}

function checkkundal() {
    cards.forEach( elem => {
        elem.classList.remove('hide');
        if (elem.classList.contains('hatha')) {
            elem.classList.add('hide');
        }
    });
}

function checkhatha() {
    cards.forEach( elem => {
        elem.classList.remove('hide');
        if (elem.classList.contains('kundal')) {
            elem.classList.add('hide');
        }
    });
}

function checkrez() {
    cards.forEach( elem => {
        elem.classList.remove('hide');
        if ((elem.classList.contains('olga')) || (elem.classList.contains('step')) || (elem.classList.contains('marina'))) {
            elem.classList.add('hide');
        }
    });
}

function checkolga() {
    cards.forEach( elem => {
        elem.classList.remove('hide');
        if ((elem.classList.contains('rez')) || (elem.classList.contains('step')) || (elem.classList.contains('marina'))) {
            elem.classList.add('hide');
        }
    });
}

function checkstep() {
    cards.forEach( elem => {
        elem.classList.remove('hide');
        if ((elem.classList.contains('olga')) || (elem.classList.contains('rez')) || (elem.classList.contains('marina'))) {
            elem.classList.add('hide');
        }
    });
}

function checkmarina() {
    cards.forEach( elem => {
        elem.classList.remove('hide');
        if ((elem.classList.contains('olga')) || (elem.classList.contains('step')) || (elem.classList.contains('rez'))) {
            elem.classList.add('hide');
        }
    });
}

function cleare() {
    var ele1 = document.getElementsByName("fil");
    for (var i = 0; i < ele1.length; i++)
        ele1[i].checked = false;

    cards.forEach( elem => {
        elem.classList.remove('hide');
    });
}