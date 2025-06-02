/* global Phaser */
// Created by: Anna S.
// Created on: May 2025
// This is Game Scene

/**
 * This class is Game Scene
 */
export class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'GameScene' });

    // Initialize variables here if you want
    this.coinImage = null;
    this.resultText = null;
    this.albumImages = [];
    this.albumX = 50;
    this.albumY = 550;
    this.flipKey = null;
  }

  preload() {
    this.load.image('heads', 'heads.png');
    this.load.image('tails', 'tails.png');
  }

  create() {
    this.coinImage = this.add.image(400, 250, 'heads').setScale(0.5);

    this.resultText = this.add.text(300, 400, '', {
      fontSize: '24px',
      color: '#000000',
    });

    this.add.text(250, 470, 'Press "F" to Flip the Coin', {
      fontSize: '28px',
      color: '#333333',
    });

    this.flipKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
  }

  update() {
    if (Phaser.Input.Keyboard.JustDown(this.flipKey)) {
      this.flipCoin();
    }
  }

  flipCoin() {
    let answer;
    if (Math.random() < 0.5) {
      answer = 'Yes';
    } else {
      answer = 'No';
    }

    if (answer === 'Yes') {
      this.coinImage.setTexture('heads');
    } else {
      this.coinImage.setTexture('tails');
    }

    this.resultText.setText('Answer: ' + answer);

    const smallKey = answer === 'Yes' ? 'heads' : 'tails';
    const smallImg = this.add.image(this.albumX, this.albumY, smallKey).setScale(0.2);
    this.albumImages.push(smallImg);

    this.albumX += 60;
    if (this.albumX > 740) {
      this.albumX = 50;
      this.albumY += 60;
    }
  }
}
