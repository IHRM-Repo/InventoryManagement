import { Link } from "@inertiajs/react";

const DropdownNavLink = ({navLinks}) => {
    return(
        <ul className="mt-2">
            {navLinks.map((link, index) => (
                <Link href={link.tag}>
                    <li className="m-2 rounded-md px-4 hover:bg-slate-200 hover:text-white" key={index}>{link.name}</li>
                </Link>                
            ))}
        </ul>
    )

}

export default DropdownNavLink;