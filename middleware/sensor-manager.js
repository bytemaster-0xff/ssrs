var repo = require('../storage/repo');


module.exports = {
    getSensors :function(catg) {
        return new Promise((resolve, reject) => {
            repo.getAll(catg)
            .then(sensorData => {
                resolve(sensorData);
            });
        });
    },

    clearAll :function(catg) {
        return new Promise((resolve, reject) => {
            repo.clearAll(catg)
            .then(sensorData => {
                resolve(sensorData);
            });
        });
    },

    updateSensor: function(catg, sensorId, doc) {
        doc["_id"] = sensorId;
        doc["sensorId"] = sensorId;
        doc["timeStamp"] = new Date().toISOString();
        return new Promise((resolve, reject) => {
            repo.delete(catg, sensorId)
            .then(res => {
                 repo.insertOne(catg, doc)
                .then(result => {
                    resolve(result);
                });
            });
        });
    }
};
