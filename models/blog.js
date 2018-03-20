const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
    blogName: {
        type: String,
        required: true
    },
    blogTitle: {
        type: String,
        required: true
    },
    introText: {
        type: String,
        required: true
    },
    postBody: {
        type: String,
        required: true
    },
    metaTags: {
        type: String,
        required: true
    },
    createdOn: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Blogs", BlogSchema);