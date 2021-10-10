const mongoose = require('mongoose');
const { Schema } = mongoose;


const PostSchema = new Schema({
        user:{
                type : mongoose.Schema.Types.ObjectId,
                ref : 'user'
        } , 

        Date: {
                type: String,
                default: Date
        },

        heading: { 
                type : String
        },

        description: {
                type : String
        } 
});

const Post = mongoose.model("post", PostSchema);

module.exports = Post;
