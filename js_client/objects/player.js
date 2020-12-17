var player = {
  aPlayer: null,
  isJumping: false,

  initPlayer: function () {
    this.aPlayer = games.scene.physics.add.sprite(
      200,
      200,
      "player",
      "player_stand"
    );
    this.aPlayer.setCollideWorldBounds(true);
  },

  generatePlayerAnimations: function () {
    games.scene.anims.create({
      key: "playerWalk",
      frames: game.anims.generateFrameNames("player", {
        prefix: "player_walk",
        start: 1,
        end: 2,
      }),
      frameRate: 5,
      repeat: -1,
    });

    games.scene.anims.create({
      key: "playerIdle",
      frames: [
        { key: "player", frame: "player_stand" },
        { key: "player", frame: "player_idle" },
      ],
      frameRate: 2,
      repeat: -1,
    });
  },

  manageMove: function () {
    if (games.cursor.left.isDown) {
      this.aPlayer.setVelocityX(-200);
      this.aPlayer.setFlip(true, false);
    } else if (games.cursor.right.isDown) {
      this.aPlayer.setVelocityX(200);
      this.aPlayer.setFlip(false, false);
    } else {
      this.aPlayer.setVelocityX(0);
    }

    //jump animation
    if (games.cursor.up.isDown && this.aPlayer.body.onFloor()) {
      this.aPlayer.setVelocityY(-320);
    }

    if (this.aPlayer.body.onFloor()) {
      this.isJumping = false;
    } else {
      this.isJumping = true;
    }

    if (this.isJumping) {
      this.aPlayer.setTexture("player", "player_jump");
    } else {
      if (games.cursor.left.isDown) {
        this.aPlayer.anims.play("playerWalk", true);
      } else if (games.cursor.right.isDown) {
        this.aPlayer.anims.play("playerWalk", true);
      } else {
        this.aPlayer.anims.play("playerIdle", true);
      }
    }
  },
};
