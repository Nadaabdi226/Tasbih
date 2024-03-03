import { useState } from "react";

function Tasbih(){
    const [counter , setCounter] = useState(0);

    const handleIncrement = () => {
        setCounter(counter +1);
    };
    const handleDecrement = () => {
        if (counter > 0) {
            setCounter ( counter -1)
        }
    }

    const handleRest = () => {
        setCounter(0);

    };
    return <div className="text-center mt-[100px">
        <h1 className="text-4xl mb-10"> {counter} </h1>
        <button onClick={handleIncrement} className="bg-red-500 px-6 py-3 rounded text-3xl m-3 text-white">Increment</button>
        <button onClick={handleRest} className="bg-yellow-500 px-6 py-3 rounded text-3xl m-3 text-white">Reset</button>
        <button onClick={handleDecrement} className="bg-orange-500 px-6 py-3 rounded text-3xl m-3 text-white">Decrement</button>
    </div>
}

export default Tasbih