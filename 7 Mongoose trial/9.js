const mongoose = require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/fruitdb',  { useNewUrlParser: true, useUnifiedTopology: true } );

const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

async function deleteFruit() {
    try {
        await Fruit.deleteMany({ rating: { $gte: 6 } });
    
        console.log("Successfully deleted all");
    } catch (error) {
        console.log("Error deleting:", error);
    } finally {
        mongoose.connection.close();
    }
}

deleteFruit();