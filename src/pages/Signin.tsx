

const Signin = () => {
    return (

        <div className="bg-gray-300">


            <div className='container mx-auto py-40 md:py-60 max-w-[1300px]'>
                <div className='flex justify-center items-center'>


                    <div className='bg-gray-300  shadow-lg shadow-transparent w-full md:w-[500px] h-[400px] rounded-lg pt-7 '>
                        <div className='text-red-600 font-bold text-3xl px-16'>Sign In</div>
                        <form className='flex flex-col justify-items-center px-10'>
                            <input type='email' placeholder='Email' autoComplete='email' className='py-4 px-2 m-5 rounded-md'></input>
                            <input type='password' placeholder='Password' autoComplete='password' className='py-4 px-2 m-5 rounded-md'></input>
                            <button className='bg-red-600 text-white py-5 m-5 rounded-md hover:bg-white hover:text-black font-bold'>Submit</button>

                        </form>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Signin