import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

// function Card({ name, profession, des }) {
//   return (
//     <div className="mx-auto mt-10 w-80 bg-red-200 border border-slate-200 rounded-2xl flex flex-col items-center text-center shadow-xl cursor-pointer overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-blue-500  hover:shadow-2xl">
//       {/* Profile Image Wrapper */}
//       <div className="flex justify-center items-center pt-8 pb-6">
//         <img
//           className="h-28 w-28 object-cover rounded-full ring-4 ring-white shadow-md"
//           src="../File/profile.jpg"
//           alt={`${name}'s profile`}
//         />
//       </div>

//       {/* Content Area */}
//       <div className="bg-white w-full flex flex-col items-center px-6 pb-6">
//         <div className="mb-4">
//           <h2 className="font-bold text-2xl text-slate-800">{name}</h2>
//           <p className="text-sm font-medium text-indigo-600 tracking-wide mt-1">
//             {profession}
//           </p>
//         </div>

//         {/* Dividers updated to standard className and subtle colors */}
//         <div className="h-px w-full bg-slate-100"></div>

//         <p className="py-4 text-sm text-slate-600 leading-relaxed min-h-[80px] flex items-center justify-center">
//           {des}
//         </p>

//         <div className="h-px w-full bg-slate-100"></div>

//         {/* Fixed social alignments and icons */}
//         <div className="flex gap-6 pt-5 w-full justify-center">
//           <a
//             href="#"
//             className="flex items-center gap-2 text-slate-600 hover:text-blue-500 transition-colors text-sm"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <FaTwitter className="text-lg" />
//             <span>Twitter</span>
//           </a>
//           <a
//             href="#"
//             className="flex items-center gap-2 text-slate-600 hover:text-blue-700 transition-colors text-sm"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <FaLinkedin className="text-lg" />
//             <span>LinkedIn</span>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }



export default function CardPractice() {
  return (
    <div className=" grid grid-cols-3  gap-4  bg-[#cfc6b0]  ">
      <Card name="raman" profession="computer" des="des" />
      <Card name="raman" profession="computer" des="des" />
      <Card name="raman" profession="computer" des="des" />
      <Card name="raman" profession="computer" des="des" />
      <Card name="raman" profession="computer" des="des" />
      <Card name="raman" profession="computer" des="des" />
      <Card name="raman" profession="computer" des="des" />
      <Card name="raman" profession="computer" des="des" />
      <Card name="raman" profession="computer" des="des" />
      <Card name="raman" profession="computer" des="des" />
      <Card name="raman" profession="computer" des="des" />
      <Card name="raman" profession="computer" des="des" />
      <Card name="raman" profession="computer" des="des" />
      <Card name="raman" profession="computer" des="des" />
      <Card name="raman" profession="computer" des="des" />
      <Card name="raman" profession="computer" des="des" />
      <Card name="raman" profession="computer" des="des" />
      <Card name="raman" profession="computer" des="des" />
      <Card name="raman" profession="computer" des="des" />
      <Card name="raman" profession="computer" des="des" />
    </div>
  );
}












export  function Card({ 
  name = "John Doe", 
  profession = "Software Engineer", 
  des = "Passionate about building scalable web applications and creating beautiful user experiences.", 
  imgUrl = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&h=256&q=80" 
}) {
  return (
    <div className="group relative mx-auto mt-10 w-80 bg-white border border-slate-100 rounded-3xl flex flex-col items-center text-center shadow-xl hover:shadow-2xl hover:shadow-indigo-500/10 cursor-pointer overflow-hidden transition-all duration-300 ease-out hover:-translate-y-2">
      
      {/* Decorative Gradient Background Top Header */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-indigo-500 to-purple-600"></div>

      {/* Profile Image Wrapper */}
      <div className="relative z-10 flex justify-center items-center pt-14 pb-4">
        <img
          className="h-28 w-28 object-cover rounded-full ring-4 ring-white shadow-lg transition-transform duration-300 group-hover:scale-105"
          src={imgUrl}
          alt={`${name}'s profile`}
        />
      </div>

      {/* Content Area */}
      <div className="w-full flex flex-col items-center px-6 pb-6 z-10">
        <div className="mb-4">
          <h2 className="font-bold text-xl text-slate-800 tracking-tight transition-colors group-hover:text-indigo-600">
            {name}
          </h2>
          <p className="text-xs font-semibold text-purple-600 tracking-wider uppercase mt-1">
            {profession}
          </p>
        </div>

        {/* Subtle Divider */}
        <div className="h-px w-full bg-slate-100/80"></div>

        {/* Description */}
        <p className="py-4 text-sm text-slate-500 leading-relaxed min-h-[90px] flex items-center justify-center italic">
          "{des}"
        </p>

        {/* Subtle Divider */}
        <div className="h-px w-full bg-slate-100/80"></div>

        {/* Social Links */}
        <div className="flex gap-6 pt-5 w-full justify-center">
          <a
            href="#"
            className="flex items-center gap-2 text-slate-400 hover:text-sky-500 transition-colors duration-200 text-sm font-medium"
            onClick={(e) => e.stopPropagation()}
          >
            <FaTwitter className="text-lg" />
            <span>Twitter</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-2 text-slate-400 hover:text-blue-700 transition-colors duration-200 text-sm font-medium"
            onClick={(e) => e.stopPropagation()}
          >
            <FaLinkedin className="text-lg" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );
}