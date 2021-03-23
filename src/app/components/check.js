module.exports = (player, comp) => {
    let winner;
    if((player =='heads' && comp == 'tails')
        || (player =='tails' && comp == 'heads')) {
        winner = 'User';
    }else if(player === comp) {
        winner = 'Nobody'
    }else{
        winner = 'PC'
    }
    return {winner}
};