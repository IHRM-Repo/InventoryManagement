import { Head } from '@inertiajs/react';
import Dashboard from './Dashboard';
import Layout from '@/Components/Layout';
import { usePage } from '@inertiajs/react';


const Home = ({storeItems, chart, units }) => {
    const message = usePage().props.flash.message;   
    
    return (
       <>
           <Head title='Home'/>
           <Layout children={<Dashboard store={storeItems} chartData={chart} units={units} message={message}/> }/>
       </>
    )
}

export default Home;