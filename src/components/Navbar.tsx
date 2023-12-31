import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

export const Navbar = () => {
    const [nav, setNav] = useState(false);
    return (
        
        <div className=''>
            <nav className='flex  justify-between shadow-sm px-7 md:px-60 items-center fixed z-10  h-[100px] bg-white w-full  mx-auto '>
                <div className='flex justify-start items-center'>
                    <Link to='/'>
                        <div className="font-bold text-xl md:text-3xl">red<span className="text-red-600">Fin</span></div>
                    </Link>
                </div>




                <div className='hidden md:flex justify-start space-x-10  items-center  '>
                    <Link to='Signin'>
                        <button className='w-[200px] h-[50px] rounded-md bg-red-600 text-white text-xl font-semibold'>Sign In</button>
                    </Link>


                </div>
                <div onClick={() => setNav(!nav)} className=' z-50 m-7 text-red-600 cursor-pointer md:hidden'>

                    {!nav ? <FaBars size={30} /> : <FaTimes size={30} />}</div>

                {nav && (
                    <div className={`${!nav ? 'hidden' : 'flex'}  flex-col items-center justify-center bg-white absolute top-0 left-0 w-full h-screen`}>

                        <Link to='Signup' onClick={() => setNav(!nav)} className='bg-red-600 h-[70px]  w-[340px] rounded-md flex justify-center items-center text-white text-2xl m-5 cursor-pointer'>Sign up</Link>
                        <Link to='Signin' onClick={() => setNav(!nav)} className='bg-red-600 h-[70px]  w-[340px] rounded-md flex justify-center items-center text-white text-2xl m-5 cursor-pointer'>Sign in</Link>
                    </div>
                )}


            </nav>

        </div>
    )
}
