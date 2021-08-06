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
        <header className=" w-full px-2 py-4 sm:px-4">

            <div className="flex items-center justify-between mx-auto max-w-7xl">
                <Link href={'/'}>
                    <a>
                        <div className="flex items-center">
                            <Logo width={150} height={50}/>
                        </div>
                    </a>
                </Link>
                <div className="flex items-center space-x-1">
                    <div className="hidden space-x-1 md:inline-flex">
                        {URL_LIST.map((url) => <span key={'link_' + url[1].toLowerCase()}
                                                     className="btn btn-sm btn-link"><Link href={url[1]}>{url[0]}</Link></span>)}
                    </div>
                    <span className="btn btn-sm btn-primary"><Link href="/contact">Contact Us</Link></span>
                    <div className="inline-flex md:hidden">
                        <button className="flex-none px-2 btn btn-link btn-sm">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                                className="w-5 h-5"
                            >
                                <line x1="3" y1="12" x2="21" y2="12"/>
                                <line x1="3" y1="6" x2="21" y2="6"/>
                                <line x1="3" y1="18" x2="21" y2="18"/>
                            </svg>
                            <span className="sr-only">Open Menu</span>
                        </button>
                        <div
                            className="absolute top-0 left-0 right-0 z-50 flex flex-col p-2 pb-4 m-2 space-y-3 bg-white rounded shadow">
                            <button className="self-end flex-none px-2 ml-2 btn btn-link btn-icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    aria-hidden="true"
                                >
                                    <line x1="18" y1="6" x2="6" y2="18"/>
                                    <line x1="6" y1="6" x2="18" y2="18"/>
                                </svg>
                                <span className="sr-only">Close Menu</span>
                            </button>
                            <a href="#" className="w-full btn btn-link">Features</a>
                            <a href="#" className="w-full btn btn-link">Pricing</a>
                            <a href="#" className="w-full btn btn-link">Blog</a>
                            <a href="#" className="w-full btn btn-link">Company</a>
                            <a href="#" className="w-full btn btn-link">Sign in</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}


export default Navigation;
