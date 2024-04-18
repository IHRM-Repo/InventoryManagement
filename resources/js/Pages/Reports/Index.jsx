import Layout from "@/Components/Layout";
import { Head } from '@inertiajs/react';
import InventoryReport from "./InventoryReport";

const Index = ({issuedStock, returnedStock, purchasedStock, damagedStock, deadStock}) => { 
   
    return (
        <div>
            <Head title='Reports'/>
            <Layout children={
               <InventoryReport 
                    issueDates={issuedStock}
                    returnDates={returnedStock}
                    purchaseDates={purchasedStock}
                    damagedItems={damagedStock}
                    deadStock = {deadStock}
                />
            }/>
        </div>
    )
}

export default Index;