// const accordion = document.getElementsByClassName('accordion-titles-list-list');

// for (i = 0; i<accordion.length; i++) {
//     accordion[i].addEventListener('click', function () {
//         this.classList.toggle('active')
//     })
// }


jQuery(function(i) {
    var o,n;

    i(".accordion").length&&(
        i(".accordion-titles-list"),
        o = i(".accordion-text-list"),
        i(".accordion-titles-list-list-item-title").click(function(){
            var t = i(this),
            e = t.closest(".accordion-titles-list-list").index();

            t.hasClass("active")||(
                i(".accordion-titles-list-list-item-title.active").removeClass("active"),
                t.addClass("active"),
                i(".accordion-text-list-list.active").removeClass("active"),
                o.children().eq(e).addClass("active")
            )
        })
    )
})


// Mobile menu
const nav = document.querySelector('.mobile-nav');
const openNavBtn = document.querySelector('#nav__toggle-open');
const closeNavBtn = document.querySelector('#nav__toggle-close');

const openNav = () => {
    nav.style.display = 'flex';
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'inline-block';
}

openNavBtn.addEventListener('click', openNav);

const closeNav = () => {
    nav.style.display = 'none';
    openNavBtn.style.display = 'inline-block';
    closeNavBtn.style.display = 'none';
}

closeNavBtn.addEventListener('click', closeNav);

// close nav menu on click of menu link
if (document.body.clientWidth < 1024) {
    nav.querySelectorAll('li a').forEach(navLink => {
        navLink.addEventListener('click', closeNav);
    });
}