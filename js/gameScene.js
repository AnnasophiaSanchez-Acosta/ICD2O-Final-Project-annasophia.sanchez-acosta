/* global Phaser */
// Created by: Anna S.
// Created on: May 2025
// This is Game Scene

class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: "gameScene" });

    this.coinImage = null;
    this.flipButton = null;
    this.scoreText = null;
    this.resultText = null;
    this.flipCount = 0;
  }

  preload() {
    this.load.image("heads", "./images/heads-coin.png");
    this.load.image("tails", "./images/tails-coin.png");
    this.load.image("flipButton", "./images/flipButton.png");
  }

  create() {
    this.coinImage = this.add
      .image(this.cameras.main.centerX, 300, "heads")
      .setScale(0.5);

    this.scoreText = this.add.text(20, 20, "Flips: 0", {
      fontSize: "32px",
      color: "#000000",
    });

    this.resultText = this.add.text(20, 60, "", {
      // new text below flips count
      fontSize: "28px",
      color: "#000000",
    });

    this.flipButton = this.add
      .image(this.cameras.main.centerX, 650, "flipButton")
      .setScale(0.5);
    this.flipButton.setInteractive({ useHandCursor: true });
    this.flipButton.on("pointerdown", () => this.flipCoin());
  }

  flipCoin() {
    let answer;
    if (Math.random() < 0.5) {
      answer = "heads";
    } else {
      answer = "tails";
    }

    this.flipCount++;
    this.scoreText.setText("Flips: " + this.flipCount);
    this.resultText.setText(
      "Result: " + answer.charAt(0).toUpperCase() + answer.slice(1)
    );
  }
}

export default GameScene;
