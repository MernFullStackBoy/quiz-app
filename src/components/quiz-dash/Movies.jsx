import { useState, useEffect } from "react"
import { movies } from "../data/data"
import { Link } from "react-router-dom"

const Movies = () => {

    const [next, setNext] = useState(0)

    const [disabled, setDisabled] = useState(false)

    const [correct, setCorrect] = useState(false)

    const [incorrect, setIncorrect] = useState(false)

    const [check, setCheck] = useState(false)

    const [res, setRes] = useState(0)

    function nextQue() {
        if (!check) {
            alert("Check something")
        } else {
            setNext(prev => prev + 1)
        }
    }

    function rightAnswer(num) {
        movies[next].map(item => {
            if (item.answer === item.other[num].name) {
                setCorrect(true)
                setDisabled(true)
                item.other[num].right = true
                setCheck(true)

                if (item.other[num].right = true) {
                    setRes(prev => prev + 1)
                }

            } else {
                setIncorrect(true)
                setDisabled(true)
                setCheck(true)
                setCorrect(false)
            }
        })
    }

    useEffect(() => {
        setDisabled(false)
        setIncorrect(false)
        setIncorrect(false)
        setCheck(false)
    }, [next])



    return (
        <div
            className="
                w-[100%]
                h-[100vh]
                after:top-0
                bg-history
                bg-cover
                bg-center
                after:w-[100%]
                after:h-[100vh]
                after:absolute 
                after:backdrop-brightness-[0.5]
                "
        >
            {next !== 10 ? (

                <div
                    className="
                relative 
                z-10
                backdrop-blur-[20px]
                rounded-[10px]
                p-10
                w-[450px]
                h-[633px]
                mx-auto
                shadow-xl 
                phones:max-w-[100%]
                phones:h-[100vh]
                phones:backdrop-blur-0
                "
                >

                    {movies[next].map(item => {

                        return (

                            <div
                                key={item.id}
                            >

                                <h1
                                    className="
                              text-white 
                                font-bold
                                text-[30px]
                                text-center
                             "
                                >{item.ques}</h1>

                                <div
                                    className="
                                w-[100%]
                                h-[400px]
                                mt-[60px]
                             "
                                >

                                    {item.other.map(answer => {

                                        return (

                                            <label
                                                className="
                                                    shadow-2xl
                                                    drop-shadow-xl
                                                    items-center
                                                    rounded-[70px]
                                                    h-[60px]
                                                    mt-[20px]
                                                    pl-[30px]
                                                    pr-[30px]
                                                    flex
                                                    justify-between 
                                                    bg-black
                                                    bg-opacity-[0.3]
                                                    phones:h-[50px]
                                              "
                                                key={answer.id}
                                            >

                                                <input
                                                    checked={check}
                                                    disabled={disabled}
                                                    onClick={() => rightAnswer(answer.id)}
                                                    className="
                                            w-[20px]
                                            h-[20px]
                                            "
                                                    type="radio"
                                                    name="answer"
                                                />

                                                <h1
                                                    className={`${(correct && answer.right) ?
                                                        "text-green-600" :
                                                        (incorrect && !answer.right) ?
                                                            "text-red-600" :
                                                            "text-white"} 
                                                    font-bold
                                                    text-[17px]
                                                    phones:text-[12px]
     
                                        `}>{answer.name}</h1>

                                            </label>

                                        )

                                    })}

                                    <button
                                        onClick={nextQue}
                                        className="
                                bg-slate-500
                                    font-semibold
                                text-white
                                    w-[120px]
                                    h-[50px]
                                    rounded-[40px]
                                    transition 
                                    active:scale-[1.02]
                                    mt-[70px]
                                      "
                                    >Next</button>

                                </div>

                            </div>

                        )

                    })}

                </div>

            ) : (
                <div
                    className="
                        w-[440px]
                        h-[633px]
                        backdrop-blur-[20px]
                        mx-auto
                        relative
                        z-10
                        phones:max-w-[100%]
                    "
                >
                    <h1
                        className="
                            text-[50px]
                            text-center
                            font-bold
                            text-white
                            relative
                            top-[40px]
                        "
                    >You found</h1>
                    <div
                        className={`
                            w-[200px]
                            h-[200px]
                            mx-auto
                            rounded-[50%]
                            relative
                            top-[70px]
                            border-[20px]
                            font-bold
                            flex
                            flex-col
                            justify-center
                            items-center
                        `}
                    >
                        <h1
                            className="
                                text-[120px]
                                text-white
                                font-extrabold
                            "
                        >{res}</h1>
                    </div>

                    <h1
                        className="
                            text-center
                            mt-[90px]
                            text-white
                            font-bold
                            text-[50px]
                        "
                    >Answer</h1>

                    <div
                        className="
                            flex
                            justify-center
                            mt-[20px]
                            gap-[20px]
                        "
                    >

                        <Link to="/"
                            className="
                                w-[150px]
                                h-[45px]
                                bg-slate-600
                                flex
                                justify-center
                                items-center
                                font-bold
                                rounded-[20px]
                                text-white
                            "
                        >
                            Main Menu
                        </Link>
                        

                    </div>

                </div>
            )}
        </div>
    )
}

export default Movies