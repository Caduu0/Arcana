ServerEvents.recipes(event => {

// --------------------- Minecraft --------------------- //
// // Ender Eye
// event.remove({ output: 'minecraft:ender_eye' })
// event.shaped(
//   'minecraft:ender_eye',
//   [
//     ' A ',
//     'ABA',
//     ' A '
//   ],
//   {
//     A: 'minecraft:iron_block',
//     B: '#c:bones'
//   }
// )
// --------------------- Baubley Heart ---------------------  //
// Baubley Heart
event.remove({ output: 'bhc:canister' })
event.shaped(
  'bhc:canister',
  [
    ' A ',
    'ABA',
    ' A '
  ],
  {
    A: 'minecraft:iron_block',
    B: '#c:bones'
  }
)
// --------------------- Davel Wings ---------------------  //
// Fairy Wings
event.remove({ output: 'wingsn:fairy_wings' })
event.shaped(
  'wingsn:fairy_wings',
  [
    'FNF',
    'DPD',
    'D D'
  ],
  {
    F: 'minecraft:lily_of_the_valley',
    N: 'minecraft:netherite_ingot',
    D: 'minecraft:diamond',
    P: 'wingsn:fairy_dust'
  }
)
// --------------------- Mob Grinding ---------------------   //
// Mob Grinding Spikes
event.remove({ output: 'mob_grinding_utils:spikes' })
event.shaped(
  'mob_grinding_utils:spikes',
  [
    '   ',
    ' A ',
    'ABA'
  ],
  {
    A: 'minecraft:diamond_sword',
    B: 'minecraft:iron_block'
  }
)
// Mob Grinding Saw
event.remove({ output: 'mob_grinding_utils:saw' })
event.shaped(
  'mob_grinding_utils:saw',
  [
    'ABA',
    'DED',
    'BCB'
  ],
  {
    A: 'minecraft:netherite_sword',
    B: 'minecraft:netherite_ingot',
    C: 'minecraft:diamond_block',
    D: 'mob_grinding_utils:spikes',
    E: 'minecraft:redstone_block'
  }
)
// Entity Spawner
event.remove({ output: 'mob_grinding_utils:entity_spawner' })
event.shaped(
  'mob_grinding_utils:entity_spawner',
  [
    'AOA',
    'BRB',
    'DPD'
  ],
  {
    A: 'minecraft:ender_eye',
    B: 'mob_grinding_utils:solid_xp_block',
    R: 'minecraft:redstone_block',
    D: 'minecraft:diamond_block',
    O: 'minecraft:egg',
    P: 'minecraft:piston'
  }
)
// Mob Fan
event.remove({ output: 'mob_grinding_utils:fan' })
event.shaped(
  'mob_grinding_utils:fan',
  [
    'RFR',
    'FVF',
    'RFR'
  ],
  {
    R: 'minecraft:redstone_block',
    F: 'minecraft:iron_block',
    V: 'create:propeller'
  }
)
// Xp Solidifier
event.remove({ output: 'mob_grinding_utils:xpsolidifier' })
event.shaped(
  'mob_grinding_utils:xpsolidifier',
  [
    ' P ',
    'CHC',
    ' T '
  ],
  {
    P: 'minecraft:piston',
    C: 'mob_grinding_utils:entity_conveyor',
    H: 'minecraft:hopper',
    T: 'mob_grinding_utils:jumbo_tank'
  }
)
// Mob Masher Upgrade Sharpness
event.remove({ output: 'mob_grinding_utils:saw_upgrade_sharpness' })
event.shaped(
  'mob_grinding_utils:saw_upgrade_sharpness',
  [
    'GSG',
    'SRS',
    'GSG'
  ],
  {
    G: 'minecraft:gold_ingot',
    S: 'minecraft:diamond_sword',
    R: 'minecraft:redstone_block',
  }
)
// Mob Masher Upgrade Looting
event.remove({ output: 'mob_grinding_utils:saw_upgrade_looting' })
event.shaped(
  'mob_grinding_utils:saw_upgrade_looting',
  [
    'GDG',
    'DRD',
    'GDG'
  ],
  {
    G: 'minecraft:gold_ingot',
    D: 'minecraft:diamond',
    R: 'minecraft:redstone_block'
  }
)
// Mob Masher Upgrade Beheading
event.remove({ output: 'mob_grinding_utils:saw_upgrade_beheading' })
event.shaped(
  'mob_grinding_utils:saw_upgrade_beheading',
  [
    'GDG',
    'FRF',
    'GDG'
  ],
  {
    G: 'minecraft:gold_ingot',
    D: 'minecraft:diamond_helmet',
    F: 'minecraft:iron_helmet',
    R: 'minecraft:redstone_block'
  }
)
// --------------------- Cobblegen Galore ---------------------   //
// Stone Block Generator
event.remove({ output: 'cobblegengalore:block_gen_stone' })
event.shaped(
  'cobblegengalore:block_gen_stone',
  [
    'AAA',
    'GCG',
    'AAA'
  ],
  {
    A: 'allthecompressed:stone_1x',
    G: 'allthecompressed:glass_1x',
    C: 'minecraft:recovery_compass'
  }
)
// Copper Block Generator
event.remove({ output: 'cobblegengalore:block_gen_copper' })
event.shaped(
  'cobblegengalore:block_gen_copper',
  [
    'AAA',
    'GCG',
    'AAA'
  ],
  {
    A: 'allthecompressed:copper_block_1x',
    G: 'allthecompressed:glass_1x',
    C: 'cobblegengalore:block_gen_stone'
  }
)
// Iron Block Generator
event.remove({ output: 'cobblegengalore:block_gen_iron' })
event.shaped(
  'cobblegengalore:block_gen_iron',
  [
    'AAA',
    'GCG',
    'AAA'
  ],
  {
    A: 'allthecompressed:iron_block_1x',
    G: 'allthecompressed:glass_1x',
    C: 'cobblegengalore:block_gen_copper'
  }
)
// Gold Block Generator
event.remove({ output: 'cobblegengalore:block_gen_gold' })
event.shaped(
  'cobblegengalore:block_gen_gold',
  [
    'AAA',
    'GCG',
    'AAA'
  ],
  {
    A: 'allthecompressed:gold_block_1x',
    G: 'allthecompressed:glass_1x',
    C: 'cobblegengalore:block_gen_iron'
  }
)

// Emerald Block Generator
event.remove({ output: 'cobblegengalore:block_gen_emerald' })
event.shaped(
  'cobblegengalore:block_gen_emerald',
  [
    'AAA',
    'GCG',
    'AAA'
  ],
  {
    A: 'allthecompressed:emerald_block_1x',
    G: 'allthecompressed:glass_1x',
    C: 'cobblegengalore:block_gen_gold'
  }
)

// Diamond Block Generator
event.remove({ output: 'cobblegengalore:block_gen_diamond' })
event.shaped(
  'cobblegengalore:block_gen_diamond',
  [
    'AAA',
    'GCG',
    'AAA'
  ],
  {
    A: 'allthecompressed:diamond_block_1x',
    G: 'allthecompressed:glass_1x',
    C: 'cobblegengalore:block_gen_emerald'
  }
)

// Netherite Block Generator
event.remove({ output: 'cobblegengalore:block_gen_netherite' })
event.shaped(
  'cobblegengalore:block_gen_netherite',
  [
    'AAA',
    'GCG',
    'AAA'
  ],
  {
    A: 'allthecompressed:netherite_block_1x',
    G: 'allthecompressed:glass_1x',
    C: 'cobblegengalore:block_gen_diamond'
  }
)

// --------------------- Modular Routers --------------------- //
// Modular Router
  event.remove({ output: 'modularrouters:modular_router' })
  event.shaped(
    'modularrouters:modular_router',
    [
      'AGA',
      'GCG',
      'AGA'
    ],
    {
      A: 'minecraft:iron_block',
      G: 'minecraft:iron_bars',
      C: 'modularrouters:blank_module'
    }
  )

// --------------------- Pipez --------------------- //
// Universal Pipe
event.remove({ output: 'pipez:universal_pipe' })
event.shaped(
  Item.of('pipez:universal_pipe', 6),
  [
    'IAF',
    'ARA',
    'FAI'
  ],
  {
    A: 'minecraft:iron_ingot',
    R: 'minecraft:redstone_block',
    F: 'pipez:fluid_pipe',
    I: 'pipez:item_pipe'
  }
)
// --------------------- Temporal Pouch --------------------- //
// Temporal Pouch
event.remove({ output: 'gag:time_sand_pouch' })
event.shaped(
  'gag:time_sand_pouch',
  [
    'ABC',
    'DEF',
    'GHI'
  ],
  {
    A: 'supplementaries:clock_block',
    B: 'minecraft:clock',
    C: 'create:cuckoo_clock',
    D: 'mythrais:clockface_small',
    E: 'elementalcraft:shrine_upgrade_overclocked_acceleration',
    F: 'mythrais:clockface_large',
    G: 'bibliocraft:oak_fancy_clock',
    H: 'utilitarian:redstone_clock',
    I: 'bibliocraft:oak_grandfather_clock'
  }
)

// --------------------- Torch Master --------------------- //
// Feral Lantern
event.remove({ output: 'torchmaster:feral_flare_lantern' })
event.shaped(
  'torchmaster:feral_flare_lantern',
  [
    ' A ',
    'VGV',
    ' A '
  ],
  {
    A: 'minecraft:diamond',
    G: 'minecraft:glowstone',
    V: 'minecraft:tinted_glass'
  }
)

// Mega Torch
event.remove({ output: 'torchmaster:megatorch' })
event.shaped(
  'torchmaster:megatorch',
  [
    'FFF',
    'FAF',
    'FFF'
  ],
  {
    F: 'torchmaster:feral_flare_lantern',
    A: 'minecraft:netherite_ingot'
  }
)

// --------------------- Compass --------------------- //
// Nature's Compass
event.remove({ output: 'naturescompass:naturescompass' })
event.custom({
    type: 'mysticalagriculture:infusion',
    
    // O item que vai no Altar central
    input: { 
        item: 'minecraft:recovery_compass'
    },
    
    // Os itens que vão nos Pedestais
    ingredients: [
        { item: 'mysticalagriculture:fertilized_essence' },     // Topo-Esquerda
        { item: 'mysticalagriculture:prudentium_essence' },     // Topo
        { item: 'mysticalagriculture:fertilized_essence' },     // Topo-Direita
        { item: 'mysticalagriculture:prudentium_essence' },     // Direita
        { item: 'mysticalagriculture:fertilized_essence' },     // Baixo-Direita
        { item: 'mysticalagriculture:prudentium_essence' },     // Baixo
        { item: 'mysticalagriculture:fertilized_essence' },     // Baixo-Esquerda
        { item: 'mysticalagriculture:prudentium_essence' }      // Esquerda
    ],
    result: {
        id: 'naturescompass:naturescompass', 
        count: 1
    }
})

// Explorer's Compass
event.remove({ output: 'explorerscompass:explorerscompass' })
event.custom({
    type: 'mysticalagriculture:infusion',
    
    // O item que vai no Altar central
    input: { 
        item: 'minecraft:recovery_compass'
    },
    
    // Os itens que vão nos Pedestais
    ingredients: [
        { item: 'mysticalagriculture:fertilized_essence' },   // Topo-Esquerda
        { item: 'mysticalagriculture:imperium_essence' },     // Topo
        { item: 'mysticalagriculture:fertilized_essence' },   // Topo-Direita
        { item: 'mysticalagriculture:imperium_essence' },     // Direita
        { item: 'mysticalagriculture:fertilized_essence' },   // Baixo-Direita
        { item: 'mysticalagriculture:imperium_essence' },     // Baixo
        { item: 'mysticalagriculture:fertilized_essence' },   // Baixo-Esquerda
        { item: 'mysticalagriculture:imperium_essence' }      // Esquerda
    ],
    result: {
        id: 'explorerscompass:explorerscompass', 
        count: 1
    }
})

// --------------------- AllTheMods --------------------- //
// Teleport Pad
event.remove({ output: 'allthemodium:teleport_pad' })
event.custom({
    type: 'mysticalagriculture:infusion',
    
    // O item que vai no Altar central
    input: { 
        item: 'allthemodium:allthemodium_block'
    },
    
    // Os itens que vão nos Pedestais
    ingredients: [
        { item: 'allthemodium:unobtainium_block' },   // Topo-Esquerda
        { item: 'allthemodium:vibranium_block' },     // Topo
        { item: 'allthemodium:unobtainium_block' },   // Topo-Direita
        { item: 'allthemodium:vibranium_block' },     // Direita
        { item: 'allthemodium:unobtainium_block' },   // Baixo-Direita
        { item: 'allthemodium:vibranium_block' },     // Baixo
        { item: 'allthemodium:unobtainium_block' },   // Baixo-Esquerda
        { item: 'allthemodium:vibranium_block' }      // Esquerda
    ],
    result: {
        id: 'allthemodium:teleport_pad', 
        count: 1
    }
})
})