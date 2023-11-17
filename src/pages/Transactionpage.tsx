import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

const Transactionpage = () => {

    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <div className='bg-gray-300'>


            <div className='container mx-auto pt-[120px] pb-[40px] md:pt-60 md:pb-60 max-w-[1300px]'>
                <div className='flex justify-center items-center'>


                    <div className='bg-white  shadow-lg shadow-transparent w-full md:w-[500px] h-[600px] rounded-lg p-10 space-y-10 '>
                        <p className="text-xl font-medium">Hello Lawrence</p>
                        <h1 className="text-black font-bold text-3xl md:text-4xl">N500,000,000</h1>
                        <div className="flex justify-between items-center">
                            <button type='button' onClick={openModal} className='w-[120px] md:w-[200px] h-[50px] rounded-md bg-red-600 text-white text-xl font-semibold'>Deposit</button>
                            <button type='button' onClick={openModal} className='w-[120px] md:w-[200px] h-[50px] rounded-md bg-red-600 text-white text-xl font-semibold'>Withdral</button>
                        </div>


                        <div>
                            <p className="text-red-600 pb-5">History</p>
                            <div className="flex justify-between px-5 py-5 bg-gray-100 mb-3">
                                <p>deposit</p>
                                <p>+ N50,000</p>
                            </div>

                            <div className="flex justify-between px-5 py-5 bg-gray-100 mb-3">
                                <p>Withdral</p>
                                <p>- N300,000</p>
                            </div>

                            <div className="flex justify-between px-5 py-5 bg-gray-100 mb-3">
                                <p>deposit</p>
                                <p>+ N400,000</p>
                            </div>
                        </div>

                        <div>
                            <Transition appear show={isOpen} as={Fragment}>
                                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-out duration-300"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="ease-in duration-200"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <div className="fixed inset-0 bg-black/25" />
                                    </Transition.Child>

                                    <div className="fixed inset-0 overflow-y-auto">
                                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                                            <Transition.Child
                                                as={Fragment}
                                                enter="ease-out duration-300"
                                                enterFrom="opacity-0 scale-95"
                                                enterTo="opacity-100 scale-100"
                                                leave="ease-in duration-200"
                                                leaveFrom="opacity-100 scale-100"
                                                leaveTo="opacity-0 scale-95"
                                            >
                                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-gray-200 h-[300px] p-6 text-left align-middle shadow-xl transition-all  pt-16 ">
                                                    <Dialog.Title
                                                        as="h3"
                                                        className="text-lg font-medium leading-6 text-gray-900"
                                                    >
                                                        
                                                    </Dialog.Title>
                                                    <div className="mt-2">
                                                    <input type='text' placeholder='amount'  className='py-4 px-2 outline-none rounded-md w-full'></input> 
                                                    </div>

                                                    <div className="mt-4 flex justify-center">
                                                        <button
                                                            type="button"
                                                            className="w-[200px] h-[50px] rounded-md bg-red-600 text-white text-xl font-semibold mt-5"
                                                            onClick={closeModal}
                                                        >
                                                            Enter
                                                        </button>
                                                    </div>
                                                </Dialog.Panel>
                                            </Transition.Child>
                                        </div>
                                    </div>
                                </Dialog>
                            </Transition>
                        </div>



                    </div>
                </div>

            </div>
        </div>
    )
}

export default Transactionpage