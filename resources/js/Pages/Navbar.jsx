import DropdownNavLink from "@/Components/DropdownNavLink";
import { HomeIcon, DocumentChartBarIcon, Cog6ToothIcon, DocumentTextIcon } from "@heroicons/react/20/solid";
import {  Link } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';
import { useState } from "react";

const Navbar = () => {
    const { url } = usePage();
    const [ isDropDownVisible, setIsDropDownVisible ] = useState(false)

    const handleMouseEnter = () => {
        setIsDropDownVisible(true)
    }

    const handleMouseLeave = () => {
        setIsDropDownVisible(false)
    }

    const reportLinks = [
        {
            id: 1,
            tag: '/reports/inventory',
            name: 'Inventory Report'
        },
        {
            id: 2,
            tag: 'reports/stock',
            name: 'Stock Report'
        }

    ]



    return (
        <div className="hidden bg-white my-8 mx-2 p-2 rounded-md md:flex">
            <ul className="mt-4 mx-2 space-y-4">
                <Link href='/dashboard' className={url === '/dashboard' ? 'bg-blue-400' : ''}>
                    <li className={`flex flex-row hover:text-white hover:bg-blue-400 hover:rounded-md m-2 ${url === '/dashboard' ? 'bg-blue-500 rounded-md' : ''}`}>
                        <HomeIcon className={`w-10 p-2 ${url === '/dashboard' ? 'text-white' : ''}`} />
                        <h1 className={`p-2 ${url === '/dashboard' ? 'text-white' : ''}`}>Dashboard</h1>
                    </li>
                </Link>                
            
                <Link href='/reports'>
                    <li className={`flex flex-row hover:text-white hover:bg-blue-400
                     hover:rounded-md m-2 transition ease-in-out delay-150  duration-300
                      ${url === '/reports' ? 'bg-blue-500 rounded-md' : ''}`}                        
                    >
                        <DocumentChartBarIcon className={`w-10 p-2 ${url === '/reports'
                         ? 'text-white' :
                          ''}`}
                        />            
                        <h1 className={`p-2 ${url === '/reports' ? 'text-white' : ''}`}>
                            Reports
                        </h1>            
                    </li>                    
                </Link>

                <Link href='/dead-stock'>
                    <li className={`flex flex-row hover:text-white hover:bg-blue-400
                     hover:rounded-md m-2 transition ease-in-out delay-150  duration-300
                      ${url === '/dead-stock' ? 'bg-blue-500 rounded-md' : ''}`}                        
                    >
                        <DocumentTextIcon className={`w-10 p-2 ${url === '/dead-stock'
                         ? 'text-white' :
                          ''}`}
                        />            
                        <h1 className={`p-2 ${url === '/dead-stock' ? 'text-white' : ''}`}>
                            Dead Stock Report
                        </h1>            
                    </li>                    
                </Link>
                  
                
                <Link>
                    <li className="flex flex-row">
                        <Cog6ToothIcon className="w-10 p-2"/>            
                        <h1 className="p-2">Settings</h1>                
                    </li>
                </Link>
                
            </ul>
        </div>
    )
}

export default Navbar;