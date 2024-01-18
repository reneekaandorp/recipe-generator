function displayRecipe(response) {
  console.log(`${response.data.answer}`);
}

function generateRecipe(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "79t19ca06b3618febf143dc04f0o86be";
  let context =
    "You are an AI culinary expert that likes picking out recipes. Please provide recipes that are simple and delicious";
  let prompt = `Please generate a recipe with ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log(`${prompt}`);
  console.log(`${context}`);

  axios.get(apiUrl).then(displayRecipe);
}

let recipeForm = document.querySelector("#recipe-searcher");
recipeForm.addEventListener("submit", generateRecipe);
