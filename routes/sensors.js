var express = require('express');
var router = express.Router();
var sensorManager = require('../middleware/sensor-manager');

router.get('*/set/*', function(req, res, next) {
    let parts = req.path.match(/\/(.*)\/set\/(.*)/);
    let catg = parts[1];
    let sensorId = parts[2];

    console.log('updating sensor [' + sensorId + '] on [' + catg + ']');

    sensorManager.updateSensor(catg, sensorId, req.query)
    .then(result => {
        res.json({status:'ok'});
    });
});

router.get('*/clear', function(req, res, next) {
    let catg = req.path.match(/\/(.*)\/clear/)[1];
    console.log("Clearing sensors for category [" + catg + "]");
  
    sensorManager.clearAll(catg)
    .then(result=> {
        res.json({status:'ok'});
    });
});

router.get('*/', function(req, res, next) {
    console.log(req.path);
    let catg = req.path.match(/\/(.*)/)[1];
    console.log("Getting sensors for category [" + catg + "]");
    sensorManager.getSensors(catg)
    .then(result=> {
        res.setHeader("Expires", "-1");
        res.setHeader("Cache-Control", "must-revalidate, private");
        res.json(result);
    });
});

module.exports = router;
