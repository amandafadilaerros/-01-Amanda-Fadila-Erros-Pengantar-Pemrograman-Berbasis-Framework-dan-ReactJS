'use client'; 

import { usePathname } from 'next/navigation'; 

type NavItemProps = { 
    title: string; 
    url: string; 
    isSelected: boolean; 
}; 

function NavItem({ title, url, isSelected }: NavItemProps) { 
    return ( 
    <li> 
        <a className={`block px-3 py-2 transition hover:text-blue-400 ${
            isSelected ? "text-blue-700" : "" 
            }`} 
            href={url} 
        > 
            {title} 
        </a> 
    </li> 
    ); 
} 

export default function Navbar() { 
    const pathname = usePathname(); 
    
    return ( 
        <div className="bg-white dark:bg-black flex justify-center mx-auto h-16 pt-6"> 
            <nav> 
                <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text zinc-800 
                shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:text-black dark:shadow-white/5"> 
                    <NavItem 
                        title="Tentang Saya" 
                        url="/" 
                        isSelected={pathname === '/'} 
                    /> 
                    <NavItem 
                        title="Projects" 
                        url="/projects" 
                        isSelected={pathname === '/projects'} 
                    /> 
                    <NavItem 
                        title="Essays" 
                        url="/essays" 
                        isSelected={pathname === '/essays'} 
                    /> 
                </ul> 
            </nav> 
        </div> 
    ); 
} 