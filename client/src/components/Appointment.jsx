import React from 'react'


export default function Appointment() {
  return (
    <>

        <div className="container my-5"  >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,320L1440,224L1440,320L0,320Z"></path></svg>
      <div className='row  gy-4 '>
        <div className='col-md-6 how-img   '>
          <div>
            <img
          className=" img-fluid mt-5"
						src="Assets/Images/19.jpg"
						alt="about"/>
          </div>
          </div>
          <div className="col-lg-5 col-md-5 col-12 ps-lg-5 mt-md-5 col-sm-12">
            <div>
          <h2 className="text-center section-title text-primary  text-bold mt-5 me-5 text-bold">Take An Appointment</h2>
          <p className="text-center lead mt-4 ms-4 me-4 col-lg-8 ps-lg-5 text-muted text-bold ">
			Quickly send meeting polls,
            find the most popular times,
            and book your meeting - all 
            within one scheduling 
            platform.
		 </p>
         <button className='btn btn-primary btn-lg mt-2 ms-5 px-5  text-center'>Take Appointment</button>
         <h5 href='/' className=" text-left mt-5 ms-5 me-5 text-warning">More Industries</h5>
         <h6 href='/' className=" text-left mt-1 ms-5 me-5 text-primary">No credit card required to see all Industries*</h6>
         </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,0L120,10.7C240,21,480,43,720,64C960,85,1200,107,1320,117.3L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
      </div>
      </div>
 
    </>
  )
}
