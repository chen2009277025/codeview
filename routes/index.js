var express = require('express');
var router = express.Router();

/* GET home page. */
router.get(['/', "/index"], function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/about', function (req, res, next) {
    res.render('about', {title: 'Express'});
});

router.get('/contact', function (req, res, next) {
    res.render('contact', {title: 'Express'});
});

router.get('/pricing', function (req, res, next) {
    res.render('pricing', {title: 'Express'});
});

module.exports = router;
