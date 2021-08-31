import React from "react";

interface mainMessageType {
    mainMessage: {
        main: string
    }
}



function HeroSection({mainMessage}: mainMessageType) {

    return (

        <div className="hero min-h-screen bg-base-100">
            <div className="text-center hero-content">
                <div className="max-w-md">
                    <h3 className="text-2xl mb-2 text-base-200">うさぎ向けのペットシッター</h3>
                    <h1 className="mb-5 text-5xl font-bold text-base-300">
                        Rabbit sitter HANA
                    </h1>
                    <p className="mb-5 text-base-300">
                        {mainMessage.main}
                    </p>
                    <button className="btn btn-primary mr-2 text-base-100">Contact</button>
                    <button className="btn btn-accent text-base-100">Blog</button>

                </div>
            </div>
        </div>

    )
}

function ImageFrame() {
    return (

        <div className="stack">
            <div className="text-center shadow-md w-72 card bg-base-200">
                <img src="https://picsum.photos/id/1005/600/600" alt="Image 1" className="rounded"/>
            </div>
            <div className="text-center shadow w-72 card bg-base-200">
                <img src="https://picsum.photos/id/1006/600/600" alt="Image 2" className="rounded"/>
            </div>
            <div className="text-center shadow-sm w-72 card bg-base-200">
                <img src="https://picsum.photos/id/1008/600/600" alt="Image 3" className="rounded"/>
            </div>
        </div>

        // <div className="stack">
        //     <img src="https://picsum.photos/id/1005/600/600" alt="Image 1" className="rounded"/>
        //     <img src="https://picsum.photos/id/1006/600/600" alt="Image 2" className="rounded"/>
        //     <img src="https://picsum.photos/id/1007/600/600" alt="Image 3" className="rounded"/>
        // </div>

    )
}

export default HeroSection;
