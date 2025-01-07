import { useEffect } from "react";

export const Question7 = ({ student }) => {
  useEffect(() => {
    document.title = "Student Data";
  });

  return (
    <>
      <div className="max-w-full bg-white shadow-lg mx-auto px-4">
        <h1 className="text-center text-2xl font-bold p-4 flex justify-center items-center">
          Student Information Data!!
        </h1>
      </div>
      {student.length >= 1 ? (
        <div className="max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-4 md:gap-20 gap-4 my-8 px-4">
          {student.map((currEle, index) => (
            <div
              key={index}
              className="h-[260px] w-full sm:w-[220px] text-center flex flex-col justify-center items-center bg-white border-2 border-b-rose-500 shadow-inner p-4"
            >
              <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold">{currEle.name}</h1>
              <h3 className="text-md sm:text-lg lg:text-xl mt-2 font-semibold">{currEle.grade}</h3>
              <p className="text-sm mt-2">{currEle.attendance}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center p-4">No records found</p>
      )}
    </>
  );
};
