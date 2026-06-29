BlockEvents.rightClicked(event => {
    const { block, hand, player } = event;

    if (hand != 'main_hand' || player.isCrouching() || !block.hasTag('minecraft:doors') || block.id.startsWith('create:')) return;

    let isCurrentlyOpen = block.properties.open == 'true';
    let facing = block.properties.facing;
    let hinge = block.properties.hinge;
    let willOpen = !isCurrentlyOpen;
    let directions = ['north', 'south', 'east', 'west'];

    directions.forEach(dir => {
        let neighbor = block.offset(dir);
        
        if (neighbor.id == block.id) {
            if (neighbor.properties.facing == facing && neighbor.properties.hinge != hinge) {

                let newProps = {};
                for (let key in neighbor.properties) {
                    newProps[key] = neighbor.properties[key];
                }
                
                newProps.open = willOpen ? 'true' : 'false';
                
                neighbor.set(neighbor.id, newProps);
            }
        }
    });
});