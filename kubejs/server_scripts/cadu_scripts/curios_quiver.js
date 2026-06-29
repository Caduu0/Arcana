ServerEvents.tags('item', event => {
    event.add('curios:quiver', '#minecraft:arrows');
});

let CuriosApi;
if (Platform.isLoaded('curios')) {
    CuriosApi = Java.loadClass('top.theillusivec4.curios.api.CuriosApi');
}

NativeEvents.onEvent('net.neoforged.neoforge.event.entity.living.LivingGetProjectileEvent', event => {
    let entity = event.getEntity();
    
    if (!entity.isPlayer()) return;

    let weapon = event.getProjectileWeaponItemStack();
    if (weapon.isEmpty()) return;

    let hasInfinity = false;
    let encs = weapon.getEnchantments();
    if (encs && !encs.isEmpty()) {
        encs.keySet().forEach(encHolder => {
            if (String(encHolder).includes("infinity")) {
                hasInfinity = true;
            }
        });
    }

    if (CuriosApi) {
        let curiosInvOpt = CuriosApi.getCuriosInventory(entity);
        if (curiosInvOpt.isPresent()) {
            let curiosInv = curiosInvOpt.get();
            let slotOpt = curiosInv.getCurios().get("quiver");
            
            if (slotOpt) {
                let stacks = slotOpt.getStacks();
                
                for (let i = 0; i < stacks.getSlots(); i++) {
                    let stackInSlot = stacks.getStackInSlot(i);
                    
                    if (!stackInSlot.isEmpty() && stackInSlot.hasTag('minecraft:arrows')) {
                        if (hasInfinity) {
                            let arrowCopy = stackInSlot.copy();
                            arrowCopy.setCount(1);
                            event.setProjectileItemStack(arrowCopy);
                        } else {
                            event.setProjectileItemStack(stackInSlot);
                        }
                        return;
                    }
                }
            }
        }
    }
});
