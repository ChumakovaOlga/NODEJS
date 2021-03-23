const selector = require('../../utils/radio');
const check = require('./check');
const logger = require('./logger');

function randomize() {
    return Math.floor(Math.random() * 3 + 1);
}
function translate(key) {
    const variants = {
        '1': 'heads',
        '2': 'tails'
    };
    return variants[key]
}
function getAI(){
    return translate(randomize())
}
module.exports = async () => {
    let user, pc;
    let winner;
    try{
        pc = getAI();
        user = await selector({
            name:'HeadsTails',
            message: 'Select Unit',
            choices: [
                'heads',
                'tails'
            ]
        });
        winner = check(user, pc);
    }
    catch(err) {
        // err = true;
        console.log('Crush', err)
    }
    finally {
        if(winner) {
           await logger(winner, {user, pc});
        }else {
           await logger(null, {pc: null, user: null});
        }
    }
}




