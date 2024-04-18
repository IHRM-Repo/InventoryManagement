import Layout from "@/Components/Layout";
import { Head } from '@inertiajs/react';
import Table from "@/Components/Table";

const DeadStockReport = ({deadStock}) => {
    const depreciatedItems = deadStock.filter( item => item.depreciated_value <= 1000);

    return (
        <div>
        <Head title='Dead Stock Report'/>
        <Layout children={
            <div className='grid overflow-x-auto bg-white m-2 p-4 rounded-md'>
                {depreciatedItems.length > 0 ?
                <> 
                    <h1 className="text-center m-2">Depreciated Items</h1>
                    <Table dataItems={depreciatedItems} itemsPerPage={5}/>
                </>
                :
                <p className="text-center mb-4">No data to display</p>
                }
          </div>
        }/>
    </div>
        
    )

}

export default DeadStockReport;