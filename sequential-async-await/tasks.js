// THIS MODULE PROVIDES FUNCTIONS THAT HELP TO CONVERT CODE OR LANGUAGE UTILITIES
const util = require('util');

// FUNCTION PROMISIFY(): CONVERTS CALLBACK FUNCTIONS TO PROMISES OR ASYNC-AWAIT FUNCTIONS
const sleep = util.promisify(setTimeout);

// EXAMPLE: QUERY TO A DATABASE
module.exports = {

    async taskOne(){

        try {
            // HELPS US TO SIMULATE AN ERROR IN OUR CODE
            throw new Error('SOME ERROR');
    
            await sleep(4000);
            return 'First Value';
            
        } catch (error) {
            console.log(error);
        }

    },

    async taskTwo(){

        try {
            await sleep(2000);
            return 'Second Value';
            
        } catch (error) {
            console.log(error);
        }

    }
}