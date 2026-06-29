const $Attributes = Java.loadClass('net.minecraft.world.entity.ai.attributes.Attributes');
const $AttributeModifier = Java.loadClass('net.minecraft.world.entity.ai.attributes.AttributeModifier');
const $AttributeModifier_Operation = Java.loadClass('net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation');
const $ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation');
const $Capabilities = Java.loadClass('by.dragonsurvivalteam.dragonsurvival.common.capability.Capabilities');
const ATTACK_DAMAGE_RL = $ResourceLocation.parse('dragonsurvival_kubejs:dragon_attack_damage');
const MAX_HEALTH_RL = $ResourceLocation.parse('dragonsurvival_kubejs:dragon_max_health');
const ARMOR_RL = $ResourceLocation.parse('dragonsurvival_kubejs:dragon_armor');
const MOVEMENT_SPEED_RL = $ResourceLocation.parse('dragonsurvival_kubejs:dragon_movement_speed');
const ATTACK_DAMAGE_ID = 'dragonsurvival_kubejs:dragon_attack_damage';
const MAX_HEALTH_ID = 'dragonsurvival_kubejs:dragon_max_health';
const ARMOR_ID = 'dragonsurvival_kubejs:dragon_armor';
const MOVEMENT_SPEED_ID = 'dragonsurvival_kubejs:dragon_movement_speed';
const VANILLA_ATTACK_DAMAGE = 1.0;
const VANILLA_MAX_HEALTH = 20.0;
const VANILLA_ARMOR = 0.0;
const VANILLA_MOVEMENT_SPEED = 0.1;

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
                if (id && id.toString().indexOf('dragonsurvival_kubejs') !== -1) {
                    try { attribute.removeModifier(id); } catch (e2) {}
                }
            }
        }
    } catch (e) {}
}

function commandRemoveModifiers(player) {
    if (!player.server) return;
    let name = player.username;
    player.server.runCommandSilent(`attribute ${name} minecraft:generic.attack_damage modifier remove ${ATTACK_DAMAGE_ID}`);
    player.server.runCommandSilent(`attribute ${name} minecraft:generic.max_health modifier remove ${MAX_HEALTH_ID}`);
    player.server.runCommandSilent(`attribute ${name} minecraft:generic.armor modifier remove ${ARMOR_ID}`);
    player.server.runCommandSilent(`attribute ${name} minecraft:generic.movement_speed modifier remove ${MOVEMENT_SPEED_ID}`);
}

function resetBaseAttributes(player) {
    let healthAttr = player.getAttribute($Attributes.MAX_HEALTH);
    let attackAttr = player.getAttribute($Attributes.ATTACK_DAMAGE);
    let armorAttr = player.getAttribute($Attributes.ARMOR);
    let speedAttr = player.getAttribute($Attributes.MOVEMENT_SPEED);

    if (healthAttr) healthAttr.setBaseValue(VANILLA_MAX_HEALTH);
    if (attackAttr) attackAttr.setBaseValue(VANILLA_ATTACK_DAMAGE);
    if (armorAttr) armorAttr.setBaseValue(VANILLA_ARMOR);
    if (speedAttr) speedAttr.setBaseValue(VANILLA_MOVEMENT_SPEED);
}

function updateDragonAttributes(player, isDragon, growth) {
    let attackAttr = player.getAttribute($Attributes.ATTACK_DAMAGE);
    let healthAttr = player.getAttribute($Attributes.MAX_HEALTH);
    let armorAttr = player.getAttribute($Attributes.ARMOR);
    let speedAttr = player.getAttribute($Attributes.MOVEMENT_SPEED);

    if (!isDragon) {
        safeRemoveModifier(attackAttr, ATTACK_DAMAGE_RL);
        safeRemoveModifier(healthAttr, MAX_HEALTH_RL);
        safeRemoveModifier(armorAttr, ARMOR_RL);
        safeRemoveModifier(speedAttr, MOVEMENT_SPEED_RL);

        nukeAllCustomModifiers(attackAttr);
        nukeAllCustomModifiers(healthAttr);
        nukeAllCustomModifiers(armorAttr);
        nukeAllCustomModifiers(speedAttr);

        commandRemoveModifiers(player);

        resetBaseAttributes(player);

        if (player.health > player.maxHealth) {
            player.health = player.maxHealth;
        }
        return;
    }

    let attackBuff = 4.0 + (growth * 0.5);
    let healthBuff = 4.0 + (growth * 1.5);
    let armorBuff = 1.0 + (growth * 0.5);
    let speedBuff = growth * 0.010;

    if (attackAttr) {
        let modifier = new $AttributeModifier(ATTACK_DAMAGE_RL, attackBuff, $AttributeModifier_Operation.ADD_VALUE);
        attackAttr.addOrUpdateTransientModifier(modifier);
    }
    if (healthAttr) {
        let oldMaxHealth = player.maxHealth;
        let modifier = new $AttributeModifier(MAX_HEALTH_RL, healthBuff, $AttributeModifier_Operation.ADD_VALUE);
        healthAttr.addOrUpdateTransientModifier(modifier);
        let newMaxHealth = player.maxHealth;
        if (newMaxHealth > oldMaxHealth) {
            player.heal(newMaxHealth - oldMaxHealth);
        }
    }
    if (armorAttr) {
        let modifier = new $AttributeModifier(ARMOR_RL, armorBuff, $AttributeModifier_Operation.ADD_VALUE);
        armorAttr.addOrUpdateTransientModifier(modifier);
    }
    if (speedAttr) {
        let modifier = new $AttributeModifier(MOVEMENT_SPEED_RL, speedBuff, $AttributeModifier_Operation.ADD_MULTIPLIED_BASE);
        speedAttr.addOrUpdateTransientModifier(modifier);
    }
}

function updateDragonPotions(player, isDragon, growth) {
    if (!isDragon) {
        if (player.server) {
            player.server.runCommandSilent(`effect clear ${player.username} minecraft:strength`);
            player.server.runCommandSilent(`effect clear ${player.username} minecraft:resistance`);
        }
        return;
    }
    let strengthAmp = Math.max(0, Math.min(4, Math.floor(growth / 12)));
    let resistanceAmp = Math.max(0, Math.min(2, Math.floor(growth / 24)));
    player.potionEffects.add('minecraft:strength', 300, strengthAmp, false, false);
    player.potionEffects.add('minecraft:resistance', 300, resistanceAmp, false, false);
}

function cleanPlayerSaveFile(player) {
    if (!player || player.level.isClientSide()) return;

    if (player.server) {
        player.server.runCommandSilent(`effect clear ${player.username} minecraft:health_boost`);
        player.server.runCommandSilent(`effect clear ${player.username} minecraft:strength`);
        player.server.runCommandSilent(`effect clear ${player.username} minecraft:resistance`);
    }

    let healthAttr = player.getAttribute($Attributes.MAX_HEALTH);
    let attackAttr = player.getAttribute($Attributes.ATTACK_DAMAGE);
    let armorAttr = player.getAttribute($Attributes.ARMOR);
    let speedAttr = player.getAttribute($Attributes.MOVEMENT_SPEED);

    safeRemoveModifier(healthAttr, MAX_HEALTH_RL);
    safeRemoveModifier(attackAttr, ATTACK_DAMAGE_RL);
    safeRemoveModifier(armorAttr, ARMOR_RL);
    safeRemoveModifier(speedAttr, MOVEMENT_SPEED_RL);

    nukeAllCustomModifiers(healthAttr);
    nukeAllCustomModifiers(attackAttr);
    nukeAllCustomModifiers(armorAttr);
    nukeAllCustomModifiers(speedAttr);

    commandRemoveModifiers(player);

    resetBaseAttributes(player);

    if (player.health > player.maxHealth) {
        player.health = player.maxHealth;
    }
}

PlayerEvents.loggedIn(event => cleanPlayerSaveFile(event.player));
PlayerEvents.respawned(event => cleanPlayerSaveFile(event.player));

PlayerEvents.tick(event => {
    const player = event.player;
    if (player.level.isClientSide()) return;

    let dragonCap = player.getCapability($Capabilities.DRAGON_CAPABILITY, null);
    let isDragon = dragonCap !== null && dragonCap.isDragon();
    let growth = isDragon ? dragonCap.getGrowth() : 0.0;

    let pData = player.persistentData;
    let wasDragon = pData.getBoolean('wasDragon');
    let lastGrowth = pData.getDouble('lastDragonGrowth');

    let stateChanged = (wasDragon !== isDragon) || (lastGrowth !== growth);
    let isNewPlayer = player.age < 5;
    let periodicCheck = (player.age % 40 === 0);

    if (stateChanged || isNewPlayer || periodicCheck) {
        pData.putBoolean('wasDragon', isDragon);
        pData.putDouble('lastDragonGrowth', growth);

        if (!isDragon && (stateChanged || periodicCheck)) {
            cleanPlayerSaveFile(player);
        }

        updateDragonAttributes(player, isDragon, growth);
        updateDragonPotions(player, isDragon, growth);
    }
});