let $ChunkPos = Java.loadClass("net.minecraft.world.level.ChunkPos")
ServerEvents.commandRegistry(event => {
    let Commands = event.commands
    event.register(Commands.literal("www").executes(function (CTX) {

        let level = CTX.getSource().getLevel()
        let result = Text.translate("command.kubejs.www.message").color(0xd77a61);
        level.structureManager().startsForStructure($ChunkPos(CTX.getSource().getPosition()), () => true).stream().forEach(ss => {
            let {x:x,y:y,z:z} = CTX.getSource().getPosition()
            if (ss.getBoundingBox().isInside(x,y,z)) {
                result.append(Text.of("\n - ")
                    .append(Registry.of("worldgen/structure").getKey(ss.getStructure()).location())
                    .color(0xd8b4a0))
            }
        })
        if (result.getSiblings().size() > 0) {
            CTX.getSource().sendSuccess(result, false)
        } else {
            CTX.getSource().sendFailure(Text.translate("command.kubejs.www.error").color(0xd77a61))
        }
        return 0
    }))
})