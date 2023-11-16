import hero from '../assets/hero.png'

const Hero = () => {
    return (
        <div className='container mx-auto py-40 md:py-60 md:max-w-[1300px]'>
            <div className='flex flex-col-reverse md:flex-row lg:flex-row  xl:flex-row  justify-center md:items-center md:justify-between lg:justify-between xl:justify-between'>
                
                <div className='space-y-5 w-[340px] md:w-[40rem] px-7'>
                    <div className='w-60 rounded-full flex justify-center py-2 bg-red-200 font-medium'><h2 className='text-red-600 text-xl'>Major Benefits</h2></div>
                    <div><h2 className='text-black text-2xl font-bold md:text-6xl'>Bank swiftly with ease and comfort</h2></div>
                    <div className='w-[340px] md:w-[500px]'><h2 className=' text-gray-500 '>Your Redfin account allows you enjoy zero transaction fees,
                        zero account fees, and an annual interest of 5% per year.</h2>
                    </div>
                    <div className='flex items-center space-x-2'><h2 className='text-red-600 font-semibold text-xl'>Learn more</h2> </div>
                </div>

                <div className='flex justify-center pb-7'>
                    <img src={hero} alt='phone' className='w-[22rem] md:w-[40rem] ' />

                </div>
            </div>
        </div>
    )
}

export default Hero