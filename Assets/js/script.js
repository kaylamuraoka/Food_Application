// Variables for functions

var api_key = "a8f7968642917eada65916047ac3150460c0056a";

// API pulls
fetch(
  "https://api.spoonacular.com/food/ingredients/search?apiKey=" +
    api_key +
    "&includeNutrition=true"
)
  .then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        console.log(data);
      });
    } else {
      alert("Error: " + response.statusText);
    }
  })
  .catch((err) => {
    console.error(err);
  });

  fetch("https://recipe-puppy.p.rapidapi.com/?p=1&i=onions%2Cgarlic&q=omelet", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "a1763f65f3mshc9f6db6be3a5287p184f59jsneb238681d7af",
		"x-rapidapi-host": "recipe-puppy.p.rapidapi.com"
	}
})
.then(function (response) {
  if (response.ok) {
    response.json().then(function (data) {
      console.log("recipe_puppy_API")
      console.log(data);
    });
  } else {
    alert("Error: " + response.statusText);
  }
})
.catch((err) => {
  console.error(err);
});

// Functions

// Event listeners