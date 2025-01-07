import { useState } from "react"

import { movies } from "./API/All_Api"
import { products } from "./API/All_Api"
import { library } from "./API/All_Api"
import { employees } from "./API/All_Api"
import { cookBook } from "./API/All_Api"
import { carData } from "./API/All_Api"
import { students } from "./API/All_Api"
import { watchlist } from "./API/All_Api"
import { shopProducts } from "./API/All_Api";
import { cookbookReceipe } from "./API/All_Api"

import { Question1 } from "./components/Question1"
import { Question2 } from "./components/Question2"
import { Question3 } from "./components/Question3"
import { Question4 } from "./components/Question4"
import { Question5 } from "./components/Question5"
import { Question6 } from "./components/Question6"
import { Question7 } from "./components/Question7"
import { Question8 } from "./components/Question8"
import { Question9 } from "./components/Question9"
import { Question10 } from "./components/Question10";

function App() {
  
  const [ movieData, setMovieData ] = useState(movies);
  const [ productData, setproductData ] = useState(products);
  const [ book, setBook ] = useState(library);
  const [ emplyoee, setEmployee ] = useState(employees);
  const [ cookRecepie, setCookReceipe ] = useState(cookBook);
  const [ carDataIs, setCarDataIs ] = useState(carData);
  const [ studentData, setStudentData ] = useState(students);
  const [ movieList, setMovieList ] = useState(watchlist);
  const [ shop, setShop ] = useState(shopProducts);
  const [ cook, setCook ] = useState(cookbookReceipe);
  
  return (
    <>
     <Question1 movie={movieData}/> 
    <Question2 product={productData} /> 
     <Question3 books={book} /> 
     <Question4 empyData={emplyoee} />
     <Question5 cook={cookRecepie}/> 
     <Question6 carInfo={carDataIs}/>
     <Question7 student={studentData} /> 
     <Question8 listIs={movieList}/> 
     <Question9 shopIs={shop}/>
    <Question10 data={cook} />
    </>
  )
}

export default App
