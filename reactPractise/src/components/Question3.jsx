export const Question3 = ({ books }) => {
    return (
        <>

            <div className="max-w-full mx-auto shadow-lg">
                <header>
                    <h1 className="text-center text-2xl font-bold my-3 md:my-4 border-b-2 border-black first-letter:text-3xl font-serif ">Books Library</h1>
                </header>
            </div>
            {
                books.length >= 1 ? (
                    <div className="max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 ">
                        {
                            books.map((currEle, index) => (
                                <div key={index} className="text-center bg-cyan-100 shadow-lg h-[300px] w-[300px] rounded-full border-2 border-gray-300 flex flex-col justify-center items-center my-3 md:my-5 mx-3 md:mx-8 hover:border-b-2 hover:border-green-300 hover:animate-spin ">
                                    <h1 className="text-2xl font-bold hover:text-3xl duration-200 mt-4">{currEle.title}</h1>
                                    <h4 className="text-xl font-semibold mt-4">{currEle.author}</h4>
                                    <p className="font-semibold mt-4">{currEle.rating}*</p>
                                </div>
                            ))
                        }

                    </div>


                ) : (
                    <div className="max-w-[1320px] mx-auto text-center py-5">
                        <p className="text-2xl font-semibold">No Books details available.</p>
                    </div>

                )
            }
        </>
    )
}
