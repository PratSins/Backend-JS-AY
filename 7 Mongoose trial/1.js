const mongoose = require("mongoose");

// mongoose.connect('mongodb://localhost:27017/fruitdb',  { useNewUrlParser: true, useUnifiedTopology: true } );

mongoose.connect('mongodb://127.0.0.1:27017/fruitdb',  { useNewUrlParser: true, useUnifiedTopology: true } );


const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
    name: "Apple",
    rating: 7,
    review: "Boring"
});

// fruit.save();   // Better to use the following code instead of this line
async function saveFruit() {
    try {
        await fruit.save();
        console.log("Fruit saved successfully!");
    } catch (error) {
        console.error("Error saving fruit:", error);
    } finally {
        // Close the mongoose connection after saving
        mongoose.connection.close();
    }
}

saveFruit();