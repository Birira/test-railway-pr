const mongoose = require("mongoose");
process.env.MONGODB_URI

mongoose.connect(process.env.MONGODB_URI)

    .then(db=>console.log("DB conectada"))
    .catch(err => console.log("Error"))