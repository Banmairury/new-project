import axios from "axios";
import { useEffect, useState } from "react";
import NavbarComponent from "./NavbarComponent";
// import {useParams } from 'react-router-dom';

const URL_API = `http://localhost:5500/api`;

const SingleComponent = () => {
  // let { slug } = useParams();

  const [blog, setBlog] = useState("");

  useEffect(() => {
    axios
      .get(`${URL_API}${location.pathname}`)
      .then((response) => {
        setBlog(response.data);
      })
      .catch((err) => alert(err));
  }, []);

  return (
    <div className="container">
    <NavbarComponent/>
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
      <p className="text-muted">ผู้เขียน:{blog.author},  {new Date(blog.createdAt).toLocaleString()}</p>
    </div>
  );
};

export default SingleComponent;
