import Book from "../model/book.model.js";

export const getBook = async(req, res) => {
    try {
        const book = await Book.find();
        res.status(200).json(book);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json(error);
    }
};

// // Add a new book
// export const addBook = async (req, res) => {
//     try {
//         const newBook = new Book(req.body);
//         await newBook.save();
//         res.status(201).json({
//             success: true,
//             message: "Book added successfully",
//             data: newBook
//         });
//     } catch (error) {
//         console.error("Error adding book:", error);
//         res.status(500).json({
//             success: false,
//             message: "Failed to add book",
//             error: error.message
//         });
//     }
// };

// // Update book by ID
// export const updateBook = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const updatedBook = await Book.findByIdAndUpdate(id, req.body, { new: true });

//         if (!updatedBook) {
//             return res.status(404).json({ success: false, message: "Book not found" });
//         }

//         res.status(200).json({
//             success: true,
//             message: "Book updated successfully",
//             data: updatedBook
//         });
//     } catch (error) {
//         console.error("Error updating book:", error);
//         res.status(500).json({
//             success: false,
//             message: "Failed to update book",
//             error: error.message
//         });
//     }
// };

// Delete book by ID
// export const deleteBook = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const deletedBook = await Book.findByIdAndDelete(id);

//         if (!deletedBook) {
//             return res.status(404).json({ success: false, message: "Book not found" });
//         }

//         res.status(200).json({
//             success: true,
//             message: "Book deleted successfully"
//         });
//     } catch (error) {
//         console.error("Error deleting book:", error);
//         res.status(500).json({
//             success: false,
//             message: "Failed to delete book",
//             error: error.message
//         });
//     }
// };