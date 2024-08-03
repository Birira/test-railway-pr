const mongoose = require("mongoose");
const URI = process.env.MONGODB_URI

mongoose.connect(URI)

    .then(db=>console.log("DB conectada"))
    .catch(err => console.log(err))