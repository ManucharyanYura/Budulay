import { GameScene } from "./scenes/game-scene";
import { PreloadScene } from "./scenes/preload-scene";

export class Game extends Phaser.Game {
  constructor(gameConfig) {
    super(gameConfig);
    this._init();
  }
  _init() {
    this.scene.add("preloadScene", new PreloadScene());
    this.scene.add("gameScene", new GameScene());
  }
}
