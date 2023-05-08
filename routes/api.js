const express = require('express'); 
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
    ans.send({type: 'PUT'});
});

//delete request
router.delete('/ninjas/:id',function(ask, ans, next){
    console.log(ask.params.id)
    ans.send({type: 'DELETE'});
});

module.exports = router;