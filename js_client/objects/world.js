var world = {
  tilemap: null,
  tileset: null,
  downLayer: null,
  worldLayer: null,
  topLayer: null,
  overlapLayer: null,
  positionStart: null,

  initWorld: function () {
    this.tilemap = games.scene.make.tilemap({ key: "map" });
    this.tileset = this.tilemap.addTilesetImage("tilesheet", "tiles");
    this.downLayer = this.tilemap.createStaticLayer("bot", this.tileset, 0, 0);
    this.worldLayer = this.tilemap.createStaticLayer("world",this.tileset,0,0);
    this.topLayer = this.tilemap.createStaticLayer("top", this.tileset, 0, 0);
    this.overlapLayer = this.tilemap.createDynamicLayer("overlap",this.tileset,0,0);

    this.positionStart = this.tilemap.findObject("objects",(obj) => obj.name === "start");
    this.worldLayer.setCollisionByProperty({ Collides: true });

    games.scene.physics.world.setBounds(0,0,this.tilemap.widthInPixels,this.tilemap.heightInPixels);
  },

  manageCollider: function () {
    this.overlapLayer.setTileIndexCallback(13, this.collectGems, this);
    this.overlapLayer.setTileIndexCallback(51, this.collectGems, this);
    games.scene.physics.add.collider(games.player.aPlayer, this.worldLayer);
    games.scene.physics.add.overlap(games.player.aPlayer, this.overlapLayer);
  },

  manageCamera: function () {
    games.scene.cameras.main.startFollow(games.player.aPlayer);
    games.scene.cameras.main.setBounds(
      0,
      0,
      this.tilemap.widthInPixels,
      this.tilemap.heightInPixels
    );
   
  },
  collectGems: function (player, tile) {
    this.overlapLayer.removeTileAt(tile.x, tile.y).destroy();
  },
};
