import React, {useEffect, useState} from "react";
import Link from 'next/link'
import Logo from "./Logo";
import {themeChange} from "theme-change"

const URL_LIST = [
    ['Home', '/'],
    ['About', '/about'],
    ['Service', '/service'],
    ['Price', '/price'],
    ['Blog', '/blog']
]


function Navigation() {
    const [isDwarf, setIsDwarf] = useState<boolean>(true);

    useEffect(() => {
        themeChange(false);
        const localTheme = localStorage.getItem('theme');
        if (localTheme) {
            setIsDwarf(localTheme === 'dwarf');
        }
    }, []);

    function handleIsDwarf() {
        setIsDwarf(!isDwarf)
    }

    return (
        <nav className='fixed-nav'>
            <div className="navbar mx-auto mb-2 shadow-sm bg-primary primary-content">
                <div className="px-2 mx-2 navbar-start">
                    <Logo height={40} width={40} isDwarf={isDwarf}/>
                    <span className="ml-2 text-lg font-bold">Rabbit Sitter HANA</span>
                </div>
                <div className="hidden px-2 mx-2 navbar-center lg:flex">
                    <div className="flex items-stretch ">
                        {URL_LIST.map((url) => <span key={'link_' + url[1].toLowerCase()}
                                                     className="btn btn-ghost btn-sm rounded-btn"><Link
                            href={url[1]}>{url[0]}</Link></span>)}
                    </div>

                </div>

                <div className="navbar-center flex lg:hidden">
                    <button className="btn btn-ghost">
                        HAM
                    </button>
                </div>
                <div className="navbar-end">
                    <button className="btn btn-ghost">
                        Contact us
                    </button>
                    <button data-toggle-theme="dwarf,lop" data-act-class="ACTIVECLASS" onClick={handleIsDwarf}>asd
                    </button>
                </div>
            </div>
        </nav>
    )
}


export default Navigation;

