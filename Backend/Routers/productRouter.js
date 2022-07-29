const router = require('express').Router();

router.get('/add', (req, res) => {
    res.send('Add Product request');
})

module.exports = router;