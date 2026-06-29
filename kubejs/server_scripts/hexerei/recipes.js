ServerEvents.recipes(event => {
    function pestle_mortar(ingredients, output, time) {
        event.custom({
            type: `hexerei:pestle_and_mortar`,
            ingredients: ingredients,
            output: output,
            grindingTime: time
        })
    }
    global.$PotionsMaster.forEach(Potion =>{
        pestle_mortar([
            Ingredient.of(`potionsmaster:ender_powder`).toJson(),
            Ingredient.of(`minecraft:glowstone_dust`).toJson(),
            Ingredient.of(Potion.item).toJson(),
            Ingredient.of(`minecraft:redstone`).toJson()],
            Item.of(`potionsmaster:${Potion.name.toLowerCase().replace(" ", "_")}_oresight_powder`),
            100
        )
    })
})