import React from "react";

import {createRoot} from "react-dom/client"
import "./index.css"

const root = document.getElementById("root")

import Header from "./components/Header"
import Footer from "./components/Footer"
import Menu from "./components/Footer"
import Light from "./components/Light"
import Tasbih from "./components/Tasbih"



createRoot(root).render(
    <div>
        
        {/* <Header/> */}
        {/* <div className="grid grid-cols-[400px_400px] justify-around gap-3 mt-3">

            <Menu image="https://img.freepik.com/free-photo/vertical-view-vegan-tofu-pancakes-with-fruits-white-plate_181624-17934.jpg?t=st=1709023288~exp=1709026888~hmac=a1180a24f666c57b8d677f8f7e9fa43d3dda3c73b8ee3be46a0b5ed2ce7441ae&w=740"
            name="Kenya meat"
            price="18"
            desc="Free delivery"
            />

           <Menu image="https://img.freepik.com/free-photo/vertical-view-vegan-tofu-pancakes-with-fruits-white-plate_181624-17934.jpg?t=st=1709023288~exp=1709026888~hmac=a1180a24f666c57b8d677f8f7e9fa43d3dda3c73b8ee3be46a0b5ed2ce7441ae&w=740"
            name="Jabuti meat"
            price="15"
            desc="paid delivery"
            />
            <Menu image="https://img.freepik.com/free-photo/vertical-view-vegan-tofu-pancakes-with-fruits-white-plate_181624-17934.jpg?t=st=1709023288~exp=1709026888~hmac=a1180a24f666c57b8d677f8f7e9fa43d3dda3c73b8ee3be46a0b5ed2ce7441ae&w=740"
            name="Hargeysa meat"
            price="10"
            desc="Free delivery"
            />
            
            <Menu image="https://img.freepik.com/free-photo/vertical-view-vegan-tofu-pancakes-with-fruits-white-plate_181624-17934.jpg?t=st=1709023288~exp=1709026888~hmac=a1180a24f666c57b8d677f8f7e9fa43d3dda3c73b8ee3be46a0b5ed2ce7441ae&w=740"
            name="Bosaso meat"
            price="8"
            desc="paid delivery"
            />
            
            <Menu image="https://img.freepik.com/free-photo/vertical-view-vegan-tofu-pancakes-with-fruits-white-plate_181624-17934.jpg?t=st=1709023288~exp=1709026888~hmac=a1180a24f666c57b8d677f8f7e9fa43d3dda3c73b8ee3be46a0b5ed2ce7441ae&w=740"
            name="Garowe meat"
            price="5"
            desc="Free delivery"
            />
               </div> */}
                <Tasbih/> 
               {/* <Light/>
            <Footer/> */}
           
             

    </div>
);
