import React from "react";

interface mainMessageType {
    mainMessage: {
        main: string
    }
}

function HeroSection({mainMessage}: mainMessageType) {

    return (
        <section className="py-32 px-4 min-h-500  mx-auto max-w-7xl">
            <div className="mx-auto w-full lg:w-8/12 xl:w-5/12">
                <p className="mb-2 text-xs font-semibold tracking-wide uppercase text-gray">うさぎ向けのペットシッター</p>
                <h1 className="mb-3 text-3xl font-bold leading-tight text-gray md:text-4xl">Rabbit sitter HANA</h1>
                <p className="mb-5 text-base text-gray md:text-lg">
                    {mainMessage.main}
                </p>
                <a href="/contact" className="mb-2 mr-4 w-full btn btn-primary btn-lg sm:w-auto sm:mb-0">Contact Us</a>
                <a href="/blog" className="mb-2 w-full btn btn-light btn-lg sm:w-auto sm:ml-0 sm:mb-0">Blog</a>
            </div>
        </section>

    )
}

export default HeroSection;
