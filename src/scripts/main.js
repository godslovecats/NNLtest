window.onload = function() {
    var elems = document.getElementsByClassName('collapse__header');
    var navElems = document.getElementsByClassName('nav-sect__item');
    var navElemAtive;

    function activateCollapse() {
        var parent = this.parentElement;
        if (!parent.classList.contains('active')) {
            parent.classList.add('active');
        } else
            parent.classList.remove('active');
    }

    function activateNavElem() {
        if (navElemAtive) {
            navElemAtive.classList.remove('active');
        }
        this.classList.add('active');
        navElemAtive = this;
    }

    for (var i in elems) {
        elems[i].onclick = activateCollapse;
    }

    for (var i in navElems) {
        navElems[i].onclick = activateNavElem;
    }
    activateNavElem.call(navElems[0]);
}











/*var open = true;
var heightChecked = false;
var initHeight = 0;

function slideToggle() {
    var mdiv = document.getElementById('mdiv');
    if (!heightChecked) {
        initHeight = mdiv.offsetHeight;
        heightChecked = true;
    }
    if (open) {
        open = false;
        mdiv.style.height = '0px';
    } else {
        open = true;
        mdiv.style.height = initHeight + 'px';
    }
}*/
/*
[].forEach.call(elem, function(event) {
    elem.addEventListener('click', function(e) {
        var parent = closest(event.target, '.collapse');
        if (!parent.classList.contains('.active')) {
            this.classList.add('.active');
        } else
            this.classList.remove('.active');
    })
});

function slideToggle() {
    for (var i=0; i < elem.length; i++) {
        photo[i].onclick = function(){
            alert("Finaly!");
        }
    };
}

var elem = document.getElementsByClassName('.collapse__header');



[].forEach.call(elem, function(event) {
    elem.addEventListener('click', function(e) {
        var parent = getClosest(event.target, '.collapse');
        if (!parent.classList.contains('.active')) {
            this.classList.add('.active');
        } else
            this.classList.remove('.active');
    })
});

function slideToggle() {
    var open = true;
    var heightChecked = false;
    var initHeight = 0;
    var collapse = document.querySelector('.collapse__wrap');
    if (!heightChecked) {
        initHeight = collapse.offsetHeight;
        heightChecked = true;
    }
    if (open) {
        open = false;
        collapse.style.height = '0px';
    } else {
        open = true;
        collapse.style.height = initHeight + 'px';
    }
}
var elem = document.querySelector('.collapse__header');
elem.onclick = slideToggle();



/*
if (collapse.style.height = '0px') {
    collapse.classList.add('active');
} 
collapse.style.height = '0px';
collapse.classList.add('active');
show.addEventListener('click', function(e) {
    collapse.classList.toggle('active');
});

[].forEach.call(document.querySelectorAll('.collapse'), function(el, i) {
    var collapse = el.querySelector('.collapse');
    collapse.style.height = '0px';

    el.addEventListener('click', function() {
        collapse.classList.toggle('active');
    });
});*/