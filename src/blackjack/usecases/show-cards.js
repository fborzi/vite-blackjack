/**
* This function shows cards in HTML
* @param {String} card For example: '2C'
* @param {Number} turn represents which player plays - For example: 1
* @param {HTMLElement} divCards HTML element for cards
* @returns {VoidFunction} returns void
*/

export const showCards = ( card, turn, divCards ) => {
    const cardImage = document.createElement('img');
    cardImage.src = `assets/cards/${card}.png`;
    cardImage.classList.add('card');
    divCards[turn].append(cardImage);
}