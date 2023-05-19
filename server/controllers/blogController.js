//ติดต่อฐานข้อมูล
const sluggify = require("slugify");
const BlogsSchema = require("../models/blogSchema");
const { v4: uuidv4 } = require('uuid');


//บันทึกข้อมูล
exports.create = async (req, res) => {
  const { title, content, author } = req.body;
  let slug = sluggify(title);
  console.log(req.body);

  //ถ้า slug เป็นค่าว่าง add uuid
  if(!slug)slug=uuidv4();
  
  

  //validate
  switch (true) {
    case !title: //ถ้าเป็นค่าว่างจะรีเทิร์น
      return res.status(400).json({ error: "กรุณาป้อนชื่อบทความ" });
      break;
    case !content:
      return res.status(400).json({ error: "กรุณาป้อนเนื้อหาบทความ" });
      break;
  }

  BlogsSchema.create({ title, content, author, slug }) //ใช้ Schema สร้าง document
    .then((blog) => {
      res.json(blog);
    })
    .catch((err) => {
      res.status(400).json({ error: "มีบทความนี้แล้ว" }); //เมื่อมี Error(สามารถปรับแต่งErrorได้)
    });

  // const prepareTask = new BlogsSchema({title, content, author, slug});
  // const newlyTask = await prepareTask.save();
  // res.json(newlyTask);
};

//get all
exports.getAllBlogs = (req, res) => {
  BlogsSchema.find({})
    .exec()
    .then((blogs) => {
      res.json(blogs);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};

// get one
exports.singleBlog =  (req, res) => {
  const { slug } = req.params;
 console.log(`slugname  ${slug}`)
  BlogsSchema.findOne({slug})
    .exec()
    .then((blog)=> {
      res.json(blog);
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
};

// exports.singleBlog = async (req, res) => {
//   try {
//     const { slug } = req.params;
//     console.log(`slugname ${slug}`);

//     const blog = await BlogsSchema.findOne({ slug }).exec();
//     res.json(blog);
//   } catch (err) {
//     res.status(500).json({ error: err });
//   }
// };