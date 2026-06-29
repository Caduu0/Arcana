function $Pack$IngredientsOf(string) {
    let ingredients = [];
    string.forEach(ingredient => {
        ingredients.push(Ingredient.of(ingredient))
    });
    return ingredients
}