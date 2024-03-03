function Menu(props){
    return <div className="flex gap-6 items-center">
        <img className="w-[140px] h-[110px] rounded" src={props.image}/>
        <div>
            <h1 className="font-bold text-1xl"> {props.name} </h1>
            <p> {props.desc} </p>
            <h1 className="font-bold text1xl">${props.price} </h1>
            <button className="bg-red-500 px-4 py-2 rounded mt-2"> Order Now</button>
            
        </div>

    </div>
}

export default Menu