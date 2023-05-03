const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninja')

//read request
router.get('/ninjas',function(ask, ans){
    ans.send({type: 'GET'});
});

//create request
router.post('/ninjas',function(ask, ans){
    Ninja.create(ask.body).then(function(ninja){
    ans.send(ninja);
});
});

//update request
router.put('/ninjas/:id',function(ask, ans){
    ans.send({type: 'PUT'});
});

//delete request
router.delete('/ninjas/:id',function(ask, ans){
    ans.send({type: 'DELETE'});
});

module.exports = router;