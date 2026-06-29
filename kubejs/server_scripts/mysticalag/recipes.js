ServerEvents.recipes(event => {
    event.shaped('kubejs:magical_soil', ['ABC', 'DEF', 'GHI'], {
        A: 'mysticalagradditions:insanium_block',
        B: 'enigmaticlegacyplus:cosmic_heart',
        C: 'dragonsurvival:elder_dragon_heart',
        D: 'mysticalagriculture:awakened_supremium_growth_accelerator',
        E: 'mysticalagradditions:insanium_farmland',
        F: '#iceandfire:dragon_skulls',
        G: 'irons_spellbooks:lesser_spell_slot_upgrade',
        H: 'etheria:rune_knowledge',
        I: 'primalmagick:moonwood_sapling'
    }).id('cadu:magical_soil')

    function essenceCircle(result, essenceType) {
        event.shaped(result, ['aaa', 'a a', 'aaa'], { a: `mysticalagriculture:${essenceType}_essence` })
    }

    essenceCircle('allthemodium:allthemodium_nugget', 'allthemodium')
    essenceCircle('allthemodium:vibranium_nugget', 'vibranium')
    essenceCircle('allthemodium:unobtainium_nugget', 'unobtainium')
})