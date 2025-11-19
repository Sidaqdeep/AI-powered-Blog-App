import express from 'express';
import { addBlog, addComment, deleteBlogById, generateContent, getAllBlogs, getBlogById, getBlogComments, togglePublish } from '../controllers/blogController.js';
import upload from '../middleware/multer.js';
import auth from '../middleware/auth.js';
import Blog from '../models/Blog.js';

const blogRouter = express.Router();

// Define your blog routes here
// For example:
// blogRouter.post('/add', addBlogControllerFunction);
blogRouter.post('/add',upload.single('image'),auth, addBlog);
blogRouter.get('/all', getAllBlogs);
blogRouter.get('/:blogId', getBlogById);
blogRouter.post('/delete',auth,deleteBlogById);
blogRouter.post('/toggle-publish',auth,togglePublish);
blogRouter.post('/add-comment', addComment);
blogRouter.post('/comments',getBlogComments);

blogRouter.post('/generate', generateContent);

export default blogRouter;