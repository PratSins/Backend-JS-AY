const mongoose = require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/fruitdb',  { useNewUrlParser: true, useUnifiedTopology: true } );


const personSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
    name: "Chad",
    age: 7
});

async function savePerson() {
    try {
        await person.save();
        console.log("person saved successfully!");
    } catch (error) {
        console.error("Error saving person:", error);
    } finally {
        // Close the mongoose connection after saving
        mongoose.connection.close();
    }
}

savePerson();
// A new Collection is created within the database