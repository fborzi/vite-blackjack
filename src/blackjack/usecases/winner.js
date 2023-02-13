/**
* This function shows who is the winner
* @param {ArrayNumber} totalPoints Array with all points from every player
* @returns {VoidFunction} returns void
*/

export const winner = ( totalPoints ) => {

    const[ points, computerPoints ] = totalPoints;

    setTimeout(() => {
        if (computerPoints === totalPoints) {
            alert('TIE!');
        } else if (points > 21) {
            alert('YOU LOST :(');
        } else if (computerPoints > 21) {
            alert('YOU WON!');
        } else {
            alert('YOU LOST :(');
        }
    }, 100);
}