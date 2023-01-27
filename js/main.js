// slider

$(document).ready(function () {
    // timeline
    $('.single-item').slick({
        // centerPadding: '30px',
        slidesToShow: 1,
        speed: 300,
        dots: true,
        arrows: true,
        // prevArrow: '<button class="button-arrow slick-prev"><svg width="31" height="97" viewBox="0 0 31 97" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        //     '<line y1="-0.5" x2="55.9302" y2="-0.5" transform="matrix(-0.518503 0.855076 0.855076 0.518503 30 1)" stroke="#EFEBE4"/>\n' +
        //     '<line x1="1.42754" y1="48.5653" x2="30.4275" y2="96.3899" stroke="#EFEBE4"/>\n' +
        //     '</svg>\n</button>',
        // nextArrow: '<button class="button-arrow slick-next"><svg width="31" height="97" viewBox="0 0 31 97" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        //     '<line x1="1.42754" y1="0.916163" x2="30.4275" y2="48.7407" stroke="#EFEBE4"/>\n' +
        //     '<line y1="-0.5" x2="55.9302" y2="-0.5" transform="matrix(-0.518503 0.855076 0.855075 0.518503 30 49)" stroke="#EFEBE4"/>\n' +
        //     '</svg>\n</button>',
        responsive: [
            {
                breakpoint: 960,
                settings: {
                    arrows: false,
                    slideToShow: 1
                }
            },
        ]
    });

});
// custom scroll

// $(".project--scroll,.about--scroll").mCustomScrollbar({
//     axis: "y"
// });

// ------------------------ MOBILE NAV -------------------------
const mobileNavButton = document.querySelector('.mobile-nav-button')
const mobileNavIcon = document.querySelector('.mobile-nav-button__icon')
const mobileNav = document.querySelector('.nav-menu')
const navWrapMenu = document.querySelector(".menu-wrapper")

mobileNavButton.addEventListener('click', function () {
    mobileNavIcon.classList.toggle('active');
    mobileNav.classList.toggle('active')
    navWrapMenu.classList.toggle('active')
    document.body.classList.toggle('no-scroll')

})


$(".nav-menu__item").on("click", function (event) {

    $(mobileNavIcon).toggleClass("active");
    $(mobileNav).toggleClass("active");
    $(navWrapMenu).toggleClass("active")
    document.body.classList.remove('no-scroll')
});

// ------------------------  smooth scroll   -------------------------
$(".nav-menu a").on("click", function (e) {
    // 1
    // e.preventDefault();
    // 2
    const href = $(this).attr("href");
    // 3
    $("html, body").animate({ scrollTop: $(href).offset().top }, 800);
});


// ------------------------ fixed menu -------------------------

let header = $("#header")
let firstScreen = $(".first-screen")
let navHeader = $(".menu-wrapper,.holder-menu")
let firstScreenH
let scrollPos = $(window).scrollTop

$(window).on("scroll load resize", function () {
    firstScreenH = firstScreen.innerHeight();
    scrollPos = $(this).scrollTop()

    console.log(firstScreenH)

    if (scrollPos > firstScreenH) {
        header.addClass("fixed")
        navHeader.addClass("white")
    } else {
        header.removeClass("fixed")
        navHeader.removeClass("white")
    }
})