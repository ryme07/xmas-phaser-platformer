var games = {
  scene: null,
  world: world,
  player: player,
  cursor: null,
};

function preload() {
  games.scene = this;
  games.scene.load.image("tiles", "tilesheet.png");
  games.scene.load.tilemapTiledJSON("map", "platformer.json");
  games.scene.load.atlas("player", "player.png", "playerAtlas.json");
}
function create() {
  games.world.initWorld();
  games.player.initPlayer();
  games.player.generatePlayerAnimations();
  games.world.manageCollider();
  games.cursor = games.scene.input.keyboard.createCursorKeys();
  // games.player.aPlayer.play("playerWalk");

  games.world.manageCamera();
}
function update(time, delta) {
  games.player.manageMove();
}
