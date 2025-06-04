// Created by: Anna S.
// Created: Jun 2025

'use strict'

/**
 * This function flips a coin 
 */

function flipCoin() {
  const heads = document.getElementById('heads')
  const tails = document.getElementById('tails')

  // Initially show heads and hide tails
  heads.style.display = 'block'
  tails.style.display = 'none'

  // Simulate flip animation delay (2 seconds)
  setTimeout(() => {
    const randomNumber = Math.floor(Math.random() * 2)
    if (randomNumber === 0) {
      // Show heads, hide tails
      heads.style.display = 'block'
      tails.style.display = 'none'
    } else {
      // Show tails, hide heads
      heads.style.display = 'none'
      tails.style.display = 'block'
    }
  }, 2000)
}
