export function validPlayers(player1, player2){
    if (player1.name === "" || player2.name === ""){
        return false;
    } 
    return true;
}