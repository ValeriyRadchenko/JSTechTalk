const { promisify } = require('util');
const MongoClient = require('mongodb').MongoClient;
const mongoUrl = 'mongodb://admin:admin@mongo:27017';

const connect = promisify(MongoClient.connect);

class Notes {
    get() {
        return new Promise((resolve, reject) => {
            connect(mongoUrl)
                .then(db => ({db, collection: db.collection('notes')}))
                .then(result => {
                    return result.collection.find({})
                        .toArray((error, data) => {
                            result.db.close();
                            if (error) {
                                reject(error);
                            }

                            resolve(data);
                        });
                })
                .catch(reject);
        });
    }

    set(data) {
        return new Promise((resolve, reject) => {
            connect(mongoUrl)
                .then(db => ({db, collection: db.collection('notes')}))
                .then(result => {
                    return result.collection.insert(data, (error, response) => {
                        result.db.close();
                        if (error) {
                            reject(error);
                        }

                        resolve(response);
                    });
                })
                .catch(reject);
        });
    }
}

module.exports = Notes;