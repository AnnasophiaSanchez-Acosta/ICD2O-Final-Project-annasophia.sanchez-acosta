//Created by Mr. Coxall updated by Anna S.
//Created on April 2025
//This is the Phaser3 game configuration file

// scene import statements
import MenuScene from "./menuScene.js"
import GameScene from "./gameScene.js"

// create the new scenes
const menuScene = new MenuScene()
const gameScene = new GameScene()

/**
 * Start Coin Flip Game
 */
const config = {
  type: CoinFlip.AUTO,
  width: 1920,
  height: 1080,
  physics: {
    default: "arcade",
    arcade: {
      debug: false,
    },
  },
  // set background color
  backgroundColor: 0x5f6e7a,
  scale: {
    mode: CoinFlip.Scale.FIT,
    // we place it in the middle of the page
    autoCenter: CoinFlip.Scale.CENTER_BOTH,
  },
}
const game = new CoinFlip.Game(config)
//console.log(game)

// load scenes
// Note: remember any "key" is global and can not be reused
game.scene.add("menuScene", menuScene)
game.scene.add("gameScene", gameScene)

// the start scene
game.scene.start("menuScene")

