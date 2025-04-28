import express from "express";
import { getBook } from "../controller/book.controller.js";

const router = express.Router();

router.get("/", getBook);
// router.post("/", addBook);       // Add a new book
// router.put("/:id", updateBook);  // Update book by ID
// router.delete("/:id", deleteBook); // Delete book by ID


export default router;