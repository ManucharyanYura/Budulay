import { SceneNames } from "../constants";

export class PreloadScene extends Phaser.Scene {
  preload() {
    this.load.path = "./src/assets/";
    this.load.image("logo", "logo.png");
    this.load.atlas("mainAtlas", "Atlas/main.png", "Atlas/main.json");
  }
  create() {
    this.game.scene.stop(SceneNames.preload);
    this.game.scene.start(SceneNames.game);
  }
  update() {
    //
  }
}
