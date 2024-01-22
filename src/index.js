function displayRecipe(response) {
  new Typewriter("#generated-recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

//let generatedRecipe = document.querySelector("#generated-recipe");
// generatedRecipe.innerHTML = `${response.data.answer}`;

function generateRecipe(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "79t19ca06b3618febf143dc04f0o86be";
  let context =
    "You are an AI culinary expert that likes picking out recipes. Please provide recipes that are simple and delicious. Please use the following format, without additional text. <h2>Pancakes</h2> <h3>Ingredients</h3> <ul><li>flour</li><li>eggs</li></ul> <h3>Instructions</h3> <ol><li>Combine the ingredients</li> <li>Heat a nonstick pan</li> </ol>";
  let prompt = `Please generate a recipe with ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#generated-recipe");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `<p class="generating"> Generating your recipe...</p>`;

  axios.get(apiUrl).then(displayRecipe);
}

let recipeForm = document.querySelector("#recipe-searcher");
recipeForm.addEventListener("submit", generateRecipe);
