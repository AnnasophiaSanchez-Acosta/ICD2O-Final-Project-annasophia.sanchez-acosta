// Created by: Anna S.
// Created on: May 2025
// This is Menu Scene

/**
 * This class is the Menu Scene.
 */
class MenuScene extends Phaser.Scene {
  /**
   * This method is the constructor.
   */
  constructor () {
    super({ key: 'menuScene' })
    this.backgroundMenu = null
    this.startButton = null
  }
  
  /**
   * Can be define on your own Scenes.
   * This method is called by the Scene Manager when the scene starts,
   *   before preload() and create().
   * @param {object} data - Any data passed via ScenePlugin.add() or  ScenePlugin.start().
   */
  init (data) {
    this.cameras.main.setBackgroundColor('ffffff')
  }

  /**
   * Can be defined own your own Scenes.
   * Use it to load assets.
   */
  preload () {
    console.log('Menu Scene')
    this.load.image('Background-Menu', './images/backgroundMenu.png')
    this.load.image('Start-Button', './images/startButton.png')
  }

  /**
   * Can be defined own your own Scenes.
   * Use it to create your game objects.
   * @param {object} data - Any data passed via ScenePlugin.add() or  ScenePlugin.start().
   */
  create (data) {
    this.backgroundMenu = this.add.sprite(0, 0, 'Background-Menu')
    this.backgroundMenu.x = 1920 / 2
    this.backgroundMenu.y = 1080 / 2
    this.startButton = this.add.sprite(1920 / 2, 1080 / 2 + 100, 'Start-Button')
    this.startButton.setInteractive({ useHandCursor: true })
    this.startButton.on('pointerdown', () => this.clickButton())
  }

  /**
   * Should be overridden by your own Scenes.
   * This method is called once per game step while the scene is running.
   * @param {} time - The current time
   * @param {} delta The delta time in ms since the last frame.
   */
  update (time, delta) {
    //
  }

  clickButton () {
    this.scene.start('gameScene')
  }
}

export default MenuScene
