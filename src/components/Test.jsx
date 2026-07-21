// import React from 'react'
// import { useEffect } from 'react'
// function Test() {

//     useEffect(()=>{
//         console.log("component mounted" )
//     },[])

//   return (
//     <div>
//       <h1>Hi I am Raman!!!   </h1>
//     </div>
//   )
// }

// export default Test

// import React from 'react'
// import { useState,useEffect } from 'react'
// function Test() {
// const[count,setCount] = useState(0);

// function handler(){

//     setCount((prev)=>prev+1);

// }

// useEffect(()=>{
// console.log("count rendered count change ",count)
// },[count])

//   return (
//     <div>

//         <p>{count}</p>
//       <button onClick={handler} > added by 1 </button>
//     </div>
//   )
// }

// export default Test

// import { useEffect } from "react";

// function Timer() {
//   useEffect(() => {
//     console.log("Started");

//     const id = setInterval(() => {
//       console.log("Tick");
//     }, 1000);

//     return (()=>{
//         clearInterval(id)
//     })
//   }, []);

//   return <h1>Timer</h1>;
// }

// import React from 'react'
// import { useState,useEffect } from 'react'
// function  Test() {

//     useEffect(()=>{
//        const id =  setInterval(()=>{
//             console.log("Clicked")
//         },3000);
//         return (()=>{
//     clearInterval(id)
// })
//     },[]

// )

//   return (
//     <div>

// <h1>Ram</h1>

//     </div>
//   )
// }

// export default Test

import React, { useEffect, useState } from "react";

// function Test() {

//     useEffect(()=>{
//         window.addEventListener("resize", handlelistener);
//         return (()=>{
//             window.removeEventListener("resize", handlelistener);
//         })
//     },[])

//   const [width, setWidth] = useState(window.innerWidth);
//   console.log("Width", width);

//   function handlelistener() {
//     setWidth(window.innerWidth);
//   }

//   return (
//     <div>
//       <h1>{width}</h1>
//     </div>
//   );
// }

// export default Test;

function Test() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchuser() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setUsers(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchuser();
  }, []);

  if (loading) {
    return <p className="text-3xl font-bold">loading......</p>;
  }

  return (
    <ul>
      {users.map((item) => {
        return (
          <div key={item.id}>
            <li>{item.name}</li>
            <li>{item.email}</li>
          </div>
        );
      })}
    </ul>
  );
}

export default Test;
