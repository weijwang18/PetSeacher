import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import PetSearch from "./js/search.js";

function getElements(data) {
  console.log(data);
  if (data.animals) {
    $(".output").text(`${JSON.stringify(data.animals[0].description)}`);
    $(".output").append(`<img src="${data.animals[0].photos[1].small}"></img`);
  } else {
    console.log("no");
  }
}

async function makeApiCall(breedName, postalCode) {
  const response = await PetSearch.getPet(breedName, postalCode);
  console.log(response);
  return response;
}

$(document).ready(function () {
  $("#zipCode").submit(function (event) {
    event.preventDefault();
    let breedName = $("#dogs").val();
    let postalCode = $("#zip").val();
    let result = makeApiCall(breedName, postalCode);
    result.then(function(data) {
      console.log(data);
      getElements(data);
    })
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
