const express = require('express'); 
const { findOne } = require('../models/ninja');
const router = express.Router();
const Ninja = require('../models/ninja')
 
//read request
router.get('/ninjas',function(ask, ans, next){
    ans.send({type: 'GET'});
});

//create request
router.post('/ninjas',function(ask, ans, next){
    Ninja.create(ask.body).then(function(ninja){
    ans.send(ninja);
}).catch(next)
});

//update request
router.put('/ninjas/:id',function(ask, ans, next){
    Ninja.findByIdAndUpdate({_id: ask.params.id}, ask.body).then(function(){
        Ninja.findOne({_id: ask.params.id}).then(function(ninja){
            ans.send(ninja);
        });
        });     
    //ans.send({type: 'PUT'});
});

//delete request
router.delete('/ninjas/:id',function(ask, ans, next){
    Ninja.findByIdAndRemove({_id: ask.params.id}).then(function(ninja){
        ans.send(ninja);
    });
    //ans.send({type: 'DELETE'});
});

module.exports = router;