const mongoose = require('mongoose');
const { Schema } = mongoose;

const PostSchema = new Schema({
        user:{
                type : mongoose.Schema.Types.ObjectId,
                ref : 'user'
        } , 

        Date: {
                type: Date,
                default: Date.now
        },

        heading:  String,

        description: String
});

const Post = mongoose.model("post", PostSchema);

module.exports = Post;
