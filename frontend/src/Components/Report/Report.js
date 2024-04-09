import React, { useState,useEffect } from 'react'
import Nav from '../Nav/Nav'
import Sidebar from "../Sidebar/Sidebar";
import axios from 'axios';

function Report() {
  const[title, setTitle] = useState();
  const[file, saveFile] = useState();
  const[allpdf, setAllPdf] = useState();

  useEffect(() =>{
    getpdf();
  },[]);
  
  const getpdf = async () =>{
    const result =await axios.get("http://localhost:8070/getpFile");
    console.log(result.data.data);
    setAllPdf(result.data.data);
  }

  const submitPdf = async (e) =>{
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("file", file);
    console.log(title,file);
 

  try{
    const result = await axios.post('http://localhost:8070/uploadpfile',
  formData,{
    headers: {'Content-Type' : 'multipart/form-data'}
  });
  console.log(result);

  if(result.data.status === 200){
    alert("Upload Success")
    getpdf();
  }else{
    alert("Upload Error");
  }

  }catch(error){
    console.error("Error Uploading :" + error.message);
    alert("Error Uploading :")
  }
};

  return (
    <React.Fragment>
    <section>
      <div>
        <Nav />
      </div>
    </section>

    <section className="pl-64 pt-20 overflow-x-auto">
    <div className='grid grid-cols-10' >
      <div className='col-span-2 bg-customBlue h-full p-4 w-50 fixed top-12 left-0'>
        <Sidebar/>
      </div>
      <div className=''>
      <form onSubmit={submitPdf}>
        <label>Report Title</label>
        <input  type="text" onChange={(e) => setTitle(e.target.value)}required></input>
        <label>Select Report File</label>
        <input type='file' accept='application/pdf' onChange={(e) => saveFile(e.target.files[0])}required></input>
        <button>submit</button>
      </form>
      </div>
  
    </div>
  </section>
  
    
  </React.Fragment>
  )
}

export default Report
