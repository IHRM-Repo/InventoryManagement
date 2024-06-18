import Navbar from '@/Pages/Navbar';
import { Link } from '@inertiajs/react';

const Layout = ({children}) => {
    return(
        <>           
            <div className='flex justify-between mx-12 my-4'>
                <h1 className='text-center text-lg p-2 text-blue-400'>IHRM Store Management</h1>
                <Link href="/logout" method="post" as="button" type="button" className='px-4 py-2 rounded-md bg-blue-500 text-white '>Logout</Link>
            </div>         
            <main className='flex flex-col justify-center h-full w-screen bg-yellow-600 md:gap-4 md:flex-row'>
                <Navbar/>   
                {children}    
            </main>   
        </>
       
    )

}

export default Layout;