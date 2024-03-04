import{ useState} from "react"

function Imageslider(){

    const [index , setIndex] = useState(0)

    //function that update the state

    const handleNext = () => {
        if (index < images.length -1){
        setIndex(index +1)
        }
    }

    //function xalinayo imageska back in logu celiyo
    const handlePrev = () => {
        if (index > 0){
            setIndex(index -1)

        }
    }

    const images = [
        "https://img.freepik.com/free-photo/carpenter-man-working-roof_23-2148748788.jpg?t=st=1709552572~exp=1709556172~hmac=3d341080d0529283919348cf0f53225e8fdd3a8179ba56f80a02ff5943957167&w=996",
        "https://img.freepik.com/free-psd/architecture-project-instagram-stories_23-2150259225.jpg?t=st=1709552625~exp=1709556225~hmac=edf16a0dae36f502716ee7e6fd8d67287823ee95da0b97875935a35a752b34f0&w=1060",
        "https://img.freepik.com/premium-psd/international-day-women-girls-science-instagram-posts_23-2148885490.jpg?w=1480",
        "https://img.freepik.com/free-photo/low-angle-greyscale-shot-airplane-flying-high-rise-buildings_181624-18257.jpg?t=st=1709551275~exp=1709554875~hmac=ef633dd0a9d702d9be16a715f9effab5ac32b543cb9f6eb5412f1473388e1182&w=1380",
    ]
    return <div className="text-center mt-6">

        <img className="w-[800px] h-[350px] ml-[350px] rounded ali" src={images[index]} />
        <button onClick={handleNext} className="bg-yellow-500 text-3xl px-4 py-2 text-center rounded mt-6 text-white font-bold">Next</button>
        <button onClick={handlePrev} className="bg-yellow-500 text-3xl px-4 py-2 rounded ml-10 text-white font-bold" >Prev</button>

    </div>

}

export default Imageslider