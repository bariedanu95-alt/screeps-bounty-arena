export function runHarvester(creep: Creep): void {
  const source = chooseSource(creep);
  if (!source) {
    creep.say('no source');
    return;
  }

  if (creep.store.getFreeCapacity(RESOURCE_ENERGY) > 0) {
    if (creep.harvest(source) === ERR_NOT_IN_RANGE) {
      creep.moveTo(source, { visualizePathStyle: { stroke: '#ffaa00' } });
    }
    return;
  }

  const spawn = Object.values(Game.spawns)[0];
  if (spawn && creep.transfer(spawn, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
    creep.moveTo(spawn, { visualizePathStyle: { stroke: '#ffffff' } });
  }
}

function chooseSource(creep: Creep): Source | undefined {
  const sources = Object.values(Game.spawns)[0]?.room.find(FIND_SOURCES) ?? [];
  if (creep.memory.sourceId) {
    const remembered = sources.find((source) => source.id === creep.memory.sourceId);
    if (remembered) return remembered;
  }

  const selected = sources[0];
  if (selected) creep.memory.sourceId = selected.id;
  return selected;
}
