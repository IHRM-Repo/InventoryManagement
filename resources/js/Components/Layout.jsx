import Navbar from '@/Pages/Navbar';

const Layout = ({children}) => {
    return(
        <>           
            <div className='flex justify-between mx-12 my-4'>
                <h1 className='text-center text-lg p-2 text-blue-400'>IHRM Store Management</h1>
                <button>Logout</button>
            </div>         
            <main className='flex flex-col justify-center h-full w-screen bg-yellow-600 md:gap-4 md:flex-row'>
                <Navbar/>   
                {children}    
            </main>   
        </>
       
    )

}

export default Layout;