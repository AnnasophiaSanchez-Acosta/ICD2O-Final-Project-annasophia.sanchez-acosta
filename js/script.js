// Created by: Anna S.
// Created: Jun 2025

'use strict'

/**
 * This function flips a coin 
 */

'use strict'

function flipCoin() {
  const heads = document.getElementById('heads')
  const tails = document.getElementById('tails')

  // Immediately decide which side to show
  const randomNumber = Math.floor(Math.random() * 2)
  if (randomNumber === 0) {
    heads.style.display = 'block'
    tails.style.display = 'none'
  } else {
    heads.style.display = 'none'
    tails.style.display = 'block'
  }
}
