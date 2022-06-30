import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import PetSearch from "./js/search.js";

function getElements(data) {
  console.log(data);
  if (data.animals) {
    displayAnimals(data);
  } else {
    console.log("no");
  }
}

function displayAnimals(data) {
  for (let i = 0; i < data.animals.length; i++) {
    $(".output").append(
      `<div class="${i}"> 
      <br>
      <img src="${data.animals[i].photos[0].medium}"></img>
      <br>
      Name: ${data.animals[i].name}
      <br>
      Location: ${data.animals[i].contact.address.city}
      <br>
      Contact: ${data.animals[i].contact.email}
      </div>`
    );
  }
}

async function makeApiCall(breedName, postalCode) {
  const response = await PetSearch.getPet(breedName, postalCode);
  return response;
}

$(document).ready(function () {
  $("#zipCode").submit(function (event) {
    event.preventDefault();
    let breedName = $("#dogs").val();
    let postalCode = $("#zip").val();
    $(".output").children('div').remove();
    let result = makeApiCall(breedName, postalCode);
    result.then(function (data) {
      getElements(data);
    });
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
