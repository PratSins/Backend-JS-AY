const mongoose = require("mongoose")
mongoose.connect('mongodb://localhost:27017/fruitdb',  {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    family: 4,
});

const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema)
const fruit = new Fruit({
    name: "Apple",
    rating: 7,
    review: "Love"
});
fruit.save();