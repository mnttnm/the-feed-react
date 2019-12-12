import { Schema as _Schema, model } from 'mongoose';
const Schema = _Schema;

const postSchema = new Schema({
    title: String,
    tags: Array,
    description: String,
    url: String,
    views: Number,
    rating: Number,
    category:String,
    postedOn: Date
});

export default model('Post', postSchema);