"use client"

import { useRouter } from "next/navigation";

const Navbar = () => {
   const router = useRouter();
    return ( 
        <div className="flex justify-center mt-10">
           <div className="flex h-[110px] bg-white/3 w-[900px] rounded-full justify-center" >
           <ul className="flex items-center justify-around w-full">
            <li onClick={()=> router.push("/")}>home</li>
            <li>reservation</li>
            <li onClick={()=> router.push("/parkingSpace")}>space parking</li>
            <li>contact</li>
           </ul>
           </div> 
        </div>
     );
}
 
export default Navbar;