export default class PetSearch {
  static getPet(breedName, postalCode) {
    return fetch("https://api.petfinder.com/v2/oauth2/token", {
      method: "POST",
      body: `grant_type=client_credentials&client_id=${process.env.API_KEY}&client_secret${process.env.SECRET}`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then(function (resp) {
        // Return the response as JSON
        return resp.json();
      })
      .then(function (data) {
        // Return a second API call
        // This one uses the token we received for authentication
        return fetch(
          `https://api.petfinder.com/v2/animals?breed=${breedName}&location=${postalCode}`,
          {
            headers: {
              Authorization: data.token_type + " " + data.access_token,
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
      })

      .then(function (resp) {
        // Return the API response as JSON

        return resp.json();
      })
      // .then(function (data) {
      //   // log the pet data
      //   console.log("pets", data);
      // })
      .catch(function (err) {
        // Log any errors
        console.log("something went wrong", err);
      });
  }
}

// export default class Test {
//  getToken() {

//     const response =  fetch(`https://api.petfinder.com/v2/oauth2/token`, {
//       method: "POST",
//       body: `grant_type=client_credentials&client_id=${process.env.API_KEY}&client_secret${process.env.SECRET}`,
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded"
//       }
//     });
//     return response.json();

// }

// static async getAPI(data,breedName, postalCode) {
//   try {
//     const response = await fetch(`https://api.petfinder.com/v2/animals?breed=${breedName}&location=${postalCode}`, {
//         headers: {
//           Authorization: data.token_type + " " + data.access_token,
//           "Content-Type": "application/x-www-form-urlencoded",
//         }
//       }
//     );
//     if (!response.ok) {
//       throw Error(response.statusText);
//     }
//     return response.json();
//   } catch(error) {
//     return error.message;
//   }
// }

// }
