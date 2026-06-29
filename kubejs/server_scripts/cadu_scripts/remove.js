// Remove itens do inventário do jogador no primeiro login
PlayerEvents.loggedIn(event => {
    const { player, server } = event;
    if (!player.stages.has('primeiro_login')) {
        player.stages.add('primeiro_login');
        server.scheduleInTicks(20, () => {

            // LISTA DE ITENS PARA REMOVER
            let itensParaRemover = [
                'enigmaticlegacy:cursed_ring',
                'etheria:magemicon',
                'patchouli:guide_book',
                'silentgear:material_book',
                'ars_nouveau:worn_notebook'
            ];

            itensParaRemover.forEach(item => {
                server.runCommandSilent(`clear ${player.username} ${item}`);
            });
        });
    }
})

const REMOVED_ITEMS = [
// --------------------- Davel Wings --------------------- //
    'wingsn:slime_wings',
    'wingsn:monarch_butterfly_wings',
    'wingsn:blue_butterfly_wings',
    'wingsn:angel_wings',
    'wingsn:bloody_angel_wings',
    'wingsn:bat_alt_wings',
    'wingsn:bat_wings',
    'wingsn:creamy_white_wings',
    'wingsn:demon_wings',
    'wingsn:enderdragon_wings',
    'wingsn:melan_wings',
    'wingsn:synapse_wings',
// --------------------- Modular Routers --------------------- //
    'modularrouters:energy_upgrade',
    'modularrouters:energy_output_module',
    'modularrouters:energy_distributor_module',
// --------------------- Iron Furnaces --------------------- //
    'ironfurnaces:augment_factory',
    'ironfurnaces:augment_generator',
// --------------------- Sophisticated Backpacks --------------------- //
    'sophisticatedbackpacks:battery_upgrade',
// --------------------- Construction Stick --------------------- //
    'constructionstick:template_battery',
// --------------------- Pipez --------------------- //
    'pipez:energy_pipe',
    'pipez:gas_pipe',
// --------------------- Enigmatic Legacy --------------------- //
    'enigmaticlegacy:cursed_ring'
];

// Remove as receitas que criam ou que usam os itens da lista
ServerEvents.recipes(event => {
    REMOVED_ITEMS.forEach(item => {
        event.remove({ input: item })
        event.remove({ output: item })
    })
})

// Remove os itens do jei
RecipeViewerEvents.removeEntries('item', event => {
    event.remove(REMOVED_ITEMS);
})

// Bloqueia o jogador de usar os itens da lista
ItemEvents.rightClicked(event => {
    if (REMOVED_ITEMS.includes(event.item.id)) {
        event.cancel()
        event.player.sendSystemMessage(`O item (${event.item.id}) está desativado.`)
    }
})

// Bloqueia o jogador de ter os itens da lista
PlayerEvents.inventoryChanged(event => {
    const player = event.player
    const inventory = player.inventory

    for (let i = 0; i < inventory.size(); i++) {
        let item = inventory.get(i)
        if (item && REMOVED_ITEMS.includes(item.id)) {
            item.count = 0
            player.sendSystemMessage(`O item ${item.id} foi removido do seu inventário por estar desativado.`)
        }
    }
})

// Remove gemas do Silent Gear
ServerEvents.recipes(event => {
    event.remove({ id: `silentgear:emerald_from_shards` })
    event.remove({ id: `silentgear:diamond_from_shards` })
})