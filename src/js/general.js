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
    }),
    marker = new google.maps.Marker({
      position: coordinates,
      map: map,
      icon: image
    });
}

initMap();
