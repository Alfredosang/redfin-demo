import hero from '../assets/hero.png'
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className='container mx-auto py-40 md:py-60 md:max-w-[1300px]'>
            <div className='flex flex-col-reverse md:flex-row lg:flex-row  xl:flex-row  justify-center md:items-center md:justify-between lg:justify-between xl:justify-between'>
                
                <div className='space-y-5 w-[340px] md:w-[40rem] px-7'>
                    <div><h2 className='text-black text-2xl font-bold md:text-6xl'>Bank swiftly with ease and comfort</h2></div>
                    <div className='w-[340px] md:w-[500px]'><h2 className=' text-gray-500 '>Your Redfin account allows you enjoy zero transaction fees,
                        zero account fees, and an annual interest of 5% per year.</h2>
                    </div>
                    <Link to='Signup'>
                        <button className='w-[200px] h-[50px] rounded-md bg-red-600 text-white text-xl font-semibold mt-5'>Sign up</button>
                    </Link>
                </div>

                <div className='flex justify-center pb-7'>
                    <img src={hero} alt='phone' className='w-[22rem] md:w-[40rem] ' />

                </div>
            </div>
        </div>
    )
}

export default Hero