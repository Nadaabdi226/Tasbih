import {useState} from "react"

function Header(){
    const [Open , setOpen] = useState(false)

    //Function that handles open action
    const handleOpen = () => {
        setOpen(true)
    }


        const handleClose = () => {
            setOpen(false)
        }
    


    
    return  (
        <div>
    <div className="bg-green-500 flex justify-between p-10  text-white ">
            <h1 className="text-5xl font-bold">Tasbih </h1>
            <i style={{display: Open == true ? "none" : " " }} onClick ={handleOpen} class="fa-solid fa-bars text-4xl sm:hidden"></i>
            <i onClick={handleClose} style={{display: Open== true ? "block" : "none"}} class="fa-solid fa-xmark"></i>

            <ul className="hidden sm:flex gap-16 text-3xl">
                <li>Home</li>
                <li>About</li>
                <li>Service</li>
                <li>Blogs</li>
            </ul>
        </div>

        <ul style={{display: Open == true? "flex" : " "}} className="hidden bg-red-500 text-white flex-col space-y-5 p-2 text-3xl">
                <li>Home</li>
                <li>About</li>
                <li>Service</li>
                <li>Blogs</li>
            </ul>
        </div>
    );
    

}

export default Header