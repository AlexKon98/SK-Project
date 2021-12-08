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
})