import Layout from "@/Components/Layout";
import { Head } from '@inertiajs/react';


const InventoryReport = () => {
    return(
        <div>
            <Head title='Reports'/>
            <Layout>
                <div className="my-8">
                    <div className="my-2 border-2 border-black">
                        <p>Stock levels</p>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default InventoryReport;