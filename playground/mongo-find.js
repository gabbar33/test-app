
const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Error while connect to database');
    }

    console.log('Database Connected');

    db.collection('TodoApp').find({ name: "Gabbar Sisodiya" }).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('error while fetching:', err);
    });

    db.close();
});