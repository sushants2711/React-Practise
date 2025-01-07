import { useEffect } from "react"

export const Question9 = ({ shopIs }) => {

    useEffect(() => {
        document.title = "shop details"
    })
    return (
        <>
            <div className="max-w-full mx-auto">
                <h1 className="text-2xl text-center font-bold py-1 md:py-2 border-b-2 border-slate-600 first-letter:text-3xl ">Online Store</h1>
            </div>
            {
                shopIs.length >= 1 ? (
                    <div className="max-w-full mx-8 md:mx-16  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-6 gap-16 overflow-hidden">
                        {
                            shopIs.map((currEle, index) => (
                                <div key={index} className="bg-gray-200 shadow-lg border-2 border-gray-500 text-center h-[260px] w-[250px] flex flex-col items-center justify-center hover:transform hover:translate-x-2 duration-500">
                                    <h1 className="text-2xl my-16">{currEle.name}</h1>
                                    <h4 className="">{currEle.category}</h4>
                                    <p className="font-bold">${currEle.price}</p>
                                </div>
                            ))
                        }

                    </div>
                ) : (
                    <div className="max-w[1320px] h-screen mx-auto flex flex-col text-center items-center justify-center">
                        <p className="text-2xl font-semibold font-serif">No data is available right now.</p>
                        <p className="my-1 ml-[280px]">Sorry, for inconvience !!</p>
                    </div>
                )}
        </>
    )
}

// Create an array of objects representing products in an online store. Each object has the following properties: id, name, price, and category. Write a React component that takes the array of products as input and returns an unordered list of products, where each list item displays the product's name, price, and category