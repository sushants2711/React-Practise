import { useEffect, useState } from "react"
import { movies } from "./API/All_Api"
import { Question1 } from "./components/Question1"
import { Question2 } from "./components/Question2"
import { products } from "./API/All_Api"
import { library } from "./API/All_Api"
import { Question3 } from "./components/Question3"


function App() {
  
  const [ movieData, setMovieData ] = useState(movies);
  const [ productData, setproductData ] = useState(products);
  const [ book, setBook ] = useState(library)
 


  return (
    <>
    {/* <Question1 movie={movieData}/> */}
    {/* <Question2 product={productData} /> */}
    <Question3 books={book} />
    </>
  )
}

export default App
