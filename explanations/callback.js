function requestHandler(req, res) {
    User.findById(req.userId, function(error, user) {
        if (error) {
            res.send(error);
        }else{
            Task.findById(user.taskId, function(error, tasks) {
                if (error) {
                    return res.send(error);
                } else {
                    tasks.completed = true;
                    tasks.save(function(error) {
                        if (error) {
                            return res.send(error);
                        } else {
                            res.send('task completed');
                        }
                    })
                }
            });
        }
    }) 

    // ANY CODE
}