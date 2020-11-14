import { Application } from "stimulus"
import { definitionsFromContext } from "stimulus/webpack-helpers"
import Swiper from 'swiper/bundle';
const application = Application.start()
const context = require.context("./controllers", true, /\.js$/);
application.load(definitionsFromContext(context));
import Tabs from "%modules%/tabs/tabs";
import WOW from "wow.js/dist/wow.min"
import IMask from 'imask';
import {Popup, PopupThanks } from "%modules%/modal/modal";
import $ from "jquery";
global.jQuery = $;
const popups = document.querySelectorAll('.popup');
popups.forEach(function (popup) {
  new Popup(popup);
});

//Открыть меню
let toggleNav = document.querySelector(".header__toggle");
let header = document.querySelector(".header");

toggleNav.addEventListener("click", function () {
  if (header.classList.contains("header--active")) {
    header.classList.remove("header--active");
  } else {
    header.classList.add("header--active");
  }
});

const tabArr = document.querySelectorAll(`[data-tabs]`);

tabArr.forEach((item) => new Tabs(item));
const maps = document.querySelector(".contact__map");
new WOW().init();
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



var swiper = new Swiper('.swiper-container', {
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


const phones = document.querySelectorAll(`.field__input--phone`);
const phoneOption = {
  mask: '+{33} (0) 00-00-00-00'
}

phones.forEach((item) => IMask(item, phoneOption));
const thx = document.querySelector(`.popup--thx`);
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


$("a[href^='#']").click(function(){
  var _href = $(this).attr("href");
  $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
  return false;
});
