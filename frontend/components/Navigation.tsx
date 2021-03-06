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
        handleIsDwarf()
    }, []);

    function handleIsDwarf() {
        const localTheme = localStorage.getItem('theme');
        if (localTheme) {
            setIsDwarf(localTheme === 'dwarf');
        }
    }

    return (
        <nav className="z-50 fixed top-0 left-0 right-0 navbar mx-auto shadow-sm bg-primary primary-content">
            <div className="px-2 mx-2 navbar-start">
                <Logo height={40} width={40} isDwarf={isDwarf}/>
                <span className="ml-2 text-xl font-bold deco-font leading-none">Rabbit Sitter HANA</span>
            </div>
            <div className="hidden px-2 mx-2 navbar-center lg:flex">
                <div className="flex items-stretch deco-font">
                    {URL_LIST.map((url) => <span key={'link_' + url[1].toLowerCase()}
                                                 className="btn btn-ghost btn-sm rounded-btn text-xl"><Link
                        href={url[1]}>{url[0]}</Link></span>)}
                </div>

            </div>

            <div className="navbar-center flex lg:hidden">
                <button className="btn btn-primary">
                    HAM
                </button>
            </div>
            <div className="navbar-end">
                <button className="btn btn-accent">
                    Contact
                </button>
                <button className="btn ml-1 border-0 outline-none" data-toggle-theme="dwarf,lop"
                        data-act-class="ACTIVECLASS"
                        onClick={handleIsDwarf}>{isDwarf ? <SunSvg/> : <MoonSvg/>}
                </button>

            </div>
        </nav>
    )
}


function SunSvg() {
    return (
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
             x="0px" y="0px" fill="#fff"
             width="28px" height="32px" viewBox="0 0 28 32" enableBackground="new 0 0 28 32" xmlSpace="preserve">
            <g id="sun">
                <g>
                    <circle cx="14" cy="16" r="7"/>
                    <path
                        d="M14,7c0.553,0,1-0.447,1-1V1c0-0.553-0.447-1-1-1c-0.553,0-1,0.447-1,1v5C13,6.553,13.447,7,14,7z"/>
                    <path
                        d="M14,25c-0.553,0-1,0.447-1,1v5c0,0.553,0.447,1,1,1c0.553,0,1-0.447,1-1v-5C15,25.447,14.553,25,14,25z"/>
                    <path d="M0.51,9.367l4.33,2.5C4.997,11.957,5.169,12,5.339,12c0.346,0,0.682-0.179,0.867-0.5c0.276-0.479,0.112-1.09-0.366-1.365
    l-4.33-2.5C1.032,7.358,0.42,7.522,0.144,8S0.031,9.09,0.51,9.367z"/>
                    <path d="M27.491,22.634l-4.33-2.5c-0.479-0.275-1.089-0.112-1.366,0.366c-0.275,0.479-0.111,1.09,0.366,1.366l4.33,2.5
    c0.157,0.091,0.329,0.134,0.499,0.134c0.346,0,0.682-0.179,0.867-0.5C28.134,23.521,27.971,22.91,27.491,22.634z"/>
                    <path d="M4.841,20.134l-4.33,2.5C0.032,22.91-0.132,23.521,0.145,24c0.186,0.321,0.521,0.5,0.867,0.5
    c0.17,0,0.342-0.043,0.499-0.134l4.33-2.5C6.32,21.59,6.484,20.979,6.207,20.5S5.317,19.857,4.841,20.134z"/>
                    <path d="M22.662,12c0.17,0,0.342-0.043,0.499-0.135l4.331-2.5C27.971,9.09,28.135,8.478,27.857,8
    c-0.276-0.479-0.891-0.644-1.365-0.367l-4.331,2.5c-0.479,0.277-0.644,0.889-0.366,1.367C21.98,11.82,22.316,12,22.662,12z"/>
                    <path d="M19.368,23.295c-0.277-0.479-0.892-0.643-1.366-0.366c-0.479,0.276-0.643,0.889-0.365,1.366l1.997,3.463
    c0.187,0.32,0.521,0.5,0.867,0.5c0.17,0,0.342-0.043,0.499-0.134c0.479-0.276,0.643-0.888,0.366-1.366L19.368,23.295z"/>
                    <path d="M8.634,8.706c0.186,0.321,0.521,0.5,0.867,0.5c0.17,0,0.342-0.043,0.499-0.134c0.479-0.276,0.643-0.89,0.366-1.366
    l-2-3.464C8.089,3.763,7.476,3.6,7,3.877C6.521,4.152,6.357,4.765,6.634,5.242L8.634,8.706z"/>
                    <path
                        d="M27,15h-3.999c-0.552,0-1,0.447-1,1c0,0.552,0.447,1,1,1L27,17.001c0.552,0,1-0.448,1-1.001C28,15.448,27.553,15,27,15z"
                    />
                    <path
                        d="M1,17.001h3.999c0.553,0,1-0.448,1-1s-0.447-1-1-1H1c-0.553,0-1,0.448-1,1S0.447,17.001,1,17.001z"/>
                    <path d="M21,3.877c-0.479-0.277-1.09-0.113-1.366,0.365l-2,3.463C17.357,8.184,17.521,8.795,18,9.07
    c0.157,0.092,0.329,0.135,0.499,0.135c0.347,0,0.683-0.18,0.867-0.5l2-3.463C21.643,4.765,21.479,4.152,21,3.877z"/>
                    <path d="M10,22.931c-0.478-0.274-1.09-0.113-1.366,0.366l-2,3.463C6.358,27.239,6.522,27.85,7,28.126
    c0.157,0.091,0.329,0.134,0.499,0.134c0.346,0,0.682-0.179,0.867-0.5l2-3.463C10.643,23.818,10.479,23.207,10,22.931z"/>
                </g>
            </g>
            <g id="Layer_1_1_">
            </g>
        </svg>

    )
}

function MoonSvg() {
    return (
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
             x="0px" y="0px" fill="#454343"
             width="29.779px" height="31.732px" viewBox="0 0 29.779 31.732" enableBackground="new 0 0 29.779 31.732"
             xmlSpace="preserve">
            <g id="night-2">
                <g>
                    <path d="M8.999,10.733c0-4.137,1.583-7.894,4.158-10.733C5.679,1.342-0.001,7.867-0.001,15.733c0,8.838,7.162,16,16,16
    c4.701,0,8.916-2.039,11.842-5.267c-0.924,0.166-1.869,0.267-2.842,0.267C16.161,26.733,8.999,19.571,8.999,10.733z"/>
                    <path d="M23.29,13.567c-0.061-0.094-0.178-0.134-0.283-0.098c-0.105,0.037-0.172,0.141-0.162,0.252l0.279,2.955l-2.494,1.608
    c-0.094,0.062-0.135,0.179-0.098,0.283c0.037,0.105,0.141,0.172,0.252,0.162l2.955-0.279l1.607,2.493
    c0.061,0.095,0.178,0.135,0.283,0.098c0.105-0.035,0.172-0.141,0.162-0.251l-0.279-2.954l2.494-1.608
    c0.094-0.062,0.135-0.177,0.098-0.283c-0.037-0.104-0.141-0.172-0.252-0.161l-2.953,0.278L23.29,13.567z"/>
                    <path d="M25.212,7.627C25.2,7.739,25.264,7.844,25.37,7.883c0.104,0.039,0.221,0.001,0.285-0.093l1.387-2.058l2.467,0.283
    c0.111,0.013,0.217-0.052,0.256-0.157c0.039-0.104,0-0.222-0.094-0.284l-2.057-1.388l0.283-2.468
    c0.014-0.11-0.051-0.217-0.156-0.255c-0.104-0.038-0.223-0.001-0.285,0.092l-1.389,2.059L23.6,3.331
    c-0.111-0.013-0.217,0.053-0.254,0.157c-0.039,0.104,0,0.222,0.092,0.284l2.059,1.389L25.212,7.627z"/>
                    <path d="M16.12,9.751l1.01,2.268c0.045,0.103,0.156,0.16,0.266,0.14c0.109-0.02,0.191-0.111,0.199-0.224l0.146-2.479l2.268-1.013
    c0.104-0.045,0.16-0.154,0.141-0.265c-0.021-0.109-0.113-0.191-0.225-0.198l-2.479-0.146l-1.012-2.268
    c-0.045-0.104-0.154-0.16-0.266-0.141c-0.109,0.021-0.191,0.112-0.197,0.225l-0.148,2.479l-2.266,1.013
    c-0.103,0.045-0.16,0.153-0.141,0.265c0.021,0.111,0.112,0.192,0.225,0.198L16.12,9.751z"/>
                </g>
            </g>
            <g id="Layer_1_1_">
            </g>
        </svg>


    )
}

export default Navigation;

