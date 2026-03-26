import React, { useState } from "react";

const Home = () => {
  const [hearts, setHearts] = useState([]);

  const createHearts = () => {
    const newHearts = [];

    for (let i = 0; i < 25; i++) {
      newHearts.push({
        id: Math.random(),
        left: Math.random() * 100,
        delay: Math.random() * 0.5,
        size: Math.random() * 20 + 10,
      });
    }

    setHearts(newHearts);

    // remove hearts after animation
    setTimeout(() => {
      setHearts([]);
    }, 2000);
  };

  return (
    <section className="relative overflow-hidden flex flex-col items-center pb-48 text-center text-sm text-white max-md:px-2 bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/bg-image-grain.png')] bg-cover bg-center font-poppins">
      
      {/* ❤️ Hearts Container */}
      <div className="pointer-events-none absolute inset-0">
        {hearts.map((heart) => (
          <span
            key={heart.id}
            className="absolute animate-float"
            style={{
              left: `${heart.left}%`,
              bottom: "0px",
              fontSize: `${heart.size}px`,
              animationDelay: `${heart.delay}s`,
            }}
          >
            ❤️
          </span>
        ))}
      </div>

      {/* Community Users */}
      <div className="flex flex-wrap items-center justify-center p-1.5 mt-24 md:mt-28 rounded-full border border-slate-400 text-xs">
        <div className="flex items-center">
          <img
            className="size-7 rounded-full border-2 border-white"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=50"
            alt=""
          />
          <img
            className="size-7 rounded-full border-2 border-white -translate-x-2"
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=50"
            alt=""
          />
          <img
            className="size-7 rounded-full border-2 border-white -translate-x-4"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=50&h=50&auto=format&fit=crop"
            alt=""
          />
        </div>
        <p className="-translate-x-2">Join community of 1m+ founders</p>
      </div>

      {/* Heading */}
      <h1 className="font-berkshire text-[45px]/[52px] md:text-6xl/[65px] mt-6 max-w-4xl">
        Empowering creators to build on their own terms.
      </h1>

      {/* Description */}
      <p className="text-base mt-2 max-w-xl">
        Flexible tools, thoughtful design and the freedom to build your way. No
        limitations, no compromises.
      </p>

      <p className="text-base mt-3 md:mt-7 max-w-xl">
        Secure your spot early and unlock our limited-time founding rate.
      </p>

      {/* Email Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createHearts(); // ❤️ trigger animation
        }}
        className="flex items-center mt-8 max-w-lg h-16 w-full rounded-full border border-slate-50"
      >
        <input
          type="email"
          required
          placeholder="Enter email address"
          className="w-full h-full outline-none bg-transparent pl-6 pr-2 text-white placeholder:text-slate-300 rounded-full"
        />
        <button
          type="submit"
          className="bg-white text-slate-800 hover:bg-gray-300 text-nowrap px-8 md:px-10 h-12 mr-2 rounded-full font-medium transition"
        >
          Early access
        </button>
      </form>

      {/* Animation CSS */}
      <style>{`
        @keyframes floatUp {
          0% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translateY(-600px) scale(1.5);
            opacity: 0;
          }
        }

        .animate-float {
          animation: floatUp 2s linear forwards;
        }
      `}</style>
    </section>
  );
};

export default Home;



// import React, { useState } from "react";

// const Home = () => {
//   const [hearts, setHearts] = useState([]);

//   const createHearts = () => {
//     const newHearts = [];

//     for (let i = 0; i < 25; i++) {
//       newHearts.push({
//         id: Math.random(),
//         left: Math.random() * 100,
//         delay: Math.random() * 0.5,
//         size: Math.random() * 20 + 10,
//       });
//     }

//     setHearts(newHearts);

//     setTimeout(() => {
//       setHearts([]);
//     }, 2000);
//   };

//   return (
//     <section className="relative overflow-hidden flex flex-col items-center pb-48 text-center text-sm text-white max-md:px-2 bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1a] font-poppins min-h-screen">
      
//       {/* ❤️ Hearts */}
//       <div className="pointer-events-none absolute inset-0">
//         {hearts.map((heart) => (
//           <span
//             key={heart.id}
//             className="absolute animate-float"
//             style={{
//               left: `${heart.left}%`,
//               bottom: "0px",
//               fontSize: `${heart.size}px`,
//               animationDelay: `${heart.delay}s`,
//             }}
//           >
//             ❤️
//           </span>
//         ))}
//       </div>

//       {/* 🔥 Logo Text (Sansera) */}
//       <h1 className="font-berkshire text-5xl md:text-7xl mt-16 text-white tracking-wide">
//         Sansera
//       </h1>

//       {/* Community Users */}
//       <div className="flex flex-wrap items-center justify-center p-1.5 mt-16 rounded-full border border-slate-400 text-xs">
//         <div className="flex items-center">
//           <img
//             className="size-7 rounded-full border-2 border-white"
//             src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=50"
//             alt=""
//           />
//           <img
//             className="size-7 rounded-full border-2 border-white -translate-x-2"
//             src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=50"
//             alt=""
//           />
//           <img
//             className="size-7 rounded-full border-2 border-white -translate-x-4"
//             src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=50&h=50&auto=format&fit=crop"
//             alt=""
//           />
//         </div>
//         <p className="-translate-x-2">Join community of 1m+ founders</p>
//       </div>

//       {/* Heading */}
//       <h2 className="font-berkshire text-[40px]/[50px] md:text-6xl/[65px] mt-6 max-w-4xl">
//         Empowering creators to build on their own terms.
//       </h2>

//       {/* Description */}
//       <p className="text-base mt-2 max-w-xl">
//         Flexible tools, thoughtful design and the freedom to build your way. No
//         limitations, no compromises.
//       </p>

//       <p className="text-base mt-3 md:mt-7 max-w-xl">
//         Secure your spot early and unlock our limited-time founding rate.
//       </p>

//       {/* Email Form */}
//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           createHearts();
//         }}
//         className="flex items-center mt-8 max-w-lg h-16 w-full rounded-full border border-slate-50"
//       >
//         <input
//           type="email"
//           required
//           placeholder="Enter email address"
//           className="w-full h-full outline-none bg-transparent pl-6 pr-2 text-white placeholder:text-slate-300 rounded-full"
//         />
//         <button
//           type="submit"
//           className="bg-white text-slate-800 hover:bg-gray-300 text-nowrap px-8 md:px-10 h-12 mr-2 rounded-full font-medium transition"
//         >
//           Early access
//         </button>
//       </form>

//       {/* Animation */}
//       <style>{`
//         @keyframes floatUp {
//           0% {
//             transform: translateY(0) scale(1);
//             opacity: 1;
//           }
//           100% {
//             transform: translateY(-600px) scale(1.5);
//             opacity: 0;
//           }
//         }

//         .animate-float {
//           animation: floatUp 2s linear forwards;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Home;