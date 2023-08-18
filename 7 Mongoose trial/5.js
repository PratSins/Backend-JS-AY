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
        
        fruits.forEach(function(fruit) {
            console.log(fruit.name);
        });
        
    } catch (error) {
        console.error("Error fetching fruits:", error);
    } finally {
        mongoose.connection.close();
    }
}
fetchFruits();