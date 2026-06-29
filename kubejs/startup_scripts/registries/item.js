StartupEvents.registry("item", event => {
    if (global.$PotionsMaster) {
        global.$PotionsMaster.forEach(Potion => {
            let potionId = Potion.name.toLowerCase().replace(" ", "_");
            event.create(`potionsmaster_calcinated_${potionId}_oresight_powder`)
                .displayName(`Calcinated ${Potion.name} Oresight Powder`)
                .texture(`kubejs:item/calcinated_base`)
                .maxStackSize(64)
                .color(Potion.color)

            event.create(`potionsmaster_${potionId}_oresight_powder`)
                .displayName(`${Potion.name} Oresight Powder`)
                .texture(`kubejs:item/base_powder`)
                .maxStackSize(64)
                .color(Potion.color)
        })
    }
})