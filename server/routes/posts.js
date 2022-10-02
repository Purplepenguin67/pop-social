import express from 'express'; 

import { getPosts, createPost } from '../controllers/posts.js'

const router = express.Router();

router.get('/', getPosts );
router.post('/', createPost );
router.patch('/:id', updatePost)


export default router;

//http://localhost:3000/posts