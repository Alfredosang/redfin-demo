import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";


const Transactionpage = () => {

    const [amount, setAmount] = useState("")
    const [type, setType] = useState("")
    // const [bal, setBal ] = useState([])

    const CREATE_TRANSACTION_MUTATION = gql`
  mutation CreateTransaction($createTransactionInput: CreateTransactionInput!) {
    createTransaction(createTransactionInput: $createTransactionInput) {
      amount
      type
    }
  }
`;


const client = new ApolloClient({
        uri: 'http://localhost:3000/graphql',
    cache: new InMemoryCache(),
  });

  const createTransactionInput = {
    // Populate with actual transaction data
    amount: amount,
    type: type, 

  };
  

    let [isOpen, setIsOpen] = useState(false)
    

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }




    const creditUser = (e: React.SyntheticEvent<EventTarget>): void => {
        e.preventDefault();
        

        client
        .mutate({
          mutation: CREATE_TRANSACTION_MUTATION,
          variables: {
            createTransactionInput,
          },
        })
        .then((result) => {
          // Handle the result of the mutation
          console.log("Transaction created:", result.data.createTransaction);
        })
        .catch((error) => {
          // Handle any errors that occurred during the mutation
          console.error("Error creating transaction:", error);
        });

        closeModal()

    }




    return (
        <div className='bg-gray-300'>


            <div className='container mx-auto pt-[120px] pb-[40px] md:pt-60 md:pb-60 max-w-[1300px]'>
                <div className='flex justify-center items-center'>


                    <div className='bg-white  shadow-lg shadow-transparent w-full md:w-[500px] h-[600px] rounded-lg p-10 space-y-10 '>
                        <p className="text-xl font-medium">Hello</p>
                        <h1 className="text-black font-bold text-3xl md:text-4xl">N50,000,000</h1>
                        <div className="flex justify-center">
                            <button type='button' onClick={openModal} className='w-full h-[50px] rounded-md bg-red-600 text-white text-xl font-semibold'>Create Transaction</button>

                        </div>


                        <div>
                            <p className="text-red-600 pb-5">History</p>
                            <div className="flex justify-between px-5 py-5 bg-gray-100 mb-3">
                                <p>{type}</p>
                                <p>N{amount}</p>
                            </div>
{/* 
                            <div className="flex justify-between px-5 py-5 bg-gray-100 mb-3">
                                <p>Withdral</p>
                                <p>- N300,000</p>
                            </div>

                            <div className="flex justify-between px-5 py-5 bg-gray-100 mb-3">
                                <p>deposit</p>
                                <p>+ N400,000</p>
                            </div> */}
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
                                                        <input onChange={e => setAmount(e.target.value)} type='text' placeholder='amount' className='py-4 px-2 outline-none rounded-md w-full'></input>
                                                    </div>

                                                    <div className="mt-2 flex justify-between">
                                                        <button
                                                            type="button"
                                                            className="w-[150px] h-[50px] rounded-md bg-red-600 text-white text-xl font-semibold mt-5"
                                                            onClick={ () => setType("credit") }
                                                        >
                                                            Receive
                                                        </button>

                                                        <button
                                                            type="button"
                                                            className="w-[150px] h-[50px] rounded-md bg-red-600 text-white text-xl font-semibold mt-5"
                                                            onClick={() => setType("withdral")}
                                                        >
                                                            Send
                                                        </button>
                                                    </div>

                                                    <div className='flex justify-center'>

                                                    <button
                                                            type="button"
                                                            className="w-[150px] h-[50px] rounded-md bg-gray-300 text-black text-xl font-semibold mt-5"
                                                            onClick={creditUser}
                                                            >
                                                            Done
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