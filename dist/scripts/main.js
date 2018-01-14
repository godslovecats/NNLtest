window.onload = function() {
    var elems = document.getElementsByClassName('collapse__header');
    var navElems = document.getElementsByClassName('nav-sect__item');
    var navElemAtive;

    function activateCollapse() {
        var parent = this.parentElement;
        if (!parent.classList.contains('active')) {
            parent.classList.add('active');
        } else {
            parent.classList.remove('active');
        }
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

    // base-checked
    activateCollapse.call(elems[0]);
    activateNavElem.call(navElems[0]);
}