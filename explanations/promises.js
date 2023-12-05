function requestHandler(req, res) {
    User.findById(req.UserId)
    // .THEN IS WHEN EVERYTHING IS GOING WELL
    .then(function(user){
        return Tasks.findById(user.tasksId);
    })
    .then(function(tasks) {
        tasks.completed = true;
        return tasks.save();
    })
    .then(function() {
        res.send('tasks completed');
    })
    // .CATCH IS WHEN THERE IS AN ERROR
    .catch(function (errors) {
        res.send(errors);
    })
}