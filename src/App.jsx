import { BrowserRouter } from "react-router-dom"

import "./components/firebase/config"

import { onAuthStateChanged, getAuth } from "firebase/auth"
import { useEffect, useState } from "react"
import RouteQuiz from "./components/quiz-dash/RouteQuiz"


const App = () => {

  const [login, setLogin] = useState(false)
  const auth = getAuth()

  useEffect(() => {
    onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        setLogin(true)
      }
    })
  })

  return (
    <div>
      <BrowserRouter>
        <RouteQuiz />
      </BrowserRouter>
    </div>
  )
}

export default App