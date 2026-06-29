ServerEvents.tags(`item`, event => {
    global.$PotionsMaster.forEach(Potion => {
        event.add(`potionsmaster:calcinated/${Potion.name.toLowerCase().replace(" ", "_")}`, `potionsmaster:calcinated_${Potion.name.toLowerCase().replace(" ", "_")}_oresight_powder`)
    })
})
ServerEvents.tags(`block`, event => {
    event.add("minecraft:mineable/pickaxe", /mythrais/)
})