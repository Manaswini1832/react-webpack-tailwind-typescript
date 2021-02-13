import React from "react";

const Counter = () => {

    const [num, setNum] = React.useState(0);

    function increment(e : React.MouseEvent<HTMLButtonElement>) : void {
        e.preventDefault();
        setNum(num + 1);
    } 

    return( 
        <div className="w-screen h-screen flex flex-col justify-center items-center">
           <div className="m-3 text-sm bg-blue-300 flex justify-center items-center w-80 py-10 px-5 rounded-lg">React</div> 
           <div className="m-3 text-sm bg-blue-300 flex justify-center items-center w-80 py-10 px-5 rounded-lg">TypeScript</div>
           <div className="m-3 text-sm bg-blue-300 flex justify-center items-center w-80 py-10 px-5 rounded-lg">Tailwind</div> 
           <button className="bg-blue-300 rounded-sm p-3 tex-sm" onClick={increment}>{num}</button>
        </div>
    )
}

export default Counter;