import React from 'react'

export default function Content() {
  return (
    <>
    <div className="container my-5 ">
      <div className='row  gy-5 '>
        
        <div className='col-md-6 how-img  '>
          <div>
            <img
          className=" img-fluid mt-5"
						src="Assets/Images/12.jpg"
						alt="about"/>
          </div>
          </div>
          <div className="col-lg-5 col-md-5 col-12 ps-lg-5 mt-md-5 col-sm-12">
            <div>
          <h2 className="text-end section-title text-primary  text-bold mt-5 me-5 text-bold">Customer Management</h2>
          <p className="text-center lead mt-3 ms-5 me-4 col-lg-8 ps-lg-5 text-muted text-bold ">
						The main goal of Customer 
            relationship management is 
              to create a strong bond
              between customers and the 
                   company.
            To provide tools that help 
            companies satisfiy their customers, Customer
            Relationship Management Systems include different
            technologies.
					</p>
         </div>
          </div>
      
      </div>

    </div>
      
    </>
  )
}
