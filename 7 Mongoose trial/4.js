const mongoose = require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/fruitdb',  { useNewUrlParser: true, useUnifiedTopology: true } );

const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

async function fetchFruits() {
    try {
        const fruits = await Fruit.find({}).exec();
        console.log("Fruits:", fruits);
    } catch (error) {
        console.error("Error fetching fruits:", error);
    } finally {
        mongoose.connection.close();
    }
    // If the finally block is removed then we will have to manually halt the execution of the code using Ctrl + C
}
fetchFruits();