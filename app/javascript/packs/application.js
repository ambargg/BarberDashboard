// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)


// ----------------------------------------------------
// Note(lewagon): ABOVE IS RAILS DEFAULT CONFIGURATION
// WRITE YOUR OWN JS STARTING FROM HERE 👇
// ----------------------------------------------------

// External imports
import "bootstrap";
import JQuery from 'jquery';
window.$ = window.JQuery = JQuery;

// Internal imports
import { initPieChart } from '../components/graphs';
import { initCollapsables } from "../components/collapsables";

document.addEventListener('turbolinks:load', () => {
  // Call your functions here, e.g:
  initPieChart();
  initCollapsables();

  console.log('hello')

  const nextAppointmentButton = document.getElementById('showNextAppointment')
  nextAppointmentButton.addEventListener('click', () => {
    const nextAppointment = document.getElementById('fakeNextAppointment')
    nextAppointment.classList.add('next-appointment')
  });
});


