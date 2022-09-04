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

function modal () {

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

modal ()

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
});