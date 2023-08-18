const mongoose = require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/fruitdb',  { useNewUrlParser: true, useUnifiedTopology: true } );


const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const pome = new Fruit({
    name: "Peomegranete",
    rating: 7,
    review: "Great"
});
const bana = new Fruit({
    name: "Banana",
    rating: 7,
    review: "Good"
});
const kiwi = new Fruit({
    name: "Kiwi",
    rating: 7,
    review: "Soft and Delicious"
});
const apple = new Fruit({
    name: "Apple",
    rating: 7,
    review: "Love"
});

// Fruit.insertMany([pome, kiwi, bana]);

async function saveFruits() {
    try {
        await Fruit.insertMany([pome, kiwi, bana, apple]);
        console.log("Fruits ADDED successfully!");
    } catch (error) {
        console.error("Error saving fruitS:\n", error);
    } finally {
        // Close the mongoose connection after saving
        mongoose.connection.close();
    }
}
saveFruits();