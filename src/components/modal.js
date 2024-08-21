

import React from 'react';

const Modal = () => {
    return (
        <div>
            
<div className='modal-section text-center'  >
<div >
<h4 > title of this</h4>
<p >  description of website</p>
<p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
</p>
<button className='btn btn-primary'  data-bs-toggle="modal" data-bs-target="#myModal">Register</button>


<div class="modal fade" id="myModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header bg-light">
        <h5 class="modal-title " id="staticBackdropLabel">Enter your information</h5>
        <button className='btn btn-custom' type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div>

      <div className='pt-3 meryem' >
<div className='container-xl'>
  <div className='row'>
<div className='col-lg-12 col-md-10 col-sm-9 col-12'>
<form>
            <div class="form-group">
                <label for="exampleFormControlInput1" class="form-label fs-sm text-muted">Username:</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter your username..."/>
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1" class="form-label fs-sm text-muted">Email address:</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="name@example.com"/>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1" class="form-label fs-sm text-muted">Password:</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter your password..."/>
            </div>
        </form>
</div>
     
    </div>
      </div>
      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Cancel</button>
        <button type="button" class="btn  btn-warning" data-bs-dismiss="modal">Submit</button>
   
      </div>
    </div>
  </div>
</div>
 

</div>
</div>
</div>
        </div>
    );
}

export default Modal;

