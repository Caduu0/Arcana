ServerEvents.tags('item', event => {
    event.add('curios:curio', 'toms_storage:adv_wireless_terminal');
})

ServerEvents.tags('item', event => {
    event.add('curios:face', 'create:goggles');
})

// Unified XP fluids
ServerEvents.tags('fluid', event => {
    const xpFluids = [
        "cofh_core:experience",
        "sophisticatedcore:xp_still",
        "create_enchantment_industry:experience",
        "mob_grinding_utils:fluid_xp",
        "reliquary:xp_still"
    ]

    event.add('c:experience', xpFluids)
    event.add('c:liquid_xp', xpFluids)
    event.add('forge:experience', xpFluids)
})