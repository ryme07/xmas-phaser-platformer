var config = {
  type: Phaser.AUTO,
  backgroundColor: "#ccccff",
  width: 800,
  height: 600,
  scene: {
    preload: preload,
    create: create,
    update: update,
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 500 },
    },
  },
};

const game = new Phaser.Game(config);
var cameraControls;

function preload() {
  this.load.image("tiles", "tilesheet.png");
  this.load.tilemapTiledJSON("map", "platformer.json");
  this.load.atlas("player", "player.png", "playerAtlas.json");
}
function create() {
  this.tilemap = this.make.tilemap({ key: "map" });
  this.tileset = this.tilemap.addTilesetImage("tilesheet", "tiles");

  var player = this.add.sprite(200, 200, "player", "Idle1");

  this.downLayer = this.tilemap.createStaticLayer("bot", this.tileset, 0, 0);
  this.worldLayer = this.tilemap.createStaticLayer("world", this.tileset, 0, 0);
  this.topLayer = this.tilemap.createStaticLayer("top", this.tileset, 0, 0);

  var cursors = this.input.keyboard.createCursorKeys();

  var controlCameraConfig = {
    camera: this.cameras.main,
    left: cursors.left,
    right: cursors.right,
    up: cursors.up,
    down: cursors.down,
    speed: 0.5,
  };

  cameraControls = new Phaser.Cameras.Controls.FixedKeyControl(
    controlCameraConfig
  );
}
function update(time, delta) {
  cameraControls.update(delta);
}
