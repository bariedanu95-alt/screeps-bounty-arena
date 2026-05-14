import { runTowerDefense } from './defense/towers';
import { ensureBasicBuilders, ensureBasicHarvesters, ensureBasicUpgraders } from './planning/spawn';
import { runBuilder } from './roles/builder';
import { runHarvester } from './roles/harvester';
import { runUpgrader } from './roles/upgrader';
import { cleanupDeadCreeps, migrateRoomMemory } from './memory';

export function loop(): void {
  cleanupDeadCreeps();
  migrateRoomMemory();

  const rooms = new Set<Room>();

  for (const spawn of Object.values(Game.spawns)) {
    rooms.add(spawn.room);
    ensureBasicHarvesters(spawn);
    ensureBasicUpgraders(spawn);
    ensureBasicBuilders(spawn);
  }

  for (const room of rooms) {
    runTowerDefense(room);
  }

  for (const creep of Object.values(Game.creeps)) {
    switch (creep.memory.role) {
      case 'builder':
        runBuilder(creep);
        break;
      case 'upgrader':
        runUpgrader(creep);
        break;
      case 'harvester':
      default:
        runHarvester(creep);
        break;
    }
  }
}

