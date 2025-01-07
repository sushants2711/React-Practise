export const Question4 = ({ empyData }) => {
    return (
        <>
            <div className="max-w-full mx-auto">
                <header>
                    <h1 className="text-center text-3xl font-bold border-b-4 border-blue-500 bg-gradient-to-r from-blue-400 to-blue-600 text-white py-4 shadow-md">
                        Employee Details
                    </h1>
                </header>
            </div>

            {empyData.length >= 1 ? (
                <div className="max-w-[1320px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 my-8 p-5">
                    {empyData.map((curr, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-lg h-[280px] w-[280px] border border-gray-300 rounded-lg flex flex-col justify-center items-center text-center transition-transform hover:-translate-y-2 hover:shadow-xl duration-300">
                            <div className="font-semibold">
                                <span className="block text-gray-700 text-lg">Department</span>
                                <hr className="border-t border-gray-300 my-2" />
                                <h4 className="text-gray-600 my-2">{curr.department}</h4>
                            </div>
                            <h1 className="my-4 text-xl font-bold text-blue-600">{curr.name}</h1>
                            <p className="text-sm text-gray-500">Salary: {curr.salary}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="max-w-[1320px] mx-auto text-center py-10">
                    <p className="text-2xl font-semibold text-gray-600">No Employee Details Available...</p>
                </div>
            )}
        </>
    );
};