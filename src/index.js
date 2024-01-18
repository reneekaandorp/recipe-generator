function generateRecipe(event) {
  event.preventDefault();
  let recipeElement = document.querySelector("#generated-recipe");
  recipeElement.innerHTML = "The best recipe in the world";
}

let recipeForm = document.querySelector("#recipe-searcher");
recipeForm.addEventListener("submit", generateRecipe);
