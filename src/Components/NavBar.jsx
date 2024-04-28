import '@/styles/navbar.css'
export default function NavBar() {
    return (
        <header>
            <div className="navbar flex justify-center w-[90%] m-auto items-center border-2 border-white my-4  px-4 rounded-full">
                <div className="logo flex-1">
                    <h2 className="ml-10 font-bold text-2xl">
                        Aman Kumar
                    </h2>
                </div>
                <ul className="nav-link">
                    <li className="inline-block mr-10 py-2 cursor-pointer text-md border-b-4 mt-2 border-opacity-0 border-b-webColor hover:border-opacity-100 ">Home</li>
                    <li className="inline-block mr-10 py-2 cursor-pointer text-md border-b-4 mt-2 border-opacity-0 border-b-webColor hover:border-opacity-100 ">Project</li>
                    <li className="inline-block mr-10 py-2 cursor-pointer text-md border-b-4 mt-2 border-opacity-0 border-b-webColor hover:border-opacity-100 ">Skills</li>
                    <li className="inline-block mr-10 py-2 cursor-pointer text-md border-b-4 mt-2 border-opacity-0 border-b-webColor hover:border-opacity-100">Contact</li>
                </ul>
                <div className="button flex-1 text-end my-2">
                    <button className="btn bg-buttonColor py-3 px-8 font-bold rounded-full -mr-2">Resume</button>
                </div>
            </div>
        </header>
    )
}