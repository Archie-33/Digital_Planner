const express = require('express');
const router = express.Router();

const Model = require('../models/expenseModel');

router.post('/insert', (req, res) => {
    // console.log(req.body);
    const dateexp=req.body.dateexp
    const item=req.body.item
    const categ=req.body.categ
    const amt=req.body.amt
      
    const expensePlanner=new Model({dateexp: dateexp, item: item, categ: categ, amt: amt});
    
    // async function
    new Model(expensePlanner).save()
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