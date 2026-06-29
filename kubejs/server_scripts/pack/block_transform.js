BlockEvents.leftClicked(event => {
    let blockConversion = {
        "visualworkbench:minecraft/crafting_table": { "minecraft:stick": "minecraft:crafting_table" }
    }
    let block = blockConversion[event.getBlock()] ? blockConversion[event.getBlock()][event.getItem().id] : null;
    if (block) {
        event.getBlock().set(block)
        let pos = event.getBlock().getPos();
        event.getLevel().spawnParticles("minecraft:end_rod", false, pos.getX() + 0.5, pos.getY() + 1.1, pos.getZ() + 0.5, 0.25, 0, 0.25, 20, 0.01)
    }
})