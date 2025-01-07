import { useEffect } from "react"

export const Question10 = ({ data }) => {
    useEffect(() => {
        document.title = "cookbook"
    })
    return(
        <>
        <div className="max-w-[1320px] mx-auto">
                <h1 className="text-3xl text-center font-bold py-3 md:py-5 border-b-2 border-slate-300">Cooking Instructions</h1>
            </div>

            { data.length >= 1 ? (

                <div className="max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pt-6">

                    {data.map(( currEle, index ) => (
                        
                        <div key={ index } className="text-center shadow-lg h-auto border-2 border-white hover:-translate-y-2 duration-500 flex flex-col justify-center items-center hover:bg-pink-100 m-4 md:m-0">

                            <h1 className="text-2xl font-semibold pt-2">{currEle.name}</h1>
                            <p className="text-sm mt-4 p-4 justify-between  text-balance">{currEle.ingredients}</p>
                            <p className="text-sm text-balance justify-between">{currEle.instructions}</p>

                        </div>
                    ))
                    }
                </div>
            ) : (
                <div className="max-w-[1320px] mx-auto text-center py-5">
                    <p className="text-2xl font-semibold">No Cooking details available.</p>
                </div>
            )}
        </>
    )
}