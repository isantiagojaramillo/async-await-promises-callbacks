const {taskOne, taskTwo} = require('./tasks');

async function main() {

    try {
        // CONSOLE.TIME: MEASURES THE TIME OF CODE
        console.time('Measuring time');
        const firstValue =  await taskOne();
        const secondValue = await taskTwo();
    
        // CONSOLE.TIMEEND: MEASURES THE END OF THE TIME OF THE CODE
        console.timeEnd('Measuring time');
        
        console.log('Task one returned ' + firstValue);
        console.log('Task two returned ' + secondValue);
        
    } catch (error) {
        console.log(error);
    }
}

main();
