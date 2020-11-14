import Swiper from 'swiper/bundle';
import Tabs from "%modules%/tabs/tabs";
import WOW from "wow.js/dist/wow.min"
import IMask from 'imask';
import {Popup, PopupThanks } from "%modules%/modal/modal";
import $ from "jquery";
global.jQuery = $;

const popups = document.querySelectorAll(`.popup`);
const thx = document.querySelector(`.popup--thx`);
const toggleNav = document.querySelector(`.header__toggle`);
const header = document.querySelector(`.header`);
const tabArr = document.querySelectorAll(`[data-tabs]`);
const phones = document.querySelectorAll(`.field__input--phone`);
const maps = document.querySelector(".contact__map");
const phoneOption = {
  mask: '+{33} (0) 00-00-00-00'
}

// Инициализация библиотеки анимации
new WOW().init();

// Инициализация попапов
popups.forEach(function (popup) {
  new Popup(popup);
});

// Меню
toggleNav.addEventListener("click",  () => {
  header.classList.toggle(`header--active`)
});

// Инициализация табов
tabArr.forEach((item) => new Tabs(item));

// Инициализация карты
function initMap() {
  var coordinates = { lat: 48.828250, lng: 2.370778 },
  image = 'img/pointer-map.svg',
    map = new google.maps.Map(document.querySelector(".contact__map"), {
      center: { lat:   48.8282377, lng:2.361531 },
      zoom: 16,
      styles: [
        {
          "elementType":"geometry",
          "stylers":[
            {
              "color":"#f5f5f5"
            }
          ]
        },
        {
          "elementType":"labels.icon",
          "stylers":[
            {
              "visibility":"off"
            }
          ]
        },
        {
          "elementType":"labels.text.fill",
          "stylers":[
            {
              "color":"#616161"
            }
          ]
        },
        {
          "elementType":"labels.text.stroke",
          "stylers":[
            {
              "color":"#f5f5f5"
            }
          ]
        },
        {
          "featureType":"administrative.land_parcel",
          "elementType":"labels.text.fill",
          "stylers":[
            {
              "color":"#bdbdbd"
            }
          ]
        },
        {
          "featureType":"poi",
          "elementType":"geometry",
          "stylers":[
            {
              "color":"#eeeeee"
            }
          ]
        },
        {
          "featureType":"poi",
          "elementType":"labels.text.fill",
          "stylers":[
            {
              "color":"#757575"
            }
          ]
        },
        {
          "featureType":"poi.park",
          "elementType":"geometry",
          "stylers":[
            {
              "color":"#e5e5e5"
            }
          ]
        },
        {
          "featureType":"poi.park",
          "elementType":"labels.text.fill",
          "stylers":[
            {
              "color":"#9e9e9e"
            }
          ]
        },
        {
          "featureType":"road",
          "elementType":"geometry",
          "stylers":[
            {
              "color":"#ffffff"
            }
          ]
        },
        {
          "featureType":"road.arterial",
          "elementType":"labels.text.fill",
          "stylers":[
            {
              "color":"#757575"
            }
          ]
        },
        {
          "featureType":"road.highway",
          "elementType":"geometry",
          "stylers":[
            {
              "color":"#dadada"
            }
          ]
        },
        {
          "featureType":"road.highway",
          "elementType":"labels.text.fill",
          "stylers":[
            {
              "color":"#616161"
            }
          ]
        },
        {
          "featureType":"road.local",
          "elementType":"labels.text.fill",
          "stylers":[
            {
              "color":"#9e9e9e"
            }
          ]
        },
        {
          "featureType":"transit.line",
          "elementType":"geometry",
          "stylers":[
            {
              "color":"#e5e5e5"
            }
          ]
        },
        {
          "featureType":"transit.station",
          "elementType":"geometry",
          "stylers":[
            {
              "color":"#eeeeee"
            }
          ]
        },
        {
          "featureType":"water",
          "elementType":"geometry",
          "stylers":[
            {
              "color":"#c9c9c9"
            }
          ]
        },
        {
          "featureType":"water",
          "elementType":"labels.text.fill",
          "stylers":[
            {
              "color":"#9e9e9e"
            }
          ]
        }
      ],
    }),
    marker = new google.maps.Marker({
      position: coordinates,
      map: map,
      icon: image
    });
}
if(maps) {
  initMap();
}

// Инициализация слайдера
const swiper = new Swiper('.swiper-container', {
  effect: 'fade',
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<div class="' + className + '"><span class="bullet" ></span><span>' + `${(index < 9) ? '0' : ''}`  + (index + 1) + '</span></div>';
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// Инициализация маски для телефона
phones.forEach((item) => IMask(item, phoneOption));

// Ajax отправка формы
$(".form").submit(function() { //Change
  var th = $(this);
  $.ajax({
    type: "POST",
    url: "vendor/mail.php", //Change
    data: th.serialize()
  }).done(function() {
    new PopupThanks(thx).openPopup();
    setTimeout(function() {
      // Done Functions
      th.trigger("reset");
    }, 1000);
  });
  return false;
});

// Плавная прокрутка до якоря
$("a[href^='#']").click(function(){
  var _href = $(this).attr("href");
  $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
  return false;
});
