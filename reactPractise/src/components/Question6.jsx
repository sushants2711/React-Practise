import { useEffect } from "react";

export const Question6 = ({ carInfo }) => {

    useEffect(()=> {
        document.title = "Cars"
    })
    
    return (
        <>
        
            <div className="max-w-[1320px] mx-auto">
                <h1 className="text-3xl text-center font-bold py-3 md:py-5 border-b-2 border-slate-300">Car Inforamation</h1>
            </div>

            { carInfo.length >= 1 ? (

                <div className="max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pt-6">

                    {carInfo.map(( currEle, index ) => (
                        
                        <div key={ index } className="text-center shadow-lg h-[260px] border-2 border-white hover:-translate-y-2 duration-500 flex flex-col justify-center items-center hover:bg-pink-100 m-4 md:m-0">

                            <h1 className="text-3xl font-semibold">{currEle.model}</h1>
                            <p className="text-2xl mt-4 pl-16 underline">{currEle.make}</p>
                            <p className="text-xl mt-8">{currEle.price}</p>

                        </div>
                    ))
                    }
                </div>
            ) : (
                <div className="max-w-[1320px] mx-auto text-center py-5">
                    <p className="text-2xl font-semibold">No movie details available.</p>
                </div>
            )}
        </>
    );
};
