import React from "react";
import Link from 'next/link'
import Logo from "./Logo";

const URL_LIST = [
    ['Home', '/'],
    ['About', '/about'],
    ['Service', '/service'],
    ['Price', '/price'],
    ['Blog', '/blog']
]


function Navigation() {


    return (
        <div className="navbar mb-2 shadow-lg bg-primary text-white">
            <div className="px-2 mx-2 navbar-start">
                <span className="text-lg font-bold">Hana</span>
            </div>
            <div className="hidden px-2 mx-2 navbar-center lg:flex">
                <div className="flex items-stretch ">
                    {URL_LIST.map((url) => <span key={'link_' + url[1].toLowerCase()}
                                                 className="btn btn-ghost btn-sm rounded-btn"><Link
                        href={url[1]}>{url[0]}</Link></span>)}
                </div>

            </div>

            <div className="navbar-center flex lg:hidden">
                <button className="btn  btn-ghost">
                    HAM
                </button>
            </div>
            <div className="navbar-end">
                <button className="btn  btn-ghost">
                    Contact us
                </button>
            </div>
        </div>

    )
}


export default Navigation;

