"use client"
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { PondModel } from "./ponModel";
import { Bounds, OrbitControls } from "@react-three/drei";

const FishModel = () => {
    const isTable = false;
    
    return (  
        <div className="w-[1180px] h-[520px] ">
        <Canvas camera={{ position: [0, 0, 17], fov: 45 }}>
          <ambientLight intensity={0.2} color="#1a1a40" />
          <directionalLight position={[8, 4, 2]} intensity={5} />
          <Suspense>
              <PondModel/>
          </Suspense>
        </Canvas>
      </div>     
    );
}
 
export default FishModel
;