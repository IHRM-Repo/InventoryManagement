import { HomeIcon, DocumentChartBarIcon, Cog6ToothIcon } from "@heroicons/react/20/solid";
import { Link } from '@inertiajs/react';

const Navbar = () => {
    return (
        <div className="hidden bg-white my-4 mx-2 p-2 rounded-md md:flex">
            <ul className="mt-4 mx-2 space-y-4">
                <Link href='/'>
                    <li className="flex flex-row">
                        <HomeIcon className="w-10 p-2" />
                        <h1 className="p-2">Dashboard</h1>
                    </li>
                </Link>                
            
                <Link href='/reports'>
                    <li className="flex flex-row">
                        <DocumentChartBarIcon className="w-10 p-2"/>            
                        <h1 className="p-2">Reports</h1>                
                    </li>
                </Link>
                
                <li className="flex flex-row">
                    <Cog6ToothIcon className="w-10 p-2"/>            
                    <h1 className="p-2">Settings</h1>                
                </li>
            </ul>
        </div>
    )
}

export default Navbar;