import signin from '../assets/signin.png'
// import { Link } from 'react-router-dom';

const Signin = () => {
    return (
        

            <div className='container mx-auto py-40 md:py-60 max-w-[1300px]'>
                <div className='flex flex-col sm:flex-col md:flex-row lg:flex-row  xl:flex-row  justify-center md:items-center md:justify-between lg:justify-between xl:justify-between'>



                    <div className='flex justify-center '>
                        <img src={signin} alt='phone' className='w-[40rem] md:w-[40rem] ' />

                    </div>


                    <div className='bg-gray-200  shadow-lg shadow-transparent w-full md:w-[500px] h-[400px] rounded-lg pt-7 '>
                        <div className='text-red-600 font-bold text-3xl px-16'>Sign In</div>
                        <form className='flex flex-col justify-items-center px-10'>
                            <input type='email' placeholder='Email' autoComplete='email' className='py-4 px-2 m-5 rounded-md'></input>
                            <input type='password' placeholder='Password' autoComplete='password' className='py-4 px-2 m-5 rounded-md'></input>
                            {/* <input type='password' placeholder='Confirm Password' autoComplete='password' className='py-4 px-2 m-5 rounded-md'></input> */}
                            <button className='bg-red-600 text-white py-5 m-5 rounded-md hover:bg-white hover:text-black font-bold'>Submit</button>

                        </form>

                        <div className='text-white px-16'>
                            <p className='text-black text-center'>Forgot password ? <span className='text-red-600 font-bold hover:text-black cursor-pointer'>Click here</span></p>
                        </div>

                    </div>
                </div>

            </div>
            )
}

            export default Signin