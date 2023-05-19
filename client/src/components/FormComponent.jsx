import { useRef, useState } from "react";
import NavbarComponent from "./NavbarComponent";
import axios from 'axios'
import Swal from 'sweetalert2'

const URL_API = `http://localhost:5500/api`


const FormComponent = () => {
  const [state, setState] = useState({
    //attibute
    title: "",
    content: "",
    author: "",
  });


  const { title, content, author } = state;

  const inputValue=name=>event=>{
    setState({...state,[name]:event.target.value})
  }

  const submitForm=(event)=>{
    event.preventDefault(); //ทำให้ข้อมูลยังค้างอยู่
    axios.post(`${URL_API}/create`,{title,content,author,})
    .then(response => {
        Swal.fire(
            'Good job!',
            'บันทึกข้อมูลแล้ว',
            'success'
          )
          setState({...state,title:"",content: "",author: "",})
    })
    .catch(err=>{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.response.data.error,
          })
        //รับerror มาจากฝัง server
    })


  }

  return (
    <div className="container p-5">
    <NavbarComponent/>
      <h1>เขียนบทความ</h1>
      <form  onSubmit={submitForm}>
        <div className="form-group">
          <label>ชื่อบทความ</label>
          <input type="text" className="form-control" value={title}  onChange={inputValue("title")}/>
        </div>
        <div className="form-group">
          <label>รายละเอียด</label>
          <textarea className="form-control" value={content} onChange={inputValue("content")} ></textarea>
        </div>
        <div className="form-group">
          <label>ชื่อผู้แต่ง</label>
          <input type="text" className="form-control" value={author} onChange={inputValue("author")} />
        </div>
        <br />
        <input type="submit" value="บันทึก" className="btn btn-primary" />
        <br />
      </form>
    </div>
  );
};

export default FormComponent;
