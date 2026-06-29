const melting = [
    ["occultism:emerald_dust", 100, "productivemetalworks:molten_emerald"],
    ["occultism:amethyst_dust", 100, "productivemetalworks:molten_amethyst"],
  ];
  
  ServerEvents.recipes(event => {
    melting.forEach(([input, amount, fluid]) => {
      let ingredient = { item: input };
      if (input.includes("#")) {
        ingredient = { tag: input.split("#")[1] };
      }
      event.custom({
          type: "productivemetalworks:item_melting",
          ingredient: ingredient,
          maximum_temperature: 0,
          minimum_temperature: 1000,
          result: [{amount: amount, id: fluid,}],
        }).id(`productivemetalworks:melting/occultism/${input.split(":")[1]}`);
    });
  });