import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";

export default function NavBar() {
    const linkClasses = ({ isActive }: { isActive: boolean }) =>
        isActive
            ? "text-white bg-black hover:bg-gray-900 hover:text-white text-xl rounded-md px-3 py-2"
            : "text-white hover:bg-gray-900 hover:text-white text-xl rounded-md px-3 py-2";

    return (
        <nav className="bg-purple-950 border-b border-purple-500">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                        {/*<!-- Logo -->*/}
                        <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
                            <img className="h-10 w-auto" src={logo} alt="Twitch VIP" />
                            <span className="hidden md:block text-white text-2xl font-bold ml-2">
                                Twitch VIP
                            </span>
                        </NavLink>
                        <div className="md:ml-auto">
                            <div className="flex space-x-2">
                                <NavLink to="/" className={linkClasses}>
                                    Home
                                </NavLink>
                                <NavLink to="/streamers" className={linkClasses}>
                                    Streamers
                                </NavLink>
                                <NavLink to="/login" className={linkClasses}>
                                    Login
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

{
    /**/
}
