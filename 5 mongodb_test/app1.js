// const { MongoClient } = require("mongodb");
// const assert = require('assert');

// // Replace the uri string with your connection string.
// const uri = "mongodb://localhost:27017";

// const client = new MongoClient(uri);

// async function run() {
//   try {
//     const database = client.db('sample_mflix');
//     const movies = database.collection('movies');

//     // Query for a movie that has the title 'Back to the Future'
//     const query = { title: 'Back to the Future' };
//     const movie = await movies.findOne(query);

//     console.log(movie);
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

// const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');
// const url = "mongodb://localhost:27017";
// const db = 'mp';
// const client = new MongoClient(url, {useNewUrlParser: true});

// client.connect(function(err){
//     assert.equal(null,err)
//     console.log("Connected to server successfully")
//     const d = client.db(db)
//     client.close()
// });



const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017';

const dbName = 'myproject';
const client = new MongoClient(url, {useNewUrlParser: true});

client.connect(url, function(err) {
    assert.equal(null, err);
    console. log("Connected successfully to server");

    const db = client.db(dbName)
    insertDocuments(db, function() {
        client.close();
    });
})

const insertDocuments = function(db, callback) 
{
    // Get the documents collection
    const collection = db.collection('documents');
    
    // Insert some documents
    collection.insertMany( [
        {a: 1}, {a: 2}, {a : 3}
    ], 
    function(err, result) {
        assert.equal(err, null);
        assert.equal(3, result.result.n)
        assert.equal(3, result.ops.tength) ;
        console.log("Inserted 3 docunents,into the collection") ;
        callback(result);
    });
}
    