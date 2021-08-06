import React from "react";



interface planType {
    id: number;
    title:string;
    price: number;
    description:string;
    minute: number;
    every: boolean;
    services: {
        id: number;
        title: string;
    }
}


function PricingSection({plans}: any) {
    return (
        <section className="pt-24 mb-10">
            <div className="max-w-7xl px-4 mx-auto mb-20 text-center">
                <h1 className="mb-3 text-4xl font-bold leading-tight text-gray-900 md:font-extrabold">お客さまとうさぎさんに合わせて提供いたします。</h1>
                <p className="mb-6 text-lg text-gray-500 md:text-xl">コースカスタムも可能ですのでお気軽にどうぞ</p>
            </div>
            <div className="max-w-7xl px-3 mx-auto md:px-4">
                <div className="grid grid-cols-1 gap-24 md:grid-cols-2 lg:grid-cols-3 sm:gap-10">
                    {plans.map((plan:planType) => <PriceBox key={plan.id} data={plan}/>)}
                </div>
            </div>
        </section>

    )
}



function PriceBox({data}: any) {
    const {title, price, minute, description, services, event} = data;

    return (
        <div
            className={`p-4 cursor-pointer ${event?"bg-primary-light":"bg-lightgray"} rounded-xl border-transparent border-4 hover:border-primary border-solid hover:bg-white transition-colors duration-500 ease-in-out`}>
            <div>
                <p className="mb-3 text-xl font-semibold text-center text-primary-dark pt-2">{title}</p>
                <div className="flex items-center justify-center mb-6 space-x-2">
                    <p className="mt-1 font-mono text-5xl font-thin text-primary-dark">{price}</p>
                    <div>
                        <p className="text-sm text-gray-500">{minute}分</p>
                    </div>
                </div>
                <p>{description}</p>
            </div>
            <div>
                <div className="space-y-4 p-4">
                    {services.map((service: any) => <CourseItem key={'service'+service.id} service={service.title}/>)}
                </div>
            </div>
        </div>

    )

}
function CourseItem({service}: any) {
    return (
        <div className="flex items-start bg-white p-1 rounded-xl">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"
                 className="flex-none w-6 h-6 p-px mt-px mr-2 text-primary">
                <path
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
            </svg>
            <p className="text-gray-700">
                {service}
            </p>
        </div>
    )
}
export default PricingSection;
