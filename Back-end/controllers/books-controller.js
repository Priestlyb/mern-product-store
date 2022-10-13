const Book = require("../model/book");
const { route } = require("../routes/book-routes");

const getAllBooks = async(req, res, next) => {
    let books;
    try {
        books = await Book.find();
    } catch (err) {
        console.log(err);
    }

    if (!books) {
        return res.status(404).json({message:"No products found"})
    }
    return res.status(200).json({ books });
};

const getById = async (req, res, next) => {
    const id = req.params.id;
        let book;
        try {
            book = await Book.findById(id);
        } catch (err) {
            console.log(err);
        }

        if (!book) {
            return res.status(404).json({message:"No Book found"});
        }
        return res.status(200).json({ book });
};

const addBook = async (req, res, next) => {
    const {name, author, description, price, available, image} = req.body;
    let book;
    try {
        book = new Book({
            name, author, description, price, available, image
        })
        await book.save();
    } catch (err) {
        console.log(err);
    }

    if (!book) {
        return res.status(500).json({message:"unable to add product"})
    }
    return res.status(201).json({ book }); 
};

const updateBook =async (req, res, next) => {
    const id = req.params.id;
    const {image, name, author, description, price, available} = req.body;
    let book;
    try {
        book = await Book.findByIdAndUpdate(id, {
            image, name, author, description, price, available
        });
        book = await book.save()
    } catch (err) {
        console.log(err);
    }

    if (!book) {
        return res.status(404).json({message:"Unable to update by this ID"});
    }
    return res.status(200).json({ book });
}

const deleteBook = async ( req, res, next) => {
    const id = req.params.id;
    let book;
    try {
        book = await Book.findByIdAndRemove(id);
    } catch (err) {
        console.log(err);
    }

    if (!book) {
        return res.status(404).json({message:"Unable to delete by this ID"});
    }
    return res.status(200).json({ message: 'Book Successfully deleted'});
}


exports.getAllBooks = getAllBooks;
exports.addBook = addBook;
exports.getById = getById;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;