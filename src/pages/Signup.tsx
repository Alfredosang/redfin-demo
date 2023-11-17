import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className='bg-gray-300'>


            <div className='container mx-auto pt-[120px] pb-[40px] md:pt-60 md:pb-60 max-w-[1300px]'>
                <div className='flex justify-center items-center'>


                    <div className='bg-gray-300  shadow-lg shadow-transparent w-full md:w-[500px] h-[600px] rounded-lg pt-7 '>
                        <div className='text-red-600 font-bold text-3xl px-16'>Sign Up</div>
                        <form className='flex flex-col justify-items-center px-10'>
                            <input type='email' placeholder='Email' autoComplete='email' className='py-4 px-2 m-5 rounded-md'></input>
                            <input type='password' placeholder='Password' autoComplete='password' className='py-4 px-2 m-5 rounded-md'></input>
                            <input type='password' placeholder='Confirm Password' autoComplete='password' className='py-4 px-2 m-5 rounded-md'></input>
                            <button className='bg-red-600 text-white py-5 m-5 rounded-md hover:bg-white hover:text-black font-bold'>Submit</button>

                        </form>


                        <Link to='Signin'>
                            <div className='text-white px-16'>
                                <p className='text-black text-center'>Do you have an account ? 
                                <button className='text-red-600 font-bold hover:text-black cursor-pointer'> Sign in here</button>
                                </p>
                            </div>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Signup