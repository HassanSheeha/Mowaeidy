import React from 'react'

export default function About() {
  return (
    <>
      <div className="container my-5"  >
       
      <div className='row  gy-4 '>
        <div className='col-md-6 how-img   '>
          <div>
            <img
          className=" img-fluid mt-5"
						src="Assets/Images/14.png"
						alt="about"/>
          </div>
          </div>
          <div className="col-lg-6 col-md-5 col-12 ps-lg-5 mt-md-5 col-sm-12">
            <div>
          <h2 className="text-center section-title text-primary  text-bold mt-5 me-5 ms-2 text-bold">About Us</h2>
          <p className="text-center lead mt-4 ms-5 me-4 col-lg-8 ps-lg-5 text-muted text-bold ">
			From small businesses to fortune 100 companies,
			millions of people around the world rely on  
			<span className="text-primary ms-1">Mowaeidy</span> to close deals,
			land candidates, build relationships,
			and grow their business - faster. 
			<span className="text-primary ms-1">Mowaeidy</span> is committed  to 
			delivering a robust and intuitive scheduling platform that helps 
			our customers close deals , land candidates , build relationships, and grow their business - faster
		 </p>
       
         </div>
          </div>
          
      </div>
      </div>
    </>
  )
}
