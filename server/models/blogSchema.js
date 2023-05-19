// ชื่อบทความ(title) เนื้อหาบทความ(content)  ผู้เขียน(author) , slug(url)%=-
const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:{},
        required:true
    },
    author:{
        type:String,
        default:"Admin"
    },
    slug:{
        type:String,
        lowercase:true,
        unique:true
    }
},{timestamps:true})

const modelSchema = mongoose.model("Blogs",blogSchema)
module.exports = modelSchema