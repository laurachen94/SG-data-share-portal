var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://Laura:SGdata2017@ds137730.mlab.com:37730/sg_data_portal',['questions']);


//get all questions
router.get('/questions', function(req, res, next){
    db.questions.find(function(err, questions){
        if(err){
            res.send(err);
        }
        res.json(questions);
    });
});


//get single question
router.get('/question/:id', function(req, res, next){
    db.questions.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, question){
        if(err){
            res.send(err);
        }
        res.json(question);
    });
});


//save question
router.post('/question', function(req, res, next){
    var question = req.body;
    if(!question.title || !(question.isDone + '')){
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    }else {
        db.questions.save(question, function(err, question){
            if(err){
                res.send(err);
            }
            res.json(question);
        })
    }
})



//Delete question
router.delete('/question/:id', function(req, res, next){
    db.questions.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, question){
        if(err){
            res.send(err);
        }
        res.json(question);
    });
});


// update question
router.put('/question/:id', function(req, res, next){

    var question = req.body;
    var updQues = {};

    if(question.Name){
        updQues.Name = question.Name;
    }

    if(question.Description){
        updQues.Description = question.Description;
    }

    if(question.Requester){
        updQues.Requester = question.Requester;
    }

    if(question.TimeLine){
        updQues.TimeLine = question.TimeLine;
    }

    if(question.Prize){
        updQues.Prize = question.Prize;
    }

    if(!updQues){
        res.status(400);
        res.json({
            "error":"bad data"
        });
    } else{
        db.questions.update({_id: mongojs.ObjectId(req.params.id)}, updQues, {}, function(err, question){
        if(err){
            res.send(err);
        }
        res.json(question);
        });
    }
});

module.exports = router;