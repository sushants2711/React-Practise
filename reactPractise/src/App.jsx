import { useEffect, useState } from "react"
import { movies } from "./API/All_Api"
import { Question1 } from "./components/Question1"
import { Question2 } from "./components/Question2"
import { products } from "./API/All_Api"

function App() {
  
  const [ movieData, setMovieData ] = useState(movies);
  const [ productData, setproductData ] = useState(products);

 


  return (
    <>
    {/* <Question1 movie={movieData}/> */}
    <Question2 product={productData} />
    </>
  )
}

export default App
