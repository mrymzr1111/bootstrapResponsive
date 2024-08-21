import React from 'react';
import Reviews from './reviews';

const Offcanvas = () => {
    return (
        <div className='text-center mt-4 '>
         <button class="btn btn-warning" type='button' data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
  menue
</button>
<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div>
setting
    </div>
   
  </div>
</div>
        </div>
    );
}

export default Offcanvas;
