import Turbolinks from "turbolinks";
import { Application } from "stimulus"
import { definitionsFromContext } from "stimulus/webpack-helpers"

import Tabs from "%modules%/tabs/tabs"
import {$, $$} from "./util";


Turbolinks.start();

const application = Application.start()
const context = require.context("./controllers", true, /\.js$/);
application.load(definitionsFromContext(context));

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


