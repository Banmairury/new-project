import NavbarComponent from "./components/NavbarComponent";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const URL_API = `http://localhost:5500/api`


function App() {
  const [blogs, setBlogs] = useState([]);
  
  //Axios get all document
  const getCompanies  = async () => {
    try {
      const response = await axios.get(`${URL_API}/blogs`);
      setBlogs(response.data);
    } catch (err) {
      alert(err);
    }
  };
  //เรียกใช้ Axios get all
  useEffect(()=>{
    getCompanies()
  },[])


  return (
    <div className="container p-5">
      <NavbarComponent />
      {blogs.map((blog,index)=>(
        <div className="row" key={index} style={{borderBottom:'1px solid silver'}}>
          <div className=" col pt-3 pb-2">
            <Link to={`/blog/${blog.slug}`} ><h2>{blog.title}</h2></Link>
            
            <p>{blog.content.substring(0,100)}</p>
            <p className="text-muted">ผู้เขียน:{blog.author},  {new Date(blog.createdAt).toLocaleString()}</p>
          </div>
        </div>
      ))}

    </div>
  );
}

export default App;
