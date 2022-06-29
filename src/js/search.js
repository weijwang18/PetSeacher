// import authToken from "./token.js";

// let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJsOUdPRE13QXloUHhXZW42OHJycnVDSU9RYmYxRUx0OEpMTEg3MkFyYU0xaTdoUlVRdSIsImp0aSI6ImUyNTAzNzNmYTNkYzZlY2MzNzk3YTM2ZGYxYmVkY2Q3MjViYTY0ZTVmNGU4ZTRmMjU3NjdkZGRjOWEwNDMyMGVkZGI4ZWQ5ZjY2OTBmZWI0IiwiaWF0IjoxNjU2NTIxMDMzLCJuYmYiOjE2NTY1MjEwMzMsImV4cCI6MTY1NjUyNDYzMywic3ViIjoiIiwic2NvcGVzIjpbXX0.Az2JWFbowOkEGSo1fh2tkO3g8LTW6YIRDL23d204hRC4BXvrJLI0LiVDBnddWY8KnumrI17_AFlJ4jq4JGeFGrOmFBHEAa2dCaW1OI7WInta7QVOsaOp_JiBUKdw5-4jkB8gQhi79WnKu9qryMQ4vr3hphPuZsTNOKsrdaHxLIjNEyqcXAjN5PsiHS8S95VcJBgqxzV6bhi5ffrHQRjWP5_P39YjhBNmUcrN10ahDMYOwGyyWZ6PVSKMYFFGShcBMOZ5E16pcaxwCakqmC0It1HAmsdGCb8aq-n4B12eKq986Jj_IYlqAqAloxfwWY1FK8112PeaZYD3wNbZe-wpCw";
export default class PetSearch {
  static getPet() {
    fetch("https://api.petfinder.com/v2/oauth2/token", {
      method: "POST",
      body: `grant_type=client_credentials&client_id=${process.env.API_KEY}&client_secret${SECRET}`,
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
        return fetch(
          "https://api.petfinder.com/v2/types/dog/breeds/name/cockapoo",
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
      .then(function (data) {
        // Log the pet data
        console.log("pets", data);
      })
      .catch(function (err) {
        // Log any errors
        console.log("something went wrong", err);
      });
  }
}
