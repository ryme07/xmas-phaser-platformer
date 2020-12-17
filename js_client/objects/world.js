var world = {
  tilemap: null,
  tileset: null,
  downLayer: null,
  worldLayer: null,
  topLayer: null,

  initWorld: function () {
    this.tilemap = games.scene.make.tilemap({ key: "map" });
    this.tileset = this.tilemap.addTilesetImage("tilesheet", "tiles");
    this.downLayer = this.tilemap.createStaticLayer("bot", this.tileset, 0, 0);
    this.worldLayer = this.tilemap.createStaticLayer(
      "world",
      this.tileset,
      0,
      0
    );
    this.topLayer = this.tilemap.createStaticLayer("top", this.tileset, 0, 0);

    this.worldLayer.setCollisionByProperty({ Collides: true });

    games.scene.physics.world.setBounds(
      0,
      0,
      this.tilemap.widthInPixels,
      this.tilemap.heightInPixels
    );
  },

  manageCollider: function () {
    games.scene.physics.add.collider(games.player.aPlayer, this.worldLayer);
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
};
