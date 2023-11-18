import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { useState } from "react"
import { useNavigate } from 'react-router-dom';

const Signin = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [navigate, setNavigate] = useState(false);
    const [error, setError] = useState("");

    const nav = useNavigate();


    // Define your GraphQL mutation
    const LOGIN_MUTATION = gql`
  mutation Login($loginInput: LoginInput!) {
    login(loginInput: $loginInput) {
      access_token
    }
  }
`;

    // Create an Apollo Client instance
    const client = new ApolloClient({
        uri: 'http://localhost:3000/graphql',
        cache: new InMemoryCache(),
    });

    // Define the input data for the mutation
    const loginInput = {
        // Populate with actual login credentials
        email: email,
        password: password,
        
    };




    const submit = (e: React.SyntheticEvent<EventTarget>): void => {
        e.preventDefault();


        // Execute the mutation
        client
            .mutate({
                mutation: LOGIN_MUTATION,
                variables: {
                    loginInput,
                },
            })
            .then((result) => {
                // Handle the result of the mutation
                console.log("Login successful, access token:", result.data.login.access_token);
            })
            .catch((error) => {
                // Handle any errors that occurred during the mutation
                console.error("Error during login:", error);
                setError(error)
            });






        setNavigate(true)

        if (navigate) {
            return nav("Transactionpage");
        }
        console.log(name, email, password)
    }


    return (

        <div className="bg-gray-300">


            <div className='container mx-auto py-40 md:py-60 max-w-[1300px]'>
                <div className='flex justify-center items-center'>


                    <div className='bg-gray-300  shadow-lg shadow-transparent w-full md:w-[500px] h-[400px] rounded-lg pt-7 '>
                        <div className='text-red-600 font-bold text-3xl px-16'>Sign In</div>
                        <form onSubmit={submit} className='flex flex-col justify-items-center px-10'>
                            <p className="text-red-600">{error
                            }</p>
                            <input onChange={e => setEmail(e.target.value)} type='email' placeholder='Email' autoComplete='email' className='py-4 px-2 m-5 rounded-md'></input>
                            <input onChange={e => setPassword(e.target.value)} type='password' placeholder='Password' autoComplete='password' className='py-4 px-2 m-5 rounded-md'></input>

                            <button onClick={submit} className='bg-red-600 text-white py-5 m-5 rounded-md hover:bg-white hover:text-black font-bold'>Submit</button>
                        </form>



                    </div>
                </div>

            </div>
        </div>
    )
}

export default Signin