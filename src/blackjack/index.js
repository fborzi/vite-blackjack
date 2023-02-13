import _ from 'underscore';
import { createDeck, cardValue, takeCard, showCards, winner } from './usecases';

const myGame = (() => {
    'use strict'

    let deck         = [],
        playerPoints = [];
    
    const   types     = ['C', 'H', 'D', 'S'],
            specials  = ['A', 'J', 'Q', 'K'];


    //HTML References
    const   btnNew  = document.querySelector('#btnNew'),
            btnCard = document.querySelector('#btnCard'),
            btnStop = document.querySelector('#btnStop'),
            smalls = document.querySelectorAll('small'),
            divCards = document.querySelectorAll('.divCards');


    const newGame = ( numberOfPlayers = 2 ) => {
        deck = createDeck( types, specials );

        playerPoints = [];

        for( let i = 0; i < numberOfPlayers; i++ ){
            playerPoints.push(0);
        }

        smalls.forEach( elem => elem.innerText = 0);
        divCards.forEach( elem => elem.innerHTML = " ");

        btnCard.disabled = false;
        btnStop.disabled = false;
    }

    deck = createDeck( types, specials );

    // Computer will be the last position.
    const managePoints = ( card, turn ) => {
        playerPoints[turn] = playerPoints[turn] + cardValue( card );
        smalls[turn].innerText = playerPoints[turn];

        return playerPoints[turn];
    }

    // const winner = () => {

    //     const[ points, computerPoints ] = playerPoints;

    //     setTimeout(() => {
    //         if (computerPoints === playerPoints) {
    //             alert('TIE!');
    //         } else if (points > 21) {
    //             alert('YOU LOST :(');
    //         } else if (computerPoints > 21) {
    //             alert('YOU WON!');
    //         } else {
    //             alert('YOU LOST :(');
    //         }
    //     }, 100);
    // }

    const computerTurn = ( points ) => {
        let computerPoints = 0;

        do {
            const card = takeCard( deck );
            computerPoints = managePoints( card, playerPoints.length - 1 );

            showCards( card, playerPoints.length - 1, divCards );

        } while ((computerPoints < points) && (points <= 21));

        winner( playerPoints);
        
    }

    //EVENTS

    btnCard.addEventListener('click', () => { //The second argument could be a normal function or an arrow function

        const card = takeCard( deck );
        const playerPoints = managePoints( card, 0 );
        // smalls[0].innerText = playerPoints;

        showCards( card, 0, divCards );

        if (playerPoints > 21) {
            btnCard.disabled = true;
            btnStop.disabled = true;
            computerTurn(playerPoints);

        } else if (playerPoints === 21) {
            btnCard.disabled = true;
            btnStop.disabled = true;
            computerTurn(playerPoints);
        }
    });

    btnStop.addEventListener('click', () => {
        btnCard.disabled = true;
        btnStop.disabled = true;
        computerTurn(playerPoints[0]);
    });

    btnNew.addEventListener('click', () => {
        newGame();
    })

    return {
        newGame
    };

})();

