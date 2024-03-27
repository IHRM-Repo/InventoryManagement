import { HomeIcon, DocumentChartBarIcon, Cog6ToothIcon } from "@heroicons/react/20/solid";
import {  Link } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';
import { useState } from "react";

const Navbar = () => {
    const { url } = usePage();
    const [ isActive, setIsActive ] = useState('')



    return (
        <div className="hidden bg-white my-8 mx-2 p-2 rounded-md md:flex">
            <ul className="mt-4 mx-2 space-y-4">
                <Link href='/' className={url === '/' ? 'bg-blue-400' : ''}>
                    <li className={`flex flex-row ${url === '/' ? 'bg-blue-400 rounded-md' : ''}`}>
                        <HomeIcon className={`w-10 p-2 ${url === '/' ? 'text-white' : ''}`} />
                        <h1 className={`p-2 ${url === '/' ? 'text-white' : ''}`}>Dashboard</h1>
                    </li>
                </Link>                
            
                <Link href='/reports'>
                    <li className={`flex flex-row ${url === '/reports' ? 'bg-blue-400 rounded-md' : ''}`}>
                        <DocumentChartBarIcon className={`w-10 p-2 ${url === '/reports' ? 'text-white' : ''}`}/>            
                        <h1 className={`p-2 ${url === '/reports' ? 'text-white' : ''}`}>Reports</h1>                
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