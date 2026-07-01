// import React, { useState, useEffect } from "react";
// import { CiSearch, CiHeart } from "react-icons/ci";
// import { BsCart4, BsArrowRight } from "react-icons/bs";

// function Homepages() {
//   const [cartCount] = useState(3);
//   const [scrolled, setScrolled] = useState(false);

//   // Dynamic Scroll Tracking for Navbar Blur Depth
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="relative bg-[#F4F1EA] min-h-screen font-sans antialiased text-[#1A1A1A]">
      
//       {/* Embedded High-End Animation Styles */}
//       <style>{`
//         @keyframes revealUp {
//           from { opacity: 0; transform: translateY(40px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes subtleFloat {
//           0%, 100% { transform: translateY(0) rotate(0deg); }
//           50% { transform: translateY(-12px) rotate(1deg); }
//         }
//         @keyframes lineGrow {
//           from { width: 0; }
//           to { width: 100%; }
//         }
//         @keyframes marquee {
//           0% { transform: translateX(0%); }
//           100% { transform: translateX(-50%); }
//         }
//         .animate-reveal { animation: revealUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
//         .animate-float { animation: subtleFloat 6s ease-in-out infinite; }
//         .animate-line { animation: lineGrow 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.5s; }
//         .animate-marquee { animation: marquee 25s linear infinite; }
//       `}</style>

//       {/* 1. Elegant Announcement Ticker Bar */}
//       <div className="bg-[#2f634d] text-[#FAF6F0] text-[10px] tracking-[0.3em] uppercase py-2.5 overflow-hidden border-b border-emerald-900/30 whitespace-nowrap hidden sm:block">
//         <div className="inline-block animate-marquee">
//           <span>Complimentary Worldwide Shipping on orders over $250 • 15% off your first purchase with code WELCOME15 • </span>
//           <span>Complimentary Worldwide Shipping on orders over $250 • 15% off your first purchase with code WELCOME15 • </span>
//         </div>
//       </div>

//       {/* Sticky Premium Navbar (Dynamic blur depth shifts on scroll) */}
//       <nav className={`sticky top-0 z-50 flex justify-between items-center px-8 md:px-20 py-6 border-b transition-all duration-500 ${
//         scrolled ? "bg-[#F4F1EA]/95 border-[#E3DEC3] shadow-sm py-4" : "bg-[#F4F1EA]/0 border-transparent"
//       }`}>
//         <div className="font-serif tracking-[0.25em] text-xl uppercase font-black">
//           <a href="#" className="hover:opacity-70 transition-opacity">Style Wings</a>
//         </div>

//         <div className="hidden md:block">
//           <ul className="flex gap-12 font-medium text-xs tracking-[0.2em] uppercase text-gray-600">
//             {["Home", "Shop", "Blog", "Pages", "Features"].map((item) => (
//               <li key={item} className="cursor-pointer hover:text-emerald-800 transition-colors duration-300 relative py-1 group">
//                 {item}
//                 <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-emerald-800 transition-all duration-300 group-hover:w-full" />
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div className="flex gap-8 text-xl text-gray-800 items-center">
//           <CiSearch className="cursor-pointer hover:text-emerald-800 hover:scale-110 transition-transform" />
//           <div className="relative cursor-pointer group">
//             <BsCart4 className="group-hover:scale-110 transition-transform" />
//             <span className="absolute -top-2 -right-2 bg-emerald-800 text-white text-[9px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
//               {cartCount}
//             </span>
//           </div>
//           <CiHeart className="cursor-pointer hover:text-red-500 hover:scale-110 transition-transform" />
//         </div>
//       </nav>

//       {/* Unique Editorial Section Grid */}
//       <main className="max-w-7xl mx-auto px-8 md:px-20 py-8 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative">
        
//         {/* Left Side: Massive Typography Overlay Column */}
//         <div className="lg:col-span-7 flex flex-col z-20 space-y-8 opacity-0 animate-reveal">
          
//           <div className="space-y-2">
//             <p className="text-xs font-bold tracking-[0.4em] text-emerald-800 uppercase">
//               // Est. 2026 Ready-To-Wear
//             </p>
//             <div className="h-[1px] bg-emerald-800/20 w-0 animate-line" />
//           </div>

//           <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif text-[#2f634d] leading-[0.95] tracking-tight">
//             A tradition of <br />
//             <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 via-emerald-900 to-stone-800 block my-2">
//               excellence
//             </span> 
//             since.
//           </h1>

//           <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-2">
//             <p className="md:col-span-8 text-gray-600 font-light leading-relaxed text-sm md:text-base">
//               Lorem ipsum dolor sit amet consecteturm laboriosam dolor quis at neque, illum iure molestias! 
//               Autem saepe rem dolore modi illo quod temporary aesthetics built for the bold spirit.
//             </p>
            
//             <div className="md:col-span-4 bg-white/40 border border-white/60 p-4 rounded-xl backdrop-blur-sm flex flex-col justify-center">
//               <span className="text-[10px] tracking-widest uppercase text-gray-400">Seasonal</span>
//               <div className="flex items-baseline gap-1">
//                 <span className="text-3xl font-serif font-bold text-[#2f634d]">70%</span>
//                 <span className="text-xs font-bold text-emerald-800 uppercase">Off</span>
//               </div>
//             </div>
//           </div>

//           {/* Action Button & Floating Brand Values Combo */}
//           <div className="pt-4 flex flex-col sm:flex-row sm:items-center gap-10">
//             <button className="group relative overflow-hidden bg-[#2f634d] text-white text-xs tracking-[0.3em] uppercase font-semibold px-12 py-5 rounded-none shadow-xl transition-all duration-300 hover:bg-emerald-900 flex items-center gap-3">
//               <span className="relative z-10 block transform group-hover:translate-x-1 transition-transform duration-300">
//                 Explore Shop
//               </span>
//               <BsArrowRight className="relative z-10 transform group-hover:translate-x-2 transition-transform duration-300" />
//               <div className="absolute top-0 left-0 h-full w-0 bg-emerald-900 transition-all duration-500 group-hover:w-full -z-0" />
//             </button>

//             {/* Micro Brand Stat Counter */}
//             <div className="flex gap-8 text-left">
//               <div>
//                 <p className="font-serif text-lg font-bold text-[#2f634d] mb-0.5">100%</p>
//                 <p className="text-[9px] tracking-widest text-gray-400 uppercase">Organic Cotton</p>
//               </div>
//               <div className="w-[1px] bg-gray-300 h-8 self-center"/>
//               <div>
//                 <p className="font-serif text-lg font-bold text-[#2f634d] mb-0.5">Handcrafted</p>
//                 <p className="text-[9px] tracking-widest text-gray-400 uppercase">In Small Batches</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right Side: Frameless Editorial Image & Floating Accents */}
//         <div className="lg:col-span-5 relative flex flex-col items-center lg:items-end mt-12 lg:mt-0 opacity-0 animate-reveal [animation-delay:0.4s]">
//           <div className="absolute -top-8 -left-8 w-48 h-48 border border-[#E3DEC3] pointer-events-none hidden md:block" />
          
//           <div className="relative w-full max-w-sm aspect-[3/4] overflow-hidden rounded-t-[120px] rounded-b-2xl shadow-2xl border-4 border-white/80 animate-float">
//             <img 
//               className="h-full w-full object-cover filter grayscale-[15%] hover:grayscale-0 transition-all duration-1000 scale-100 hover:scale-105"
//               src="https://imgs.capitalxtra.com/images/178289?crop=16_9&width=660&relax=1&format=webp&signature=LUOFWH4RWa1CAH89c3OkJKnorxw="
//               alt="Editorial presentation"
//             />
//             <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm text-[#2f634d] h-14 w-14 rounded-full flex items-center justify-center text-[9px] tracking-widest font-bold uppercase border border-gray-100 text-center leading-tight">
//               New <br/> In
//             </div>
//           </div>

//           <div className="absolute right-[-40px] top-1/3 rotate-90 origin-right hidden xl:block text-[10px] tracking-[0.4em] uppercase text-gray-400">
//             Style Wings © Winter Edition
//           </div>
//         </div>
//       </main>

//       {/* 2. Mini Lookbook Slider Extension Tray */}
//       <section className="max-w-7xl mx-auto px-8 md:px-20 pb-20 opacity-0 animate-reveal [animation-delay:0.7s]">
//         <div className="flex items-center justify-between border-t border-[#E3DEC3] pt-8 mb-6">
//           <h3 className="font-serif text-xs tracking-[0.3em] text-[#2f634d] uppercase font-bold">Curated Collections</h3>
//           <span className="text-[11px] text-gray-400 font-light hover:text-[#2f634d] cursor-pointer transition-colors">View All Lookbooks (12)</span>
//         </div>
        
//         <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
//           {[
//             { title: "Minimal Knitwear", img: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=300&auto=format&fit=crop" },
//             { title: "Structured Blazers", img: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=300&auto=format&fit=crop" },
//             { title: "Silk Accessories", img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=300&auto=format&fit=crop" },
//             { title: "Tailored Trousers", img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=300&auto=format&fit=crop" }
//           ].map((item, i) => (
//             <div key={i} className="group cursor-pointer">
//               <div className="aspect-[3/4] overflow-hidden rounded-md bg-stone-200 relative mb-2">
//                 <img src={item.img} alt={item.title} className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105 filter contrast-[95%] brightness-[95%]" />
//                 <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//               </div>
//               <p className="text-[11px] font-medium tracking-wider uppercase text-gray-700 group-hover:text-emerald-800 transition-colors">{item.title}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//     </div>
//   );
// }

// export default Homepages;







































import React, { useState, useEffect } from "react";
import { CiSearch, CiHeart } from "react-icons/ci";
import { BsCart4, BsArrowRight } from "react-icons/bs";

function Homepages() {
  const [cartCount] = useState(3);
  const [scrolled, setScrolled] = useState(false);

  // Dynamic Scroll Tracking for Navbar Blur Depth
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // MAIN WRAPPER 
    // relative:        Establishes a coordinate system so inner elements can use "absolute" positioning
    // bg-[#F4F1EA]:    Applies a custom soft bone-white background color
    // min-h-screen:    Forces the container to take up at least 100% of the viewport height
    // font-sans:       Sets the default fallback text to a clean sans-serif font
    // antialiased:     Smooths out font rendering pixels for sharper, cleaner text look
    // text-[#1A1A1A]:  Sets global text color to an off-black hue
    <div className="relative bg-[#F4F1EA] min-h-screen font-sans antialiased text-[#1A1A1A]">
      
      {/* RAW CSS KEYFRAME ANIMATIONS */}
      <style>{`
        /* Slide-up reveal with a smooth opacity fade */
        @keyframes revealUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        /* Slow, organic vertical floating path mixed with a 1-degree tilt */
        @keyframes subtleFloat {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(1deg); }
        }
        /* Scale effect that animates width from nothing to full size */
        @keyframes lineGrow {
          from { width: 0; }
          to { width: 100%; }
        }
        /* Infinite scrolling marquee slider track offset */
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        
        /* Custom Utility Classes assigning the animations defined above */
        .animate-reveal { animation: revealUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-float { animation: subtleFloat 6s ease-in-out infinite; }
        .animate-line { animation: lineGrow 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.5s; }
        .animate-marquee { animation: marquee 25s linear infinite; }
      `}</style>


      {/* 1. ANNOUNCEMENT TICKER BANNER */}
      {/* py-2.5:          Internal vertical padding (top and bottom) */}
      {/* overflow-hidden: Clips text passing outside the banner box bounds */}
      {/* border-b:        Adds a subtle 1px border line to the bottom profile */}
      {/* whitespace-nowrap: Prevents inner text from wrapping into a secondary line */}
      {/* hidden sm:block: Hides banner on tiny mobile screens, makes it visible from tablet view up */}
      <div className="bg-[#2f634d] text-[#FAF6F0] text-[10px] tracking-[0.3em] uppercase py-2.5 overflow-hidden border-b border-emerald-900/30 whitespace-nowrap hidden sm:block">
        {/* inline-block:    Enables CSS transform animations on text spans */}
        <div className="inline-block animate-marquee">
          <span>Complimentary Worldwide Shipping on orders over $250 • 15% off your first purchase with code WELCOME15 • </span>
          <span>Complimentary Worldwide Shipping on orders over $250 • 15% off your first purchase with code WELCOME15 • </span>
        </div>
      </div>


      {/* STICKY EDITORIAL NAVIGATION BAR */}
      {/* sticky top-0:    Locks the navigation container to the viewport top on scroll */}
      {/* z-50:            Pushes the layer priority index up so it stays above everything else */}
      {/* flex:            Activates Flexbox container modeling layout control */}
      {/* justify-between: Pushes child items flush against opposing outer container edges */}
      {/* items-center:    Centers all items perfectly straight on the horizontal axis */}
      {/* px-8 md:px-20:   Dynamic horizontal inner buffer expanding on wider viewports */}
      {/* transition-all duration-500: Animates background/padding adjustments gently */}
      <nav className={`sticky top-0 z-50 flex justify-between items-center px-8 md:px-20 py-6 border-b transition-all duration-500 ${
        scrolled ? "bg-[#F4F1EA]/95 border-[#E3DEC3] shadow-sm py-4" : "bg-[#F4F1EA]/0 border-transparent"
      }`}>
        
        {/* Brand Logo */}
        {/* tracking-[0.25em]: Extends letter spacing out for premium, luxury styling */}
        <div className="font-serif tracking-[0.25em] text-xl uppercase font-black">
          <a href="#" className="hover:opacity-70 transition-opacity">Style Wings</a>
        </div>

        {/* Center Menu Links */}
        {/* hidden md:block: Completely hides menu on mobile; activates row display on desktops */}
        <div className="hidden md:block">
          <ul className="flex gap-12 font-medium text-xs tracking-[0.2em] uppercase text-gray-600">
            {["Home", "Shop", "Blog", "Pages", "Features"].map((item) => (
              // group: Marks item as a parent container so children can change state based on its hover
              <li key={item} className="cursor-pointer hover:text-emerald-800 transition-colors duration-300 relative py-1 group">
                {item}
                {/* Underline Micro-interaction Effect */}
                {/* absolute bottom-0 left-0: Pins the line directly underneath the link text */}
                {/* w-0 group-hover:w-full: Width animates from 0% to 100% when parent is hovered */}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-emerald-800 transition-all duration-300 group-hover:w-full" />
              </li>
            ))}
          </ul>
        </div>

        {/* Action Icon Actions Group */}
        <div className="flex gap-8 text-xl text-gray-800 items-center">
          <CiSearch className="cursor-pointer hover:text-emerald-800 hover:scale-110 transition-transform" />
          
          {/* Shopping Cart Icon Box */}
          <div className="relative cursor-pointer group">
            <BsCart4 className="group-hover:scale-110 transition-transform" />
            {/* Notification Badge Circle */}
            {/* absolute -top-2 -right-2: Places circle above and outside the right edge of cart layout */}
            {/* rounded-full:    Cuts item corners into a perfect circle wrapper */}
            <span className="absolute -top-2 -right-2 bg-emerald-800 text-white text-[9px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
              {cartCount}
            </span>
          </div>
          
          <CiHeart className="cursor-pointer hover:text-red-500 hover:scale-110 transition-transform" />
        </div>
      </nav>


      {/* MAIN HERO LANDING AREA */}
      {/* max-w-7xl mx-auto: Caps layout scaling width; centers block using margin-auto */}
      {/* grid:            Switches from Flexbox structure to multi-dimensional CSS Grid modeling */}
      {/* grid-cols-1 lg:grid-cols-12: Splits area into 1 layout column on mobile, 12 grids on desktop */}
      <main className="max-w-7xl mx-auto px-8 md:px-20 py-8 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative">
        
        {/* HERO LEFT BLOCK COLUMN (Occupies 7 out of 12 available tracks) */}
        <div className="lg:col-span-7 flex flex-col z-20 space-y-8 opacity-0 animate-reveal">
          
          {/* Tagline Indicator Accent */}
          <div className="space-y-2">
            <p className="text-xs font-bold tracking-[0.4em] text-emerald-800 uppercase">
              // Est. 2026 Ready-To-Wear
            </p>
            {/* Minimal line separating text block elements */}
            <div className="h-[1px] bg-emerald-800/20 w-0 animate-line" />
          </div>

          {/* Large Hero Typographic Statement */}
          {/* leading-[0.95]:    Decreases standard line-height to tightly pack large letters together */}
          {/* bg-clip-text text-transparent: Hides font color fill, showing the underlying gradient mix instead */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif text-[#2f634d] leading-[0.95] tracking-tight">
            A tradition of <br />
            <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 via-emerald-900 to-stone-800 block my-2">
              excellence
            </span> 
            since.
          </h1>

          {/* Subtext and Promo Card Inner Grid Row */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-2">
            <p className="md:col-span-8 text-gray-600 font-light leading-relaxed text-sm md:text-base">
              Lorem ipsum dolor sit amet consecteturm laboriosam dolor quis at neque, illum iure molestias! 
              Autem saepe rem dolore modi illo quod temporary aesthetics built for the bold spirit.
            </p>
            
            {/* Promo Discount Card */}
            {/* bg-white/40:     Generates semi-transparent white background (opacity 40%) */}
            {/* backdrop-blur-sm: Activates computational blurring on content moving behind this shape */}
            <div className="md:col-span-4 bg-white/40 border border-white/60 p-4 rounded-xl backdrop-blur-sm flex flex-col justify-center">
              <span className="text-[10px] tracking-widest uppercase text-gray-400">Seasonal</span>
              {/* items-baseline: Align text bases so large numbers and small words share the same bottom line */}
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-serif font-bold text-[#2f634d]">70%</span>
                <span className="text-xs font-bold text-emerald-800 uppercase">Off</span>
              </div>
            </div>
          </div>

          {/* Action Row: CTA Button + Value Props */}
          <div className="pt-4 flex flex-col sm:flex-row sm:items-center gap-10">
            {/* Shop Button */}
            {/* rounded-none:    Removes border radius entirely for sharp editorial corners */}
            <button className="group relative overflow-hidden bg-[#2f634d] text-white text-xs tracking-[0.3em] uppercase font-semibold px-12 py-5 rounded-none shadow-xl transition-all duration-300 hover:bg-emerald-900 flex items-center gap-3">
              <span className="relative z-10 block transform group-hover:translate-x-1 transition-transform duration-300">
                Explore Shop
              </span>
              <BsArrowRight className="relative z-10 transform group-hover:translate-x-2 transition-transform duration-300" />
              {/* Shutter Hover Sliding Color Effect Panel */}
              <div className="absolute top-0 left-0 h-full w-0 bg-emerald-900 transition-all duration-500 group-hover:w-full -z-0" />
            </button>

            {/* Brand Performance Micro Stats Block */}
            <div className="flex gap-8 text-left">
              <div>
                <p className="font-serif text-lg font-bold text-[#2f634d] mb-0.5">100%</p>
                <p className="text-[9px] tracking-widest text-gray-400 uppercase">Organic Cotton</p>
              </div>
              {/* Decorative Divider bar */}
              {/* w-[1px]:          Explicit width thickness of 1 pixel */}
              {/* h-8 self-center: Centers divider bar cleanly against neighbor text strings */}
              <div className="w-[1px] bg-gray-300 h-8 self-center"/>
              <div>
                <p className="font-serif text-lg font-bold text-[#2f634d] mb-0.5">Handcrafted</p>
                <p className="text-[9px] tracking-widest text-gray-400 uppercase">In Small Batches</p>
              </div>
            </div>
          </div>
        </div>


        {/* HERO RIGHT COLUMN (Occupies 5 out of 12 tracks) */}
        <div className="lg:col-span-5 relative flex flex-col items-center lg:items-end mt-12 lg:mt-0 opacity-0 animate-reveal [animation-delay:0.4s]">
          {/* Structural Geometric Accent Border Outlining The Main Frame */}
          <div className="absolute -top-8 -left-8 w-48 h-48 border border-[#E3DEC3] pointer-events-none hidden md:block" />
          
          {/* Main Frame Container Box */}
          {/* aspect-[3/4]:    Locks box structure dimension proportions into a clean portrait grid */}
          {/* rounded-t-[120px]: Creates a classic curved arch structure on the top portion */}
          <div className="relative w-full max-w-sm aspect-[3/4] overflow-hidden rounded-t-[120px] rounded-b-2xl shadow-2xl border-4 border-white/80 animate-float">
            {/* Hero Subject Image element */}
            {/* object-cover:   Prevents structural compression; image retains aspect ratio, filling box space */}
            {/* grayscale-[15%] group-hover:grayscale-0: Shifts image from artistic muted colors to crisp realistic tones */}
            <img 
              className="h-full w-full object-cover filter grayscale-[15%] hover:grayscale-0 transition-all duration-1000 scale-100 hover:scale-105"
              src="https://imgs.capitalxtra.com/images/178289?crop=16_9&width=660&relax=1&format=webp&signature=LUOFWH4RWa1CAH89c3OkJKnorxw="
              alt="Editorial presentation"
            />
            {/* Visual Round Sticker Tag Overlay */}
            <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm text-[#2f634d] h-14 w-14 rounded-full flex items-center justify-center text-[9px] tracking-widest font-bold uppercase border border-gray-100 text-center leading-tight">
              New <br/> In
            </div>
          </div>

          {/* Magazine-Style Vertical Text Sidebar Stamp */}
          {/* rotate-90 origin-right: Spins normal horizontal string vertical inside the canvas zone */}
          <div className="absolute right-[-40px] top-1/3 rotate-90 origin-right hidden xl:block text-[10px] tracking-[0.4em] uppercase text-gray-400">
            Style Wings © Winter Edition
          </div>
        </div>
      </main>


      {/* 2. CURATED COLLECTIONS LOWER DISPLAY SLIDER GALLERY */}
      <section className="max-w-7xl mx-auto px-8 md:px-20 pb-20 opacity-0 animate-reveal [animation-delay:0.7s]">
        {/* Section Title Header Border Row Layout */}
        <div className="flex items-center justify-between border-t border-[#E3DEC3] pt-8 mb-6">
          <h3 className="font-serif text-xs tracking-[0.3em] text-[#2f634d] uppercase font-bold">Curated Collections</h3>
          <span className="text-[11px] text-gray-400 font-light hover:text-[#2f634d] cursor-pointer transition-colors">View All Lookbooks (12)</span>
        </div>
        
        {/* Adaptive Product Cards Grid System Container */}
        {/* grid-cols-2 sm:grid-cols-4: 2 image columns shown on mobile, expanding to 4 side-by-side images on screens */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { title: "Minimal Knitwear", img: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=300&auto=format&fit=crop" },
            { title: "Structured Blazers", img: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=300&auto=format&fit=crop" },
            { title: "Silk Accessories", img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=300&auto=format&fit=crop" },
            { title: "Tailored Trousers", img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=300&auto=format&fit=crop" }
          ].map((item, i) => (
            <div key={i} className="group cursor-pointer">
              {/* Image Frame Wrapper */}
              <div className="aspect-[3/4] overflow-hidden rounded-md bg-stone-200 relative mb-2">
                {/* contrast/brightness filters: Softens stock photography to feel consistent with the background tone */}
                <img src={item.img} alt={item.title} className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105 filter contrast-[95%] brightness-[95%]" />
                {/* Dark Vignette Overlay Effect when Card is Active */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <p className="text-[11px] font-medium tracking-wider uppercase text-gray-700 group-hover:text-emerald-800 transition-colors">{item.title}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default Homepages;