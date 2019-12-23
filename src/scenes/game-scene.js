export class GameScene extends Phaser.Scene {
  preload() {
    //
  }
  create() {
    this.add.image(0, 0, "logo").setOrigin(0, 0);
    const redCube = this.add.image(100, 100, "mainAtlas", "cube_red_0");
    redCube.setAlpha(1, 1, 0.1, 1);
    redCube.angle = 45;
    redCube.setScale(0.6);
  }
  update() {
    //
  }
}
