import React from "react";

function FeatureCard({ title, desc }) {
  return (
    
      <div className=" border-2  rounded-md bg-blue-200 p-2 shadow-lg ">
        <h2 className="   font-bold">{title}</h2>
        <p className="">
          {desc}
        </p>
      </div>
    
  );
}

function CardPractice() {
  const desc =
    " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id doloremque dolore veritatis libero ut. Unde vel, minima voluptatum neque amet debitis error! Suscipit aliquid hic libero alias quia recusandae rerum. ";
     const paymentdesc = "payment can be done after your food reach at your place"
     const support  = "WE are 24/7 here for your support  "
  return (
    <div className="   grid grid-cols-1 md:grid-cols-3 text-center gap-6   ">
      <FeatureCard title="Fast Delivery" desc={desc} />
      <FeatureCard title="Payment"  desc = {paymentdesc}/>
      <FeatureCard title="Support 24/7" desc={support} />
    </div>
  );
}

export default CardPractice;
