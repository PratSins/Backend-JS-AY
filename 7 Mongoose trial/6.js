const mongoose = require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/fruitdb',  { useNewUrlParser: true, useUnifiedTopology: true } );

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "What fruit has no name????"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

// const fruit = new Fruit({
//     name: "Top G",
//     rating: 70, // Fails VALIDATION
//     review: "Pretty solid"
// });
const fruit = new Fruit({
    // name: "Top G",
    rating: 7, 
    review: "Pretty solid"
});

async function saveFruit() {
    try {
        await fruit.save();
        console.log("Fruit saved successfully!");
    } catch (error) {
        console.error("Error saving fruit:", error);
    } finally {
        mongoose.connection.close();
    }
}

saveFruit();