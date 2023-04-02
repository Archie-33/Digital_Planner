// for performing user database operations
const express = require('express');
const router = express.Router();

// importing user model
const Model = require('../models/mealModel');

router.post('/add', (req1, res1) => {
    console.log(req1.body);
    
    // async function
    new Model(req1.body).save()
    .then((data) => {
        console.log(data);
        res1.json(data); //default status code is 200
    })
    .catch((err) => {
        console.error(err);
        res1.status(500).json(err);
    });
})

router.get('/getall', (req1, res1) => {
    Model.find({})
    .then((result) => {
        res1.json(result);
    }).catch((err) => {
        console.error(err);
        res1.status(500).json(err);
    });
})

// ':' denotes a parameter
router.get('/getbyemail/:email', (req1, res1) => {
    const email = req1.params.email;
    console.log(email);
    Model.findOne({email : req1.params.email})
    .then((result) => {
        res1.json(result);
    }).catch((err) => {
        console.error(err);
        res1.status(500).json(err);
    });
})

router.get('/getbyid/:id', (req1, res1) => {
    
    Model.findById(req1.params.id)
    .then((result) => {
        res1.json(result);
    }).catch((err) => {
        console.error(err);
        res1.status(500).json(err);
    });
});

router.delete('/delete/:id', (req1, res1) => {
    
    Model.findByIdAndDelete(req1.params.id)
    .then((result) => {
        res1.json(result);
    }).catch((err) => {
        console.error(err);
        res1.status(500).json(err);
    });
});


router.put('/update/:id', (req1, res1) => {
    Model.findByIdAndUpdate(req1.params.id, req1.body, {new : true})
    .then((result) => {
        res1.json(result);
    }).catch((err) => {
        console.error(err);
        res1.status(500).json(err);
    });
});

module.exports = router;