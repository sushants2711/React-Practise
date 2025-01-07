import { useEffect } from "react"

export const Question8 = ({ listIs }) => {
    useEffect(()=>{
        document.title = "Movie WatchList"
    })
    return(
        <>
        <div className="max-w-full mx-auto ">
            <h1 className="text-center text-2xl font-semibold first-letter:text-4xl py-2 bg-black text-white ">Movie WatchList</h1>
        </div>

        {
                listIs.length >= 1 ? (
                    <div className="max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 my-12 ">
                        {
                            listIs.map((currEle, index) => (
                        <div key={index} className="max-w-[240px] h-[200px] bg-white  text-center flex flex-col mx-8 shadow-inner hover:-translate-y-2 duration-500 justify-center items-center border-b-2 border-blue-100 hover:bg-gray-400">
                            <h1 className="">{currEle.title}</h1>
                            <p className=""> {currEle.director}</p>
                            <p className=""> {currEle.runtime}</p>
                        </div>
                        ))
                    }
                    </div>
                ) : (
                    <div className="max-w-[1320px] mx-auto text-center py-5">
                        <p className="text-2xl font-semibold">No movie WatchList available.</p>
                    </div>
                )
            }
        </>
    )
}