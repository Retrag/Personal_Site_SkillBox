$(document).ready(function () {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 1,
        simulateTouch: true,
        touchRatio: 2,
        grabCursor: true,
        autoHeight: true,
        keyboard: {
            enabled: true,
            onlyInViewport: true,
            pageUpDown: true,
        },
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            770: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 2,
            },
            1100: {
                slidesPerView: 3,
            },
        }
    })
    $(".header-burger").click(function (event) {
        $(".header-burger,.header__menu").toggleClass('active');
        $("body").toggleClass("lock")
    })
    $(".price-item").click(function (event) {
        $('.modal').toggleClass('active');
        $("body").removeClass("lock")
    })
    $('.callback-btn').click(function (event) {
        $('.modal').toggleClass('active');
        $("body").toggleClass("lock")
    })
    $(".close-modal").click(function (event) {
        $(".modal").toggleClass('active');
        $("body").removeClass("lock")
    })
    $('.modal').click(function (event) {
        if ($(event.target).closest('.modal-content').length == 0) {
            $(this).toggleClass('active');
            $("body").removeClass("lock");
            event.preventDefault();
        }
    })
    $(document).ready(function () {
        $(".item-menu").on("click", "a", function (event) {
            event.preventDefault();
            var id = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({
                scrollTop: top
            }, 1000);
        });
    });
    $(document).keydown(function (e) {
        if (e.keyCode === 27) {
            e.stopPropagation();
            $('.modal').removeClass('active');
            $("body").removeClass("lock")
        }
    });
})

function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});