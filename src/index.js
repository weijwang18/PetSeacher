import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import PetSearch from "./js/search.js";

function getElements(resp) {
    console.log(resp);
}

$(document).ready(function () {
  $("#zipCode").submit(function (event) {
    event.preventDefault();
    let breedName = $("#dogs").val();
    let postalCode = $("#zip").val();
    // let test = new PetSearch();
    // console.log(PetSearch.getPet(breedName,postalCode));
    // PetSearch.getPet(breedName, postalCode).then(function (animals) {
    //   console.log("i am working");
    //   returnOutput(animals);
    (async function () {
      const resp = await PetSearch.getPet(breedName, postalCode);
      getElements(resp);
    })();
  });
});

// async function makeApiCall(breedName,postalCode){
//   const response = await PetSearch.getPet(breedName, postalCode);
//   console.log(response);
//   // returnOutput(response);
// }

// makeApiCall(breedName,postalCode);

// function returnOutput(animals) {
//   $(".output").html(`<p>${animals}</p>`);
// }
