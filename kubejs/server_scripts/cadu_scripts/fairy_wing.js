;(function() {
    const $Attributes = Java.loadClass('net.minecraft.world.entity.ai.attributes.Attributes');
    const $AttributeModifier = Java.loadClass('net.minecraft.world.entity.ai.attributes.AttributeModifier');
    const $AttributeModifier_Operation = Java.loadClass('net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation');
    const $ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation');
    const KNOCKBACK_RESISTANCE_RL = $ResourceLocation.parse('fairywing_kubejs:knockback_resistance');
    const KNOCKBACK_RESISTANCE_ID = 'fairywing_kubejs:knockback_resistance';
    const FAIRYWING_ARMOR_RL = $ResourceLocation.parse('fairywing_kubejs:armor');
    const FAIRYWING_ARMOR_ID = 'fairywing_kubejs:armor';

function hasWingsEquipped(player) {
    try {
        let chest = player.getInventory().getItem(38);
        if (chest && chest.id === 'wingsn:fairy_wings') return true;
        
        return false;
    } catch (e) {
        return false;
    }
}

function safeRemoveModifier(attribute, modifierId) {
    if (!attribute) return;
    try { attribute.removeModifier(modifierId); } catch (e) {}
    try { attribute.removeModifier(modifierId.toString()); } catch (e) {}
    try {
        let modifiers = attribute.getModifiers();
        if (modifiers) {
            let modArray = modifiers.toArray();
            for (let i = 0; i < modArray.length; i++) {
                let mod = modArray[i];
                let id = mod.id();
                if (id && id.toString() === modifierId.toString()) {
                    attribute.removeModifier(id);
                }
            }
        }
    } catch (e) {}
}

function nukeAllCustomModifiers(attribute) {
    if (!attribute) return;
    try {
        let modifiers = attribute.getModifiers();
        if (modifiers) {
            let modArray = modifiers.toArray();
            for (let i = 0; i < modArray.length; i++) {
                let mod = modArray[i];
                let id = mod.id();
                if (id && id.toString().indexOf('fairywing_kubejs') !== -1) {
                    try { attribute.removeModifier(id); } catch (e2) {}
                }
            }
        }
    } catch (e) {}
}

function commandRemoveModifiers(player) {
    if (!player.server) return;
    let name = player.username;
    player.server.runCommandSilent(`attribute ${name} minecraft:generic.knockback_resistance modifier remove ${KNOCKBACK_RESISTANCE_ID}`);
    player.server.runCommandSilent(`attribute ${name} minecraft:generic.armor modifier remove ${FAIRYWING_ARMOR_ID}`);
}

function updateWingsAttributes(player, hasWings) {
    let resistanceAttr = player.getAttribute($Attributes.KNOCKBACK_RESISTANCE);
    let armorAttr = player.getAttribute($Attributes.ARMOR);

    if (!hasWings) {
        safeRemoveModifier(resistanceAttr, KNOCKBACK_RESISTANCE_RL);
        safeRemoveModifier(armorAttr, FAIRYWING_ARMOR_RL);
        nukeAllCustomModifiers(resistanceAttr);
        nukeAllCustomModifiers(armorAttr);
        commandRemoveModifiers(player);
        return;
    }

    if (resistanceAttr) {
        let modifier = new $AttributeModifier(KNOCKBACK_RESISTANCE_RL, 1.0, $AttributeModifier_Operation.ADD_VALUE);
        resistanceAttr.addOrUpdateTransientModifier(modifier);
    }

    if (armorAttr) {
        let modifier = new $AttributeModifier(FAIRYWING_ARMOR_RL, 20.0, $AttributeModifier_Operation.ADD_VALUE);
        armorAttr.addOrUpdateTransientModifier(modifier);
    }
}

PlayerEvents.loggedIn(event => {
    let player = event.player;
    let pData = player.persistentData;
    pData.putBoolean('hadFairyWings', false);
});

PlayerEvents.respawned(event => {
    let player = event.player;
    if (!player.level.isClientSide()) {
        commandRemoveModifiers(player);
    }
});

PlayerEvents.tick((event) => {
    let player = event.player;
    
    if (player.level.isClientSide()) return;
    
    let hasWings = hasWingsEquipped(player);
    let pData = player.persistentData;
    let hadWings = pData.getBoolean('hadFairyWings');
    
    let stateChanged = (hadWings !== hasWings);
    let periodicCheck = (player.age % 20 === 0);
    
    if (stateChanged || periodicCheck) {
        pData.putBoolean('hadFairyWings', hasWings);
        updateWingsAttributes(player, hasWings);
    }

     if (hasWings && player.fallDistance > 0) {
        player.fallDistance = 0;
    }
});
})();