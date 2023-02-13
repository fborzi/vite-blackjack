//  import { cardValue, takeCard, showCards, winner } from "./index";

/**
* This function manages the computer´s turn to play
* @param {Number} points minimal amount of points needed to win
* @param {Array<string>} deck For example: ['2C', '2H', '2D', '2S']
* @param {HTMLElement} divCards HTML element for cards
* @returns {Void} returns void
*/

// const managePoints = ( card, turn ) => {
//     playerPoints[turn] = playerPoints[turn] + cardValue( card );
//     smalls[turn].innerText = playerPoints[turn];

//     return playerPoints[turn];
// }

// export const computerTurn = ( playerPoints ) => {
//     let computerPoints = 0;

//     do {
//         const card = takeCard( deck );
//         computerPoints = managePoints( card, playerPoints.length - 1 );

//         showCards( card, playerPoints.length - 1, divCards );

//     } while ((computerPoints < playerPoints[0]) && (playerPoints[0] <= 21));

//     winner( playerPoints );
    
// }