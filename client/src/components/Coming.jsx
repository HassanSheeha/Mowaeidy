import React from 'react'

export default function Coming () {
  return (
    <>
        <div className="container my-5 bg-light   ">
      <div className='row  gy-1  '>
       
          <div className="col-lg-5 col-md-5 col-12 ps-lg-5 mt-md-4 col-ms-12 bg-light">
            <div>
          <h4 className="text-left section-title text-primary text-bold mt-5 me-5 text-bold ">C O  M  I N G S O O N</h4>

          <h3 className="text-primary text-bold mt-5 text-left">Reviews</h3>
          <p className="text-left lead mt-4 ms-2 text-muted text-bold bg-light">
            Get the right feedback from
            Customers..
			</p>
            <button className='btn btn-primary btn-lg mt-5 px-5 pl-3 '>Explore More Features</button>
         </div>
          </div>
          <div className='col-md-6 ms-5 how-img   '>
          <div>
            <img
          className=" img-fluid  ms-5 bg-light  " 
						src="Assets/Images/15.png"
						alt="about"/>
          </div>
        
      </div>
      </div>

    </div>
    </>
  )
}
