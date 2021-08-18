const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.ObjectId, ref: "user"},
    text: String,
    hashtag: String,
    createAt: {type: Date, default: Date.now},
    state: {type: Boolean, default: true}
});

const post = mongoose.model("post",postSchema);
module.exports = post;