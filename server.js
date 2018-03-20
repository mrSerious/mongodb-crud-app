const express = require("express");
const bodyParser = require("body-parser");
const blogController = require("./controllers/BlogController");

// db instance connection
require("./config/db");

const app = express();

const port = process.env.PORT || 3301;

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// API ENDPOINTS
app
    .route("/blogs")
    .get(blogController.listAllBlogs)
    .post(blogController.createNewBlog);

app
    .route("/blogs/:blogid")
    .get(blogController.readBlog)
    .put(blogController.updateBlog)
    .delete(blogController.deleteBlog);


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});