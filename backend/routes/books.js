const {Router} = require("express");
const fs = require("fs-extra");
const path = require("path");
const router = Router()

const book = require("../models/book");

router.get("/", async (req, res) => {
    const books = await book.find();
    res.json(books);
});

router.post("/", async (req, res) => {
    const {title, tag, isbn} = req.body;
    const image = `/uploads/` + req.file.filename;
    const newBook = new book({title, tag, isbn, image});
    await newBook.save();
    res.json({message: "Book Saved"});
});

router.delete("/:id", async(req, res)=>{
    const Book = await book.findByIdAndDelete(req.params.id);
    fs.unlink(path.resolve("./backend/public/"+Book.image))
    res.send({text:"deleted"});
});

module.exports = router;