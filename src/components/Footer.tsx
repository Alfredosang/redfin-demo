

const Footer = () => {
    return (
        <div className='h-[200px] bg-gray-100'>
            <div className='container mx-auto py-10'>
                <div className='flex flex-col items-center justify-center'>
                    
                    <div>
                        <h1 className="px-5 md:px-0 text-center">
                        Copyright ©2023 Redfin Company LLC All rights reserved.
                        </h1>
                    </div>

                    <div className='flex flex-col pt-3 '>
                        <div className="w-[120px]">
                        <div className="font-bold text-2xl text-center">red<span className="text-red-600">Fin</span></div>
                        </div>


                    </div>

                </div>

            </div>
        </div>
    )
}

export default Footer