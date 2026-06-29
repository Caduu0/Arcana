ServerEvents.recipes(event => {

    global.$PotionsMaster.forEach(Potion => {
        event.recipes.occultism.spirit_fire(
            Item.of(`potionsmaster:calcinated_${Potion.name.toLowerCase().replace(" ", "_")}_oresight_powder`),
            Ingredient.of(`potionsmaster:${Potion.name.toLowerCase().replace(" ", "_")}_oresight_powder`))
            .id(`kubejs:spirit_fire/${Potion.name.toLowerCase().replace(" ", "_")}_oresight_powder`)
    })
    event.custom({
        type:"occultism:ritual",
        result: Item.of("occultism:miner_ancient_eldritch"),
        ingredients: $Pack$IngredientsOf(["allthemodium:piglich_heart","occultism:mining_dim_core","allthemodium:unobtainium_pickaxe","occultism:miner_marid_master"]),
        activation_item: Ingredient.of("occultism:book_of_binding_bound_marid"),
        pentacle_id: "occultism:contact_eldritch_spirit",
        duration: 360,
        ritual_type: "occultism:craft_miner_spirit",
        ritual_dummy: Item.of("occultism:ritual_dummy/misc_miner_ancient_eldritch")
    }).id("kubejs:miner_ancient_eldritch")
})