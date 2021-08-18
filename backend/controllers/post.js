const Post = require('../models/post');
const User = require('../models/user');

const list = async (req, res) => {
    const posts = await Post.find({userId: req.user._id}).populate('userId');
    if(posts.length === 0) return res.status(400).send({message: 'Post not found', data: posts});
    return res.status(200).send(posts); 
};
const create = async (req, res) => {
    if(!req.body.text || !req.body.hashtag)
        return res.status(400).send({message: 'Incomplete data'});
    const post = new Post({
        userId: req.user._id,
        text: req.body.text,
        hashtag: req.body.hashtag
    });
    const result = await post.save();
    if (!result) return res.status(400).send("Failed to register post");
    return res.status(200).send({message: 'User create', data: post});
}
module.exports = {list, create};