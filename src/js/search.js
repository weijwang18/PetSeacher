export default class PetSearch {
  constructor() {
    this.testObj = {};
  }
  static async getPet(breedName, postalCode) {
    fetch("https://api.petfinder.com/v2/oauth2/token", {
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
        // Log the API data
        console.log("token", data);

        // Return a second API call
        // This one uses the token we received for authentication
        // breed = pug
        //
        const response = await fetch(
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
        console.log(resp);
        return resp.json();
        // return test
      })
      // .then(function (animals) {
      //   // Log the pet data
      //   console.log(animals);
      //   // return data;
      //   // console.log(response.animals[0].description);
      // })
      .catch(function (err) {
        // Log any errors
        console.log("something went wrong", err);
      });
  }
}
