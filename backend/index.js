require("dotenv").config();
console.log(process.env.NODE_ENV)
const express = require("express");
const morgan = require("morgan");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
//Inicialización
const app = express();

//Configuraciones
app.set("port", 3000);
require("./database");
//middlewares
app.use(morgan("dev"));
const d = new Date()
const storage = multer.diskStorage({
    destination: path.join(__dirname, "public/uploads"), filename(req, file, cb){
        cb(null, d.getTime() + Math.floor(Math.random() * 100));
    }
});
app.use(multer({ storage }).single("image"));
app.use(express.urlencoded({extended: false}));
app.use(cors());
app.use(express.json());

//routes
app.use("/api/books", require("./routes/books"));

//archivos estaticos
app.use(express.static(path.join(__dirname, "public")));

//Iniciar app
app.listen(app.get("port"), () => {
    console.log("puerto del servidor", app.get("port"))
})