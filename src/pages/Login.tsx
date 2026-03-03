import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Ensure you have react-router-dom installed
// import axiosInstance from "../api/axios.js";


export default function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });


//   const handleSubmit = async (e) => {
//   e.preventDefault();

//   try {
//     const res = await axiosInstance.post("/auth/login", formData);

//     // save token
//     localStorage.setItem("token", res.data.token);
//     localStorage.setItem("user", JSON.stringify(res.data.user));

//     // redirect to dashboard
//     navigate("/");

//   } catch (error) {
//     alert(error.response?.data?.message || "Login failed");
//   }
// };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
    
  //   // In a real app, you'd validate credentials here.
  //   // For now, we're taking the "express lane" to the dashboard.
  //   if (formData.email && formData.password) {
  //     navigate("/");
  //   } else {
  //     alert("Please enter your credentials to proceed.");
  //   }
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen flex bg-white font-sans text-[#2F3E2E]">
      {/* LEFT SIDE: Brand Visuals */}
      <div className="hidden lg:flex w-1/2 bg-[#8FAF8B] relative flex-col items-center justify-center p-12 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-64 h-64 rounded-full bg-[#9EB99A] opacity-50" />
        <div className="absolute bottom-[-5%] right-[-5%] w-96 h-96 rounded-full bg-[#6F8F6A] opacity-30" />
        
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-serif tracking-[0.2em] text-white drop-shadow-sm">
            BOARD <span className="block mt-2">&</span> BITES
          </h1>
          <div className="mt-8 w-24 h-1 bg-white/40 mx-auto rounded-full" />
          <p className="mt-8 text-white/90 font-light tracking-wide italic text-lg">
            "Food crafted with care for your celebrations."
          </p>
        </div>

        {/* <div className="absolute bottom-10 left-12 text-white/60 text-sm">
          ADMINISTRATION PORTAL v2.0
        </div> */}
      </div>

      {/* RIGHT SIDE: Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-8 md:px-16 lg:px-24">
        <div className="w-full max-w-md">
          <div className="lg:hidden text-center mb-10">
            <h1 className="text-2xl font-serif tracking-widest text-[#2F3E2E]">
              BOARD & BITES
            </h1>
          </div>

          <div className="mb-10">
            <h2 className="text-4xl font-serif mb-2">Welcome Back</h2>
            <p className="text-gray-500">Please enter your admin credentials.</p>
          </div>
{/* 
          <form onSubmit={handleSubmit} className="space-y-6"> */}
          
          <form  className="space-y-6">
            <div className="group">
              <label className="block text-xs uppercase tracking-widest font-bold text-gray-400 mb-1 group-focus-within:text-[#6F8F6A] transition-colors">
                Email Address
              </label>
              <input
                required
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="chef@boardbites.com"
                className="w-full py-4 bg-transparent border-b-2 border-gray-100 outline-none focus:border-[#6F8F6A] transition-all duration-300 placeholder:text-gray-300"
              />
            </div>

            <div className="group">
              <label className="block text-xs uppercase tracking-widest font-bold text-gray-400 mb-1 group-focus-within:text-[#6F8F6A] transition-colors">
                Password
              </label>
              <input
                required
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full py-4 bg-transparent border-b-2 border-gray-100 outline-none focus:border-[#6F8F6A] transition-all duration-300 placeholder:text-gray-300"
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <label className="flex items-center text-sm text-gray-500 cursor-pointer">
                <input type="checkbox" className="mr-2 accent-[#6F8F6A] rounded shadow-none focus:ring-0" />
                Remember me
              </label>
              <button type="button" className="text-sm font-medium text-[#6F8F6A] hover:underline bg-transparent border-none">
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              className="w-full mt-8 py-4 bg-[#6F8F6A] text-white tracking-widest font-bold text-sm uppercase 
                         hover:bg-[#2F3E2E] transform hover:-translate-y-1 transition-all duration-300 shadow-xl active:scale-95"
            >
             Login
            </button>
          </form>

          {/* <footer className="mt-20 text-xs text-gray-400 text-center lg:text-left">
            © {new Date().getFullYear()} Board & Bites Catering. <br className="md:hidden" />
            All Rights Reserved.
          </footer> */}
        </div>
      </div>
    </div>
  );
}