import $ from 'jquery';
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import PetSearch from "./js/search.js";

$(document).ready(function () {
  $("#zipCode").submit(function (event) {
    event.preventDefault();
    let breed = $("#dogs").val();
    PetSearch.getPet(breed);
  });
});
