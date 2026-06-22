import React, { useEffectEvent } from "react";



function TestimonialCard({name,review,rating}) {
  return (
    <div className="bg-green-300 border-2 rounded-md flex  flex-col items-center " >
           <h1>{name}</h1>
           <p>{review}</p>
           <p>{rating}</p>
    </div>
  )
}




function Testimonials() {

   const data = [{
    name:"Raman",
    review:"YOU must watch",
    rating:5,
   }]
  return (
    <div className="grid grid-cols-3 gap-4 m-5">
       


       {data.map((item,index)=>{
        <TestimonialCard  key={index} name={item.name} review={item.review} rating={item.ratings} />

       })}
        
    </div>
  )
}

export default Testimonials

  




