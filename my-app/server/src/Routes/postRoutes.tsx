import express from "express";
import {  getAllAuthors, getAllPosts, getPostById, getPostsByAuthor, createNewPost } from "../Controllers/postControllers";

const router = express.Router();

router.get("/posts", getAllPosts);

router.get('/post/:id' ,getPostById);

router.get('/posts/:author', getPostsByAuthor);

router.get('/authors', getAllAuthors);

router.post('/addpost/', createNewPost);




export default router;