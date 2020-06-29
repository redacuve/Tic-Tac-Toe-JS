export function validPlayers(player1, player2){
    if (player1.name === ""){
        // mandar a alerta del dom
        return false;
    } else if (player2.name === ""){
        //mandar alerta al dom
        return false;
    }
    return true;
}