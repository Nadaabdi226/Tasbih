import { useState } from "react"

function Light() {

        const [color, setColor] = useState("")

        //function Ligh on
        
        const handleOn =() => {
            setColor("yellow")
        }
                                
    
        //function Light Off

        const handleOff =() => {
            setColor("white")
        }

    
   return (
        <div className="flex justify-center mt-7">
            <div>
                <div style={{backgroundColor: color}} className="  rounded-full w-[300px] h-[300px] border-2 border-blue-500 "></div>
                    <button onClick={handleOn} className="bg-red-500 rounded-full text-3xl ml-16 px-3 py-2 text-white">OFF</button>
                    <button onClick ={handleOff} className="bg-red-500 rounded-full text-3xl ml-16 px-3 py-2  text-white">ON</button>

            </div>

        </div>
    )
}

export default Light