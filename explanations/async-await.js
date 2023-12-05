async function requestHandler(request, response) {
    
    try {
        // AWAIT IS A RESERVED WORD FROM JS THAT MEANS THIS CODE IS GONNA TAKE EXECUTION TIME 
        // WE ARE EXECUTING TWO ASYNCRONUOS CODE, ONE AFTER ANOTHER.
        const user = await User.findById(request.userId);
        const tasks = await Tasks.findById(user.tasksId);
        tasks.completed = true;
        await tasks.save();
        response.send('Task completed');
        
    } catch (error) {
        response.send(error);
    }


}