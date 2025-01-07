

export const Question5 = ({ cook }) => {
    return (
        <>
            <div className="max-w-full mx-auto">
                <header>
                    <h1 className="text-center bg-white shadow-lg  text-2xl md:text-3xl p-2 hover:bg-black hover:text-white first-letter:font-bold first-letter:text-3xl">
                        Cooking Receipe
                    </h1>
                </header>
            </div>

            {/* box design */}

            {
                cook.length >= 1 ? (
                    <div className="max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 my-12 ">
                        {
                            cook.map((currEle, index) => (
                        <div key={index} className="max-w-[240px] h-[200px] bg-orange-300 text-center flex flex-col  md:mx-8 shadow-lg hover:-translate-y-2 duration-500 justify-center items-center">
                            <h1 className="">{currEle.recipeName}</h1>
                            <p className=""> {currEle.creatorName}</p>
                        </div>
                        ))
                    }
                    </div>
                ) : (
                    <div className="max-w-[1320px] mx-auto text-center py-5">
                        <p className="text-2xl font-semibold">No movie details available.</p>
                    </div>
                )
            }
        </>
    )
}