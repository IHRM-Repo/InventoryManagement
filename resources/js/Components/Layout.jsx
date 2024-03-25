import { Head } from '@inertiajs/react';
import Navbar from '@/Pages/Navbar';

const Layout = ({children}) => {
    return(
        <>
            <Head title='Store Management'/>
            <h1 className='text-center text-lg p-2 text-blue-400'>IHRM Store Management</h1>            
            <main className='flex flex-col justify-center h-full w-screen bg-yellow-600 md:gap-4 md:flex-row'>
                <Navbar/>   
                {children}    
            </main>   
        </>
       
    )

}

export default Layout;