const swiperReviews = new Swiper('.swiper-reviews', {
    loop: true,

    navigation: {
        nextEl: '.review-button-next',
        prevEl: '.review-button-prev',
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetweenSlides: 90
        },
        960: {
            slidesPerView: 4,
            spaceBetweenSlides: 20
        }
    }
});

function accordion() {
    const items = document.querySelectorAll('.faq__item a');

    items.forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();

            this.parentNode.classList.toggle('active');
        });
    });
}

accordion();

function modal() {

    document.addEventListener('click', modalHandler);

    function modalHandler(e) {
        const modalBtnOpen = e.target.closest('.js-modal');

        if (modalBtnOpen) {
            e.preventDefault();
            const modalSelector = modalBtnOpen.dataset.modal;
            showModal(document.querySelector(modalSelector));
        }

        const modalBtnClose = e.target.closest('.modal-close');
        if (modalBtnClose) {
            e.preventDefault();
            hideModal(modalBtnClose.closest('.modal'));
        }

        if (e.target.matches('#modal-backdrop')) {
            hideModal(document.querySelector('.modal.show'));
        }

    }

    function showModal(modalElem) {
        modalElem.classList.add('show');
        document.querySelector('body').style.overflow = "hidden";
    }

    function hideModal(modalElem) {
        modalElem.classList.remove('show');
        document.querySelector('body').style.overflow = "initial";
    }

}

modal()

const swiperProductThumbs = new Swiper('.product-swiper-thumbs', {
    spaceBetween: 3,
    slidesPerView: 'auto',
    slideToClickedSlide: true,
});

const swiperProduct = new Swiper('.product-swiper', {
    slidesPerView: 1,
    effect: 'fade',
    navigation: {
        nextEl: '.product-button-next',
        prevEl: '.product-button-prev',
    },
    thumbs: {
        swiper: swiperProductThumbs
    }
});


const gallery = new Viewer(document.getElementById('gallery-items'), {
    navbar: 0,
    title: false,
    movable: false,
    // rotatable: false,
    // scalable: false
});

document.addEventListener("mousemove", parallax);

function parallax(e) {
    document.querySelectorAll(".parallax-effect").forEach(function (move) {
        const moving_value = move.getAttribute("data-value");

        const x = (e.clientX * moving_value) / 250;
        const y = (e.clientY * moving_value) / 250;

        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    });
}

(function() {
    let timers = document.querySelectorAll(".timer");
    timers.forEach(timer => {
        let countHours, countMinutes, countSeconds, h, m, s;
        countHours = null;
        countMinutes = null;
        countSeconds = null;

        h = timer.querySelector(".hours");
        m = timer.querySelector(".minutes");
        s = timer.querySelector(".seconds");

        setInterval(function() {
            let date, nowHours, nowMinutes, nowSeconds;
            date = new Date();
            nowHours = date.getHours();
            nowMinutes = date.getMinutes();
            nowSeconds = date.getSeconds();
            if (countSeconds !== nowSeconds) {
                s.classList.add("pop");
                setTimeout(function() {
                    return s.classList.remove("pop");
                }, 300);
                countSeconds = 60 - nowSeconds;
                if (nowSeconds === 0) {
                    countSeconds = 0;
                }
                s.textContent = (countSeconds < 10 ? "0" : "") + countSeconds;
            }
            if (countMinutes !== nowMinutes && nowSeconds !== 0 || countMinutes === null) {
                m.classList.add("pop");
                setTimeout(function() {
                    return m.classList.remove("pop");
                }, 300);
                countMinutes = 59 - nowMinutes;
                if (nowMinutes === 0) {
                    countMinutes = 59;
                }
                m.textContent = (countMinutes < 10 ? "0" : "") + countMinutes;
                countMinutes = nowMinutes;
            }
            if (countHours !== nowHours && nowMinutes === 0 && nowSeconds === 1 || countHours === null) {
                h.classList.add("pop");
                setTimeout(function() {
                    return h.classList.remove("pop");
                }, 300);
                countHours = 23 - nowHours;
                h.textContent = (countHours < 10 ? "0" : "") + countHours;
                return countHours = nowHours;
            }
        }, 1000);
    });
}).call(this);