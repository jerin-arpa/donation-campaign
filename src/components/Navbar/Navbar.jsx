import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="dropdown-content mt-3 z-[1] p-5 shadow bg-base-100 rounded-box w-52 text-xl">
                            <li className="mb-2">
                                <NavLink to='/' className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-red-500 font-bold underline" : ""
                                }>Home</NavLink>
                            </li>
                            <li className="mb-2">
                                <NavLink to='/donation' className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-red-500 font-bold underline" : ""
                                }>Donation</NavLink>
                            </li>
                            <li>
                                <NavLink to='/statistics' className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-red-500 font-bold underline" : ""
                                }>Statistics</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="flex justify-center">
                        <img src="https://i.ibb.co/MSfF3M1/Logo.png" alt="" />
                    </div>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="flex gap-10 px-1 text-xl">
                        <li>
                            <NavLink to='/' className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-500 font-bold underline" : ""
                            }>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/donation' className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-500 font-bold underline" : ""
                            }>Donation</NavLink>
                        </li>
                        <li>
                            <NavLink to='/statistics' className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-500 font-bold underline" : ""
                            }>Statistics</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;