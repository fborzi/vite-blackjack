
/**
* This function takes a card from the deck
* @param {Array<string>} deck For example: ['2C', '2H', '2D', '2S']
* @returns {Array<string>} returns a card from the deck
*/

export const takeCard = ( deck ) => {
    if ( !deck || deck.length === 0 ) throw new Error( 'There is no more cards left' );

    return deck.pop();
}