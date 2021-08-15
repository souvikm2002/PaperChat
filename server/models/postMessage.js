import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    name: String,
    creator: String,
    likes: {
        type: [String],
        default: [],
    },
    createdAt: {
        type: Date,
        default: ()=> {return new Date()},   //arrow function is implemented to create new document each time
    },
});

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;