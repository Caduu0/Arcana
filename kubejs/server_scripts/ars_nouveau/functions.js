function $ArsNouveau$EnchantingApparatus(event, output, pedestalItems, reagent, nbt, sourceCost, id) {
    let recipe = {
        "type": "ars_nouveau:enchanting_apparatus",
        "keepNbtOfReagent": nbt,
        "pedestalItems": [],
        "reagent": Ingredient.of(reagent),
        "result": Item.of(output),
        "sourceCost": sourceCost
    };
    pedestalItems.forEach(input => {
        recipe.pedestalItems.push(Ingredient.of(input));
    });

    event.custom(recipe).id(`kubejs:enchanting_apparatus/${id}`);
}