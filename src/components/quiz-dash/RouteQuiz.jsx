import { Route, Routes } from "react-router-dom"
import Maindash from "./Maindash"
import Tech from "./Tech"
import Religious from "./Religious"
import Movies from "./Movies"

const RouteQuiz = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Maindash />} />
                <Route path="/tech" element={<Tech />} />
                <Route path="/religious" element={<Religious />} />
                <Route path="/movies" element={<Movies />} />
            </Routes>
        </div>
    )
}

export default RouteQuiz