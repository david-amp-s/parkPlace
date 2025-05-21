"use client";


import Login from "@/components/login";
import FishModel from "@/components/ui/object3D/fishmodel";

export default function LoginApp() {
  return (
    <div className="min-h-screen  text-white bg-custom-radial flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center ">
        <h1 className="text-6xl  mb-10 font-vantage  mt-10"> PARK PLACE </h1>
        <section className="flex w-full items-center justify-between p-20" >
          <Login/>
          <FishModel/> 
        </section>
        
      </div>
    </div>
  );
}
