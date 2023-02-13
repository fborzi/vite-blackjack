import _ from 'underscore';

/**
* This function creates a new deck
* @param {Array<string>} cardTypes For example: ['C', 'H', 'D', 'S']
* @param {Array<string>} specialCards For example: ['A', 'J', 'Q', 'K']
* @returns {Array<string>} returns a new shuffled deck
*/

export const createDeck = ( cardTypes, specialCards ) => {

    if( !cardTypes || cardTypes.length === 0 ) throw new Error(' Card types is needed as a string array.');
    if( !specialCards || specialCards.length === 0 ) throw new Error(' Special cards is needed as a string array.');

    let deck = [];

    for (let i = 2; i <= 10; i++) {
        for (let type of cardTypes) {
            deck.push(i + type);
        }
    }

    for (let type of cardTypes) {
        for (let special of specialCards) {
            deck.push(special + type);
        }
    }
    return _.shuffle(deck);
}