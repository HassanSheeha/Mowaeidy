import React from 'react'

export default function Schedule() {
  return (
    <>
     <div className="container my-5 ">
      <div className='row  gy-5 '>

      <div className="col-lg-5 col-md-5 col-12 ps-lg-4 mt-md-5 col-sm-12 ">
            <div>
          <h2 className="text-center section-title text-primary ms-5  text-bold mt-5 me-5 text-bold">Schedule as a team</h2>
          <p className="text-center lead mt-3 ms-0 me-4 col-lg-12 ps-lg-4 text-muted text-bold ">
			Mowaeidy adapts to both you and your 
            team's scheduling preferences. Co-host a 
            client call with a colleague, email
            reminders and follow-ups, and integrate 
            everything with your preferred software 
            tools.
		</p>
        <h3 href='/' className=" text-center ms-5 me-5 text-warning">More</h3>
         </div>
          </div>
        
        <div className='col-md-5 ms-5 me-5 how-img  '>
          <div>
            <img
          className=" img-fluid  mt-5"
						src="Assets/Images/16.png"
						alt="about"/>
          </div>
          </div>
      </div>
    </div>
    </>
  )
}
