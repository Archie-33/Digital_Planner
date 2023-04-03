const express = require('express');
const router = express.Router();

const Model = require('../models/mentalSCPModel');

router.post('/insert', (req, res) => {
    // console.log(req.body);
    const activityM=req.body.activityM
    const firstM=req.body.firstM
    const secondM=req.body.secondM
    const thirdM=req.body.thirdM
    const fourthM=req.body.fourthM
    const fifthM=req.body.fifthM
    const sixthM=req.body.sixthM
    const seventhM=req.body.seventhM
    
      
    const mentalSCPPlanner=new Model({activityM: activityM, firstM: firstM, secondM: secondM, thirdM: thirdM, fourthM: fourthM, fifthM: fifthM, sixthM: sixthM, seventhM: seventhM});
    
    // async function
    new Model(mentalSCPPlanner).save()
    .then((data) => {
        console.log(data);
        res.json(data); //default status code is 200
    })
    .catch((err) => {
        console.error(err);
        res.status(500).json(err);
    });
})

router.get('/getall', (req, res) => {
    Model.find({})
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.error(err);
        res.status(500).json(err);
    });
})

router.get("/read", async(req,res) => {
    Model.find({}, (err,result) => {
        if(err){
            res.send(err)
        }
        res.send(result);
    })
});

router.get('/getbyemail/:email', (req, res) => {
    const email = req.params.email;
    console.log(email);
    Model.findOne({email : req.params.email})
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.error(err);
        res.status(500).json(err);
    });
})

router.get('/getbyid/:id', (req, res) => {
    
    Model.findById(req.params.id)
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.error(err);
        res.status(500).json(err);
    });
});
router.delete('/delete/:id', (req, res) => {
    
    Model.findByIdAndDelete(req.params.id)
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.error(err);
        res.status(500).json(err);
    });
});
router.put('/update/:id', (req, res) => {
    Model.findByIdAndUpdate(req.params.id, req.body, {new : true})
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.error(err);
        res.status(500).json(err);
    });
});

module.exports = router;