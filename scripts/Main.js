import { world } from "@minecraft/server";

world.afterEvents.playerBreakBlock.subscribe(data => {
  if (!data.player.hasTag("nuker")) return;

  const bx = data.block.x;
  const by = data.block.y;
  const bz = data.block.z;

  data.player.runCommandAsync(`fill ${bx - 3} ${by - 3} ${bz - 3} ${bx + 3} ${by + 3} ${bz + 3} air 0 destroy`);
})