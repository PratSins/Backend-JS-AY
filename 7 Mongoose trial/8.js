const mongoose = require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/fruitdb',  { useNewUrlParser: true, useUnifiedTopology: true } );

const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);


// BOTH CODES FOR deleteOne works 


Fruit.deleteOne({ name: "Guava" })
    .then(deleteResult => {
        if (deleteResult.deletedCount > 0) {
            console.log("Successfully deleted");
        } else {
            console.log("No documents were deleted.");
        }
    })
    .catch(err => {
        console.log("Error deleting:", err);
    })
    .finally(() => {
        // Close the mongoose connection after the delete operation
        mongoose.connection.close();
    });


// async function deleteFruit() {
//     try {
//         await Fruit.deleteOne({ name: "Tomato123" });
    
//         console.log("Successfully deleted");
//     } catch (error) {
//         console.log("Error deleting:", error);
//     } finally {
//             mongoose.connection.close();
//     }
// }

// deleteFruit();
    
    
    
    
    