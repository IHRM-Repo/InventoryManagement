import Layout from "@/Components/Layout";
import { Head } from '@inertiajs/react';
import InventoryReport from "./InventoryReport";

const Index = ({issuedStock, returnedStock, purchasedStock, damagedStock}) => {   
    return (
        <div>
            <Head title='Reports'/>
            <Layout children={
               <InventoryReport 
                    issueDates={issuedStock}
                    returnDates={returnedStock}
                    purchaseDates={purchasedStock}
                    damagedItems={damagedStock}
                />
            }/>
        </div>
    )
}

export default Index;