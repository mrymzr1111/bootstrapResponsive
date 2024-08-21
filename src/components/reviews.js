
import React from 'react';

import { Accordion, AccordionBody, AccordionHeader } from 'react-bootstrap';
import Modal from './modal';
import Offcanvas from './offcanvas';



const Reviews = () => {
 
  return (
  <div className='intro pt-5' id='gh'>
<div className='container'>
  <div className='row'>
<div className='col-6 '>
  <div className='text-right '><h6 className='mb-2'>Maryam online shop</h6>
  <p className='lead '>this is the online shop for meryem</p>
 <div className='cc'> <a href='#' ><button  className='btn w-100 bg-danger  mt-4 ms-3 text-light pt-7'>download</button>
 <button className='btn w-100 bg-warning mt-4 ms-3 text-light pt-7'>download</button></a></div>
 
  </div>
</div>

<div className='col-md-6 d-none d-block d-sm-block mt-5 mb-5 '>
<img className='img-fluid mt-2'  src='https://images.unsplash.com/photo-1528821128474-27f963b062bf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
 
</div>

<div className='posts py-10 mb-5  bg-light' id='me'>
<div className='container'>
<div className='row'>



<div className='col-lg-3  col-md-6 col-12'>
<div class="card w-100 mb-4 ">
 <img src='https://images.unsplash.com/photo-1722390878397-31b5625d7219?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'  class="card-img-top" alt='pic'/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <div className='d-flex justify-content-center'><a href="#" class="btn btn-danger">Go somewhere</a></div>
  </div>
</div>
</div>

 
 <div className='col-lg-3  col-md-6 col-12'>
<div class="card w-100 mb-4 ">
 <img src='https://images.unsplash.com/photo-1722390878397-31b5625d7219?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'  class="card-img-top" alt='pic'/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <div className='d-flex justify-content-center'>  <a href="#" class="btn btn-danger">Go somewhere</a></div>
  </div>
</div>
</div>

<div className='col-lg-3 col-md-6 col-12 mb-4'>
<div class="card w-100">
 <img src='https://images.unsplash.com/photo-1722390878397-31b5625d7219?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'  class="card-img-top" alt='pic'/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <div className='d-flex justify-content-center'>  <a href="#" class="btn btn-danger">Go somewhere</a></div>
  </div>
</div>
</div>

<div className='col-lg-3 col-md-6 col-12 mb-4'>
<div class="card w-100 ">
 <img src='https://images.unsplash.com/photo-1722390878397-31b5625d7219?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'  class="card-img-top" alt='pic'/>
  <div class="card-body" >
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <div className='d-flex justify-content-center'>  <a href="#" class="btn btn-danger">Go somewhere</a></div>
  </div>
</div>
</div>





</div>
</div>
</div>

  </div>
 
  
<Modal/>
<Offcanvas/>

<div className='custom-forms py-5'>
  <div className='container'>
    <div className='row'>

      <div className='col-lg-6 col-12'>
<form id='form_c' className='mx-1 mt-5' action=''>
<div class="mb-3 ">
    <label for="exampleInputEmail1" className="form-label">name:</label>
    <input id="input_c" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">this feild is empty</div>
  </div>

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">surname:</label>
    <input type='text' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">this feild is empty</div>
  </div>
  <div class="mb-3">
  <label for="formFile" class="form-label">Default file input example</label>
  <input class="form-control" type="file" id="formFile"/>
</div>


<select className="form-select  " aria-label="Default select example">
<option value="1">gender</option>
  <option value="1">Male</option>
  <option value="2">Female</option>
  <option value="3">none</option>
</select>

<label className='text-mute mt-3 mb-1' for="floatingTextarea2"> your comment:</label>
<textarea className="form-control style" placeholder="Leave a comment here.." id="floatingTextarea2" ></textarea>

<div className="form-check mt-3">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label className="form-check-label text-muted fontt " for="flexCheckDefault">
  I agree to the Terms of Service and Privacy Policy.
  </label>
</div>
<button className='btn btn-primary mt-3'  id='btnn' type='button' data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on bottom">

send</button>
</form>

      </div>

      <div className='col-lg-6 d-none d-lg-block'>
<img className='img-fluid mt-5 mx-5' src='https://media.istockphoto.com/id/1441351094/photo/call-center-telemarketing-and-customer-service-with-a-business-man-working-in-an-office-and.jpg?s=1024x1024&w=is&k=20&c=5YHArJUQezjc7PMvMQ89wTm4PO7N7vvItTvgtq5yiFk=' alt='pic'/>
     </div>

    </div>
  </div>
</div>

</div>
</div>







     
  
  );

}

export default Reviews;