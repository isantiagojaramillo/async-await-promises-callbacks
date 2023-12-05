const util = require('util');

const sleep = util.promisify(setTimeout);

module.exports = {

    async taskOne(){

        try {
            // throw new Error('SOME ERROR');
            await sleep(4000);
            return 'First Value';
            
        } catch (error) {
            console.log(error);
        }

    },

    async taskTwo(){

        try {
            // throw new Error('SOME ERROR');
            await sleep(2000);
            return 'Second Value';
            
        } catch (error) {
            console.log(error);
        }

    }
}