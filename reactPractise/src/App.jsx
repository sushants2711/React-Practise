import { useState } from "react"
import { movies } from "./API/All_Api"
import { Question1 } from "./components/Question1"


function App() {
  
  const [ movieData, setMovieData ] = useState(movies)

  return (
    <>
    <Question1 movie={movieData}/>
    </>
  )
}

export default App
