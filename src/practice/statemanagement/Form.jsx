// import React, { useState } from "react";

// function StudentForm() {
//   // Define the initial empty state structure
//   const initialFormState = {
//     fullName: "",
//     email: "",
//     course: "Computer Science",
//   };

//   const [formData, setFormData] = useState(initialFormState);

//   // Handle input changes dynamically
//   function handleChange(e) {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   }

//   // Handle form submission
//   function handleSubmit(e) {
//     // 1. PREVENT PAGE REFRESH
//     e.preventDefault();

//     // Process/Log the data (simulating saving it)
//     console.log("Registration Successful:", formData);
//     alert(`Successfully registered: ${formData.fullName}`);

//     // 2. CLEAR FORM AFTER SUBMISSION
//     // Resetting the state automatically clears all controlled inputs
//     setFormData(initialFormState);
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
//       <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full border border-gray-200">
//         <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
//           Student Registration
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-5">
//           {/* Full Name Input */}
//           <div className="flex flex-col gap-1.5">
//             <label className="text-sm font-semibold text-gray-700">Full Name</label>
//             <input
//               type="text"
//               name="fullName"
//               value={formData.fullName} // Controlled input
//               onChange={handleChange}
//               placeholder="John Doe"
//               className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-all text-gray-800"
//               required
//             />
//           </div>

//           {/* Email Input */}
//           <div className="flex flex-col gap-1.5">
//             <label className="text-sm font-semibold text-gray-700">Email Address</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email} // Controlled input
//               onChange={handleChange}
//               placeholder="johndoe@example.com"
//               className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-all text-gray-800"
//               required
//             />
//           </div>

//           {/* Course Dropdown */}
//           <div className="flex flex-col gap-1.5">
//             <label className="text-sm font-semibold text-gray-700">Select Course</label>
//             <select
//               name="course"
//               value={formData.course} // Controlled input
//               onChange={handleChange}
//               className="px-4 py-2 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-all text-gray-800"
//             >
//               <option value="Computer Science">Computer Science</option>
//               <option value="Data Science">Data Science</option>
//               <option value="Business Administration">Business Administration</option>
//             </select>
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full mt-2 py-2.5 bg-blue-600 text-white font-semibold rounded-md shadow-md transition-all duration-300 hover:bg-blue-700 hover:shadow-lg active:translate-y-px"
//           >
//             Register Student
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default StudentForm;

// import React from "react";
// import { useState } from "react";
// function Form() {
//   const [data, setData] = useState("");

//   function handler(e) {
//     e.preventDefault();

//     setData(e.target.value);
//   }

//   function displayhandler() {
//     if (data.trim() !== "") {
//       const render = document.getElementById("display");
//       //create  a brand new html

//       const newFruit = document.createElement("p");
//       //set its text ccontetnt with data

//       newFruit.textContent = data;
//       render.appendChild(newFruit);

//       setData("");
//     }
//   }
//   return (
//     <div>
//       <label htmlFor=""> Fruit name : </label>
//       <input
//         onChange={handler}
//         value={data}
//         type="text"
//         placeholder="Enter a fruit"
//       />

//       <div>
//         <button onClick={displayhandler}> Add me </button>
//       </div>

//       <div id="display">
//         <h1>The Fruits are </h1>
//       </div>
//     </div>
//   );
// }

// export default Form;

// import React, { useState } from "react";

// function Form() {
//   const [data, setData] = useState("");
//   const [fruits, setFruits] = useState([]);

//   function handler(e) {
//     setData(e.target.value);
//   }

//   function displayFruits(e) {
//     if (data.trim() !== "") {
//       e.preventDefault();

//       setFruits([...fruits, data]);

//       setData(" ");
//     }
//   }

//   return (
//     <div className="min-h-screen  flex justify-center items-center text-center">
//       <div className="   w-190 h-100 bg-green-300 justify-center items-center">
        
//         <input  className="text-xl shadow-2xl   cursor-pointer   border outline-none rounded-md p-3 font-bold"
//           type="text"
//           value={data}
//           onChange={handler}
//           placeholder="Enter fruit name"
//         />  
       
//          <button   className="bg-blue-300 m-5 p-4 cursor-pointer rounded-lg hover:translate-y-2  hover:text-white shadow-lg transition-all hover:duration-300" onClick={displayFruits}>Add Fruit </button>

//           <div className="m-10 font-semibold text-2xl ">
//           <h1>The Fruits are </h1>

//           <ul>
//             {fruits.map((item, index) => {
//               return (
//                 <div key={index}>
//                   <li>{item}</li>
//                 </div>
//               );
//             })}
//           </ul>
//         </div>
//         </div>
        
       
       
      
//     </div>
//   );
// }

// export default Form;





import React, { useState } from "react";

function Form() {
  const [data, setData] = useState("");
  const [fruits, setFruits] = useState([]);

  function handler(e) {
    setData(e.target.value);
  }

  function displayFruits(e) {
    if (data.trim() !== "") {
      e.preventDefault();
      setFruits([...fruits, data.trim()]);
      setData(""); // Cleared properly without an accidental space
    }
  }

  return (
    // 1. Smooth gradient background instead of flat white
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex justify-center items-center p-4">
      
      {/* 2. Card layout with explicit flex-col, crisp shadows, and max-width limitations */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-100 p-8 flex flex-col items-center">
        
        <h2 className="text-2xl font-bold text-slate-800 mb-6">Fruit Tracker</h2>
        
        {/* 3. Input and Button wrapper */}
        <div className="w-full flex flex-col gap-3 sm:flex-row sm:gap-2">
          <input
            className="flex-1 text-base border border-slate-200 outline-none rounded-xl p-3 font-medium transition-all focus:border-green-500 focus:ring-2 focus:ring-green-100 placeholder:text-slate-400"
            type="text"
            value={data}
            onChange={handler}
            placeholder="Enter fruit name..."
          />
          
          <button
            className="bg-green-500 text-white font-semibold px-5 py-3 rounded-xl shadow-md hover:bg-green-600 active:scale-95 transition-all duration-200 whitespace-nowrap"
            onClick={displayFruits}
          >
            Add Fruit
          </button>
        </div>

        {/* 4. Display Area (Only shows up if there are items) */}
        {fruits.length > 0 && (
          <div className="w-full mt-8 pt-6 border-t border-slate-100 text-left">
            <h3 className="font-bold text-slate-500 text-xs uppercase tracking-wider mb-3">
              The Fruits ({fruits.length})
            </h3>

            <ul className="space-y-2 max-h-60 overflow-y-auto pr-1">
              {fruits.map((item, index) => (
                // Valid semantic HTML with clean, subtle list item blocks
                <li
                  key={index}
                  className="bg-slate-50 border border-slate-100 text-slate-700 font-medium px-4 py-2.5 rounded-xl text-base capitalize animate-fadeIn"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Form;