const mongoose = require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/fruitdb',  { useNewUrlParser: true, useUnifiedTopology: true } );

const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);


// BOTH CODES FOR UpdateOne works 

// Fruit.updateOne({ review: "Love" }, {name: "Tomato56565"})
//   .then((result) => {
//         if (result) {
//         console.log("Successfully updated!!!");
//         } else {
//         console.log("Error updating document");
//         }
//   })
//   .catch((err) => {
//         console.log(err);
//   }).finally(() => {
//         mongoose.connection.close();
//   });

async function updateFruits() {
    try {
        // await Fruit.updateMany({ review: { $type: "string" } }, { $set: { name: "Tomato6969" } });
        await Fruit.updateOne({ review: "Love" }, { $set: { name: "Tomato123" } });
        console.log("Successfully updated documents");
    } catch (error) {
        console.log("Error updating:", error);
    } finally {
        // Close the mongoose connection after the update
        mongoose.connection.close();
    }
}

updateFruits();

