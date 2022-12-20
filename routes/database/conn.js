// const { MongoClient } = require("mongodb");
var MongoClient = require('mongodb').MongoClient;
const connectionString = 'mongodb+srv://admin:uE2wJSiZPnrDejMr@cluster0.7riuz8w.mongodb.net/develop?retryWrites=true&w=majority';
// const connectionString = process.env.AIPLAZA_URI;

MongoClient.connect(connectionString,function(err,db){
    if (err) throw err;
    else {
        console.log('Connected');
    }
    var dbo = db.db('develop');
})







// const client = new MongoClient(connectionString, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });
//
// let dbConnection;
//
// module.exports = {
//     connectToServer: function (callback) {
//         client.connect(function (err, db) {
//             if (err || !db) {
//                 return callback(err);
//             }
//
//             dbConnection = db.db("develop");
//             console.log("Successfully connected to MongoDB.");
//
//             return callback();
//         });
//     },
//
//     getDb: function () {
//         return dbConnection;
//     },
// };