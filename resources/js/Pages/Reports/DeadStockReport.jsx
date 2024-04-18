import { Head } from '@inertiajs/react';
import { Link } from '@inertiajs/react'

import Layout from "@/Components/Layout";
import Table from "@/Components/Table";

const DeadStockReport = ({deadStock}) => {
    const deadStockObj = Object.values(deadStock);   
    return (
        <>
            <Head title='Dead Stock Report'/>
            <Layout children={
                <div className="bg-white my-8 mx-4 rounded-md">
                    <button className='mt-8 mx-4 p-2 bg-blue-400 rounded-md'>
                        <a href='/export/dead-stock'>
                         Export Dead Stock
                        </a>
                    </button>

                    <div className='grid overflow-x-auto m-2 p-4 '>
                        {deadStockObj.length > 0 ?
                        <> 
                            <h1 className="text-center m-2">Depreciated Items</h1>
                            <Table dataItems={deadStockObj} itemsPerPage={5}/>
                        </>
                        :
                        <p className="text-center mb-4">No data to display</p>
                        }
                    </div>
                </div>
                
            }/>
        </>
        
    )

}

export default DeadStockReport;