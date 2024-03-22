import { HomeIcon, DocumentChartBarIcon, Cog6ToothIcon } from "@heroicons/react/20/solid";

const Navbar = () => {
    return (
        <div className="hidden w-1/5  bg-white my-4  mx-2 p-2 rounded-md xl:flex">
        <ul className="mt-4 mx-8 space-y-4">
            
            <li className="flex flex-row">
                <HomeIcon className="w-10 p-2" />
                <h1 className="p-2">Dashboard</h1>
            </li>
        
            <li className="flex flex-row">
                <DocumentChartBarIcon className="w-10 p-2"/>            
                <h1 className="p-2">Reports</h1>                
            </li>
            <li className="flex flex-row">
                <Cog6ToothIcon className="w-10 p-2"/>            
                <h1 className="p-2">Settings</h1>                
            </li>
        </ul>
        </div>
    )
}

export default Navbar;