StartupEvents.modifyCreativeTab("potionsmaster:creative_tab", event => {
    if (global.$PotionsMaster) {
        global.$PotionsMaster.forEach(Potion => {
            let potionId = Potion.name.toLowerCase().replace(" ", "_");
            event.add(`kubejs:potionsmaster_calcinated_${potionId}_oresight_powder`)
            event.add(`kubejs:potionsmaster_${potionId}_oresight_powder`)
        })
    }
})