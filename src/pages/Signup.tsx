import { Link } from 'react-router-dom';
import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";


const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [navigate, setNavigate] = useState(false);

    const nav = useNavigate();


    const CREATE_USER_MUTATION = gql`
  mutation RegisterUser($createUserInput: CreateUserInput!) {
    registerUser(createUserInput: $createUserInput) {
      id
      name
      email
    }
  }
`;


    const client = new ApolloClient({
        uri: 'http://localhost:3000/graphql',
        cache: new InMemoryCache(),
    });


    const createUserInput = {
        name: name,
        email: email,
        password: password
    };





    const submit = (e: React.SyntheticEvent<EventTarget>): void => {
        e.preventDefault();
        


        client
        .mutate({
            mutation: CREATE_USER_MUTATION,
            variables: {
                createUserInput,
            },
        })
        .then((result) => {
            // Handle the result of the mutation
            console.log("User created:", result.data.registerUser);
        })
        .catch((error) => {
            // Handle any errors that occurred during the mutation
            console.error("Error creating user:", error);
        });



        setNavigate(true)

        if (navigate) {
            return nav("Signin");
        }
        console.log(name, email, password)
    }



    return (
        <div className='bg-gray-300'>


            <div className='container mx-auto pt-[120px] pb-[40px] md:pt-60 md:pb-60 max-w-[1300px]'>
                <div className='flex justify-center items-center'>


                    <div className='bg-gray-300  shadow-lg shadow-transparent w-full md:w-[500px] h-[600px] rounded-lg pt-7 '>
                        <div className='text-red-600 font-bold text-3xl px-16'>Sign Up</div>

                        <form className='flex flex-col justify-items-center px-10' onSubmit={submit}>
                            <input onChange={e => setName(e.target.value)} type='name' placeholder='name' autoComplete='name' className='py-4 px-2 m-5 rounded-md'></input>
                            <input onChange={e => setEmail(e.target.value)} type='email' placeholder='Email' autoComplete='email' className='py-4 px-2 m-5 rounded-md'></input>
                            <input onChange={e => setPassword(e.target.value)} type='password' placeholder='Password' autoComplete='password' className='py-4 px-2 m-5 rounded-md'></input>
                            <button type='submit' className='bg-red-600 text-white py-5 m-5 rounded-md hover:bg-white hover:text-black font-bold'>Submit</button>

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