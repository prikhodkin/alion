import { Application } from "stimulus"
import { definitionsFromContext } from "stimulus/webpack-helpers"

const application = Application.start()
const context = require.context("./controllers", true, /\.js$/);
application.load(definitionsFromContext(context));
import Tabs from "%modules%/tabs/tabs";

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

initMap();
