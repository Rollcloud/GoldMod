//serpulo presets
const goldMountains = new SectorPreset("goldMountains", Planets.serpulo, 10);
goldMountains.captureWave = 30;
goldMountains.objectives = Seq.with(
new Objectives.SectorComplete(SectorPresets.stainedMountains),
new Objectives.Research(Vars.content.getByName(ContentType.block, "goldmod-goldCrucible")),
new Objectives.Research(Vars.content.getByName(ContentType.block, "goldmod-goldForge")),
new Objectives.Research(Blocks.laserDrill)
);
goldMountains.alwaysUnlocked = true;

const goldMines = new JavaAdapter(SectorPreset, {}, "goldMines", Planets.serpulo, 34);

const abandonedDesert = new JavaAdapter(SectorPreset, {}, "abandonedDesert", Planets.serpulo, 103);
abandonedDesert.captureWave = 20;

const reignLair = new JavaAdapter(SectorPreset, {}, "eradLair", Planets.serpulo, 67);
reignLair.captureWave = 10;
