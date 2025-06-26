import express from "express";
import { checkServerAvailable, getAllAuthors, getAllPosts, getPostById, getPostsByAuthor } from "../Controllers/postControllers";
import { validateIdParam } from "../validate";

const router = express.Router();

router.get("/posts", getAllPosts);

router.get('/post/:id', getPostById);

router.get('/posts/:author', getPostsByAuthor);

router.get('/authors', getAllAuthors);

router.get('/Running ', checkServerAvailable);


export default router;