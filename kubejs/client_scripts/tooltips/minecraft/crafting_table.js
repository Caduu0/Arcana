ItemEvents.modifyTooltips(event => {
    event.modify("minecraft:crafting_table", Tooltip => {
        Tooltip.add(Text.translate("event.tooltip.block_transform",
            Text.translate("key.mouse.left").color("#6cadc6").underlined(),
            Text.translate("item.minecraft.stick").underlined(),
            Text.translate("block.minecraft.crafting_table").underlined(),
            Text.join([Text.of("Vanilla "), Text.translate("block.minecraft.crafting_table")]).underlined()
        ).color("#7689fe"))
    })
})