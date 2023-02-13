/**
* This function returns the card value as an integer
* @param {Array<string>} card For example: '2C'
* @returns {number} returns a card value as an integer
*/

export const cardValue = ( card ) => {
    const value = card.substring(0, card.length - 1);
    return  ( isNaN( value )) ? 
            ( value === 'A' ) ? 11 : 10
            :   value * 1;
}