const {taskOne, taskTwo} = require('./tasks');

async function main() {

    try {
        console.time('Measuring time');
        // PROMISE.ALL: ALLOWS US TO EXECUTE PARALLEL CODE. THIS MEANS AT THE SAME TIME
        const results = await Promise.all([taskOne(), taskTwo()]);
        console.timeEnd('Measuring time');
        
        console.log('Task one returned ' + results[0]);
        console.log('Task two returned ' + results[1]);
        
    } catch (error) {
        console.log(error);
    }
}

main();