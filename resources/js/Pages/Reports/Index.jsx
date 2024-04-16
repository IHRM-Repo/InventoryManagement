import Layout from "@/Components/Layout";
import { Head } from '@inertiajs/react';
import InventoryReport from "./InventoryReport";

const Index = ({issuedStock, returnedStock, purchasedStock}) => {      
    return (
        <div>
            <Head title='Reports'/>
            <Layout children={
               <InventoryReport issueDates={issuedStock} returnDates={returnedStock} purchaseDates={purchasedStock}/>
            }/>
        </div>
    )
}

export default Index;