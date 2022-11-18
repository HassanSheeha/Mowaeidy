import React from 'react'
import Card from 'react-bootstrap/Card';


export default function Features() {
  return (
    <>
    <div className='container '>
    <div className=" row mt-5 ms-3 ">

      <div className="col-12 col-md-12 col-lg-4 mt-3 ">
      <Card className= 'bg-light  text-bold pb-2'>
      <Card.Img className="mt-5 ms-5 bg-light" style={{width:'8rem'}} variant="top" src="Assets/Images/6.png"  />
      <Card.Body>
        <Card.Title className="text-primary text-bold ms-3">Manage Customers</Card.Title>
        <Card.Text className="text-muted  mt-4 ms-3">
        Manage Your Customer data. Their appointment history all in one place.
        </Card.Text>
        <h5 className=" text-warning  text-end mt-5 me-5  ">More</h5>
      </Card.Body>
    </Card>
    </div>

    <div className='col-12 col-md-12 col-lg-4 mt-3 '>
    <Card className= 'bg-primary  text-bold pb-2' >
      <Card.Img className= " mt-3  mx-auto"  variant="top" style={{width:'8rem'}} src="Assets/Images/8.png" />
      <Card.Body>
        <Card.Title className="text-warning text-center text-bold mt-1 ">Reminders</Card.Title>
        <Card.Text className="text-white text-center mt-4  ">
          Avoid no-shows & missed appointments..
        </Card.Text>
        <h5 className="text-warning text-end me-5  mb-3">More</h5>
      </Card.Body>
    </Card>
   </div>

   <div className='col-12 col-md-12 col-lg-4 mt-3'>
    <Card className= 'bg-light  text-bold pb-2'>
      <Card.Img className="mt-3 ms-4 bg-light" variant="top" style={{width:'8rem'}} src="Assets/Images/7.png" />
      <Card.Body>
        <Card.Title className="text-primary ms-4 ">Reviews</Card.Title>
        <Card.Text className="text-muted  mt-3 ms-4">
        Get the right feedback from Customers..
        </Card.Text>
        <Card.Text className="text-primary ms-4 mt-2">
        (COMING SOON)
        </Card.Text>
        <h5 className="text-warning text-end me-5   mt-2">More</h5>
     
        
      </Card.Body>
    </Card>

    </div>
    <div className='col-12 col-md-12 col-lg-4 mt-5'>
    <Card className= 'bg-light text-bold  pb-2'>
      <Card.Img className="mt-5 ms-5 bg-light" variant="top" style={{width:'8rem'}} src="Assets/Images/9.png" />
      <Card.Body>
        <Card.Title className="text-primary ms-4">Take Payment</Card.Title>
        <Card.Text className="text-muted mt-3 ms-4">
         Support Cash and Card Payment right from your picktime calender..
        </Card.Text>
        <h5 className="text-warning text-end me-5 mt-5  ">More</h5>
      </Card.Body>
    </Card>
    </div>
    <div className='col-12 col-md-12 col-lg-4 mt-5'>
    <Card className= 'bg-light text-bold pb-2' >
      <Card.Img  className="mt-5 ms-5 bg-light" variant="top" style={{width:'8rem'}} src="Assets/Images/10.png" />
      <Card.Body>
        <Card.Title className="text-primary ms-4 mt-1">Book Widget</Card.Title>
        <Card.Text className="text-muted mt-4 ms-4 mt-1">
       Turn your website into a booking engine..
        </Card.Text>
      </Card.Body>
      <h5  className="text-warning  mx-3  mt-5  text-end me-5 " style={{textDecoration:'none'}}>More</h5>
    </Card>
    </div>
    <div className='col-12 col-md-12 col-lg-4 mt-5'>
    <Card className= 'bg-light text-bold  pb-2'>
      <Card.Img className="mt-4 ms-5 bg-light" variant="top" style={{width:'8rem'}} src="Assets/Images/11.png" />
      <Card.Body>
        <Card.Title className="text-primary  ms-4">Multiple Locations</Card.Title>
        <Card.Text className="text-muted  mt-3 ms-4">
      Check what is going on in all your bussiness locations at a glance..
        </Card.Text>
      </Card.Body>
      <h5  className="text-warning  mx-3  mt-4  text-end me-5 " style={{textDecoration:'none'}}>More</h5>
    </Card>
  </div>
   </div>
   </div>
    </>
  )
}
