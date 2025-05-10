"use client";


import FishModel from "@/components/ui/dashboard/fishmodel";
import Navbar from "@/components/ui/navbar";


export default function Dashboard() {
  return (
    <div className="min-h-screen  text-white bg-custom-radial flex flex-col">
      <Navbar/>
      <main className="flex-1 flex flex-col items-center justify-center p-4 ">
        <h1 className="text-5xl  mb-10 font-vantage  mt-10"> PARK PLACE </h1>
        <FishModel/> 
        
      </main>
    </div>
  );
}
