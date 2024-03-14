import { useState } from "react"
import { Link } from "react-router-dom"

const Maindash = () => {

    let num = Math.trunc(Math.random() * 3)


    return (

        <div
            className="
                mt-[15px]
                rounded-[10px]
                drop-shadow-xl
                shadow-xl
                w-[1100px]
                h-[600px]
                mx-auto
                phones:max-w-[100%]
                phones:h-[100vh]
                phones:fixed
            "
        >
            {/* Left Menubar */}

            <div
                className="
                    float-left
                    flex
                    flex-col
                    items-center
                    h-[600px]
                    w-[270px]
                    phones:w-[60px]
                    phones:h-[100vh]
                    phones:items-center
                "
            >

                <h1
                    className="
                        fa-solid fa-gamepad 
                        opacity-[0.8]
                        text-center
                        text-[75px]
                        mt-[15px]
                        phones:text-[35px]
                    "
                ></h1>

                <div
                    className="
                        mt-[60px]
                        phones:w-[100%]
                        phones:flex
                        phones:flex-col
                        phones:items-center
                        phones:mt-[30px]
                        phones:gap-4
                    "
                >

                    <button
                        id="btn"
                        className="
                            phones:w-[40px]
                            phones:h-[40px]
                            phones:flex
                            phones:justify-center
                            phones:items-center
                            transition
                            active:scale-[1.02]
                            flex
                            font-semibold 
                            justify-between 
                            pl-[40px]
                            pr-[40px]
                            phones:p-0
                            shadow-xl
                            items-center
                            gap-9
                            w-[210px]
                            rounded-[40px]
                            h-[60px]
                            bg-slate-700
                            bg-opacity-[0.5]
                            text-white 
                        "
                    >

                        <i
                            className="
                                fa-solid
                                fa-database
                                phones:text-[15px]
                            "
                        ></i>

                        <span
                            className="
                                text-[18px]
                                phones:hidden
                            "
                        >Dashboard</span>

                    </button>

                    <button
                        id="btn"
                        className="
                            phones:w-[40px]
                            phones:h-[40px]
                            phones:flex
                            phones:justify-center
                            phones:items-center
                            transition
                            active:scale-[1.02]
                            flex
                            font-semibold 
                            justify-between 
                            pl-[40px]
                            pr-[40px]
                            phones:p-0
                            shadow-xl
                            items-center
                            gap-9
                            w-[210px]
                            rounded-[40px]
                            h-[60px]
                            bg-slate-700
                            bg-opacity-[0.5]
                            text-white 
                            mt-[10px]
                        "
                    >

                        <i
                            className="
                                fa-solid fa-headphones 
                                phones:text-[15px]
                            "
                        ></i>

                        <span
                            className="
                                text-[18px]
                                phones:hidden
                            "
                        >Notification</span>

                    </button>

                    <button
                        id="btn"
                        className="
                            phones:w-[40px]
                            phones:h-[40px]
                            phones:flex
                            phones:justify-center
                            phones:items-center
                            transition
                            active:scale-[1.02]
                            flex
                            font-semibold 
                            justify-between 
                            pl-[40px]
                            pr-[40px]
                            phones:p-0
                            shadow-xl
                            items-center
                            gap-9
                            w-[210px]
                            rounded-[40px]
                            h-[60px]
                            bg-slate-700
                            bg-opacity-[0.5]
                            text-white 
                            mt-[10px]
                        "
                    >

                        <i
                            className="
                            fa-solid fa-bell
                                phones:text-[15px]
                            "
                        ></i>

                        <span
                            className="
                                text-[18px]
                                phones:hidden
                            "
                        >Support</span>

                    </button>

                </div>

                <button
                    onClick={() => window.close()}
                    className="
                        phones:w-[40px]
                        phones:h-[40px]
                        phones:rounded-[50%]
                        bg-slate-700
                        text-white
                        phones:mt-[100%]
                        w-[100px]
                        h-[30px]
                        mt-[70%]
                        rounded-[20px]
                    "
                >
                    <i className="fa-solid fa-door-open"></i>
                    <span className="phones:hidden">Exit</span>
                </button>

            </div>

            {/* Left Menubar end */}

            {/* Navbar */}

            <nav
                className="
                    float-start
                    w-[830px]
                    h-[70px]
                    flex
                    items-center 
                    pl-[20px]
                    pr-[20px]
                    justify-between
                    phones:w-[81%]
                    phones:h-[50px]
                    phones:justify-around
                "
            >

                <h1
                    className="
                        text-[45px]
                        font-bold
                        opacity-[0.5]
                        phones:text-[15px]
                        phones:absolute
                        phones:mr-[150px]
                    "
                >
                    Quiz Time
                </h1>

                <Link
                    to={num === 0 ?
                        "tech" :
                        num === 1 ?
                            "movies" :
                            "religious"}
                    className="
                         phones:w-[40px]
                         phones:h-[40px]
                         "
                >
                    <button
                        className="
                            active:scale-[1.02]
                            w-[200px]
                            bg-opacity-[0.5]
                            transition 
                            rounded-[30px]
                            text-white
                            text-[17px]
                            font-bold
                            h-[60px]
                            ml-[100px]
                            bg-slate-700 
                            phones:w-[40px]
                            phones:h-[40px]
                        "
                    >

                        <i
                            className="
                                hidden phones:block fa-solid fa-flag-checkered
                            "></i>

                        <span className=" phones:hidden ">
                            Start Quiz
                        </span>
                    </button>

                </Link>

                <div
                    className="
                        w-[60px]
                        h-[60px]
                        bg-red-900
                        rounded-[50%]
                        flex
                        justify-center
                        items-center
                        text-white
                        font-bold
                        text-[30px]
                        ml-[100px]
                        phones:w-[40px]
                        phones:h-[40px]
                    "
                >
                    J
                </div>

            </nav>

            {/* Navbar end */}


            {/* Dashboard */}

            <div
                id="right"
                className="
                    pl-[40px]
                    float-right 
                    w-[830px]
                    h-[530px]
                    shadow-xl 
                    phones:w-[81%]
                    phones:h-[100vh]
                    phones:overflow-scroll
                "
            >

                <h1
                    className="
                        font-extrabold 
                        mt-[40px]
                        text-[30px]
                        opacity-[0.5]
                        phones:text-[20px]
                    "
                >Select Topic</h1>

                <h2
                    className="
                        font-semibold
                        opacity-[0.5]
                        text-[17px]
                        phones:text-[13px]
                    "
                >Featured category</h2>


                <div
                    className="
                        flex
                        flex-wrap
                        justify-around
                        mt-[30px]
                        phones:mt-[10px]
                        phones:gap-[3px]
                        phones:items-center
                    "
                >

                    <Link to="movies">

                        <div
                            className="
                                w-[215px]
                                h-[152px]
                                p-[50px]
                                bg-history 
                                rounded-[20px]
                                bg-cover 
                                phones:w-[140px]
                                phones:h-[80px]
                            "
                        >

                            <h1
                                className="
                                  text-white
                                    font-bold
                                    text-[20px]
                                    mt-[55px]
                                    phones:mt-0
                                "
                            >Movies</h1>

                        </div>

                    </Link>

                    <Link to="/tech">

                        <div
                            className="
                                w-[215px]
                                h-[152px]
                                p-[50px]
                                bg-tech
                                rounded-[20px]
                                bg-cover
                                phones:w-[140px]
                                phones:h-[80px]
                            "
                        >

                            <h1
                                className="
                                    text-white
                                    font-bold
                                    text-[20px]
                                    mt-[55px]
                                    phones:mt-0
                                "
                            >Technology</h1>

                        </div>

                    </Link>

                    <Link to="religious">

                        <div
                            className="
                                w-[215px]
                                h-[152px]
                                rounded-[20px]
                                p-[50px]
                                bg-med
                                bg-cover
                                phones:w-[140px]
                                phones:h-[80px]
                                phones:mt-0
                            "
                        >

                            <h1
                                className="
                                  text-white
                                    font-bold
                                    text-[20px]
                                    mt-[55px]
                                    phones:m-[0]
                                "
                            >Religious</h1>

                        </div>

                    </Link>

                </div>

            </div>

            {/* Dashboard end */}
        </div >
    )
}

export default Maindash