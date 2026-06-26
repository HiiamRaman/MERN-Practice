// import React from "react";
// import { useState } from "react";
// function Practice() {
//   const [count, setCount] = useState(0);

//   function handler() {
//     setCount(count + 1);
//   }

//   function dechandler() {
//     setCount(count - 1);
//   }

//   return (
//     <div>
//       <p>{count} </p>

//       <button className="bg-blue-300 rounded-md" onClick={handler}>
//         {" "}
//         Click me to add by 1
//       </button>
//       <button className="bg-blue-300 rounded-md" onClick={dechandler}>
//         {" "}
//         Click me to add by 1
//       </button>
//     </div>
//   );
// }

// export default Practice;

// form example

import { useState } from "react";
import { useEffect } from "react";
// function Practice() {
//   const [name, setName] = useState("");
//   const [age, setAge] = useState(null);
//   const [profession, setProfession] = useState("");

//   function nameHandler(e) {
//     e.preventDefault()
//     setName( e.target.value);
//   }
//  useEffect(()=>{
//    console.log("name is",name )
//   },[name])

//   return (
//     <div className="flex flex-col  ">
//       <label htmlFor="name">Write ypur name</label>

//       <input onChange={nameHandler} type="text" value={name} className="border-1" placeholder="Enter your name" />

//       <label htmlFor="name">Write ypur age</label>
//       <input type="number" className="border-1" placeholder="Enter your age" />

//       <label htmlFor="name">Write ypur age</label>
//       <input
//         type="text"
//         className="border-1"
//         placeholder="Enter your profession"
//       />
//     </div>
//   );
// }

// export default Practice;

//Live name preview

import React from "react";

// function Practice() {
//   const [name, setName] = useState("Stranger");

//   function handler(e) {
   
//     setName(e.target.value);
//   }

//   useEffect(() => {
//     console.log(name);
//   },[name]);

//   return (
//     <div>
//       <label htmlFor=""> Write Your name : </label>
//       <input onChange={handler} value={name} type="text" placeholder="name" />

//       <h1> `Hello I am {name}` </h1>
//     </div>
//   );
// }

// export default Practice;

