document.addEventListener('DOMContentLoaded', () => {
    let range = document.getElementById('range');
    let output = document.getElementById('change');
    let calcValue = document.getElementById('calcValue');
    output.textContent = range.value;
    range.oninput = function() {
        output.textContent = this.value;
        calcValue.value = this.value;
    }
    output.textContent.onchange = function() {
        range.value = this.textContent
    }
    calcValue.addEventListener('input', function() {
        output.textContent = calcValue.value;
        range.value = calcValue.value;
    })
})

document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper', {
        direction: 'vertical',
        loop: false,
        slidesPerView: 3,
        spaceBetween: 9,
        slidesPerGroup: 1,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    let slides = document.querySelectorAll('.slider__image');
    let mainImg = document.querySelector('.slider__img');

    slides.forEach((x) => {
        x.addEventListener('click', () => {
            slides.forEach((z) => {
                z.classList.remove('slider__active')
            })
            x.classList.add('slider__active')
            mainImg.src = x.src
        })
    })

    let points = [
        [46.872185073737896, 8.354223999999991],
        [48.872185073737896, 2.354223999999991],
        [46.872185073737896, 4.354223999999991],
        [55.75399399999374, 37.62209300000001]
    ];
    ymaps.ready(init);

    function init() {
        var myMap = new ymaps.Map('map', {
            center: [55.75399399999374, 37.62209300000001],
            zoom: 11
        });
        points.forEach((point) => {
            var myPlacemark = new ymaps.Placemark(point, {}, {
                iconLayout: 'default#image',
                iconImageHref: 'img/mappin.svg',
                iconImageSize: [36, 36],
            });
            myMap.geoObjects.add(myPlacemark);
        });
    }

    let infoBtn = document.querySelectorAll('.info__btn');
    let popup = document.getElementById('popup')
    let popupBtn = document.getElementById('popup__btn');

    infoBtn.forEach((info) => {
        info.addEventListener('click', () => {
            popup.style.display = 'flex';
        })
    })

    popupBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    })

    const swiperNew = new Swiper('.popup__slider-block', {
        direction: 'vertical',
        loop: false,
        slidesPerView: 2,
        spaceBetween: 21,
        slidesPerGroup: 1,
        navigation: {
            nextEl: '.slider-button-next',
            prevEl: '.slider-button-prev',
        },
    });

    let newSlides = document.querySelectorAll('.popup__slider-image');
    let slideImage = document.querySelector('.popup__slider-img')

    newSlides.forEach((slide) => {
        slide.addEventListener('click', () => {
            newSlides.forEach((img) => {
                img.classList.remove('popup__active')
            })
            slide.classList.add('popup__active')
            slideImage.src = slide.src
        })
    })

    $(function() {
        $("#accordion").accordion({
            collapsible: true,
        });
    });
    $(function() {
        $("#accordionNew").accordion({
            collapsible: true,
        });
    });

    function init() {
        var newMap = new ymaps.Map("mapNew", {
            center: [55.7416830588682, 37.61600262770661],
            zoom: 18
        });
        var newPlacemark = new ymaps.Placemark([55.7416830588682, 37.61600262770661], {}, {
            iconLayout: 'default#image',
            iconImageHref: 'img/mappin.svg',
            iconImageSize: [36, 36],
        });
        newMap.geoObjects.add(newPlacemark);
    }
})