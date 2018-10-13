var config = require('../config');
var engine = require('tingodb')();

let db = new engine.Db(config.localDb, {});

module.exports = {
    /** Get All Records for a Collection */
    getAll :function(collectionName) {
        return new Promise((resolve, reject) => {
            var collection = db.collection(collectionName);
            collection.find({}).toArray(function(err, users) {
                console.log(users);
                resolve(users);
            });
        });
    },

    getById :function(collectionName, id) {
        return new Promise((resolve, reject) => {
            var collection = db.collection(collectionName);
            collection.find({_id:id}).toArray(function(err, users) {
                resolve(users);
            });
        });
    },

    update: function(collectionName, record) {
        return new Promise((resolve, reject) => {
            var collection = db.collection(collectionName);
            collection.find({}).toArray(function(err, users) {
                resolve(true);
            });
        });
    },

    clearAll: function(collectionName) {
        return new Promise((resolve, reject) => {
            var collection = db.collection(collectionName);
            collection.remove(function() {
                resolve(true);
            });
        });
    },

    delete: function(collectionName, id) {
        return new Promise((resolve, reject) => {
            var collection = db.collection(collectionName);
            collection.remove({_id:id}, function() {
                resolve(true);
            });
        });
    },

    insertOne: function(collectionName, record) {
        return new Promise((resolve, reject) => {
            var collection = db.collection(collectionName);
            collection.insert([record], {w:1},  function(err, users) {
                console.log(record);
                console.log(err);
                console.log(collectionName);
                console.log(config.localDb);
                resolve({status:'ok'});
            });
        });
    },

    insertMany: function(collectionName, records) {
        return new Promise((resolve, reject) => {
            var collection = db.collection(collectionName);
            collection.insertMany(records).toArray(function(err, users) {
                resolve(users);
            });
        });
    }
}
