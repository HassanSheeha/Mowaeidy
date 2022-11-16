import React from 'react'

export default function Reminder () {
  return (
    <>
     <div className="container my-5 ">
      <div className='row  gy-5 '>
        
          <div className="col-lg-5 col-md-5 col-12 ps-lg-5 mt-md-5 col-ms-12">
            <div>
          <h2 className="text-left section-title text-primary text-bold mt-5 ms-5 text-bold">Rimenders</h2>
          <p className="text-left lead mt-4 ms-5 text-muted text-bold bg-light">
						Life happens - and sometimes we need  
            afew daily reminders throughout the 
              day - when the mind just goes too fast 
             and our feelings, senseless.
            Sometimes, We just need a few right 
            words to make us feel better - andif
            this is What you need, I hope you find 
            the daily, simple reminder you need
            right now in your life.</p>
         </div>
          </div>
          <div className='col-md-6 ms-5  how-img  '>
          <div>
            <img
          className=" img-fluid mt-5  " 
						src="Assets/Images/13.jpg"
						alt="about"/>
          </div>
          </div>
      
      </div>

    </div>
      
    </>
  )
}
