import React from "react";
import Image, {ImageProps} from 'next/image';

interface servicesTypes {
    title: string;
    description: string;
    icon: { url: string };
    id: number;
}


function ServicesSection({services}: any) {
    const list = services ?? [];

    return (
        <section className="mx-auto w-screen bg-lightgray flex justify-center">
            <div className="bg-lightgray px-4 py-20 lg:px-16  max-w-7xl">
                <h2 className="mb-1 text-3xl font-extrabold leading-tight text-gray-900">Services</h2>
                <p className="mb-16 text-lg text-gray-500">ひとりといっぴきに合わせた内容でお世話します。</p>
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-20">

                    {list.map((service: servicesTypes) => <ServiceItem key={'service'+service.id} id={service.id}
                                                                       icon={SvgIcon(service.icon.url)}
                                                                       title={service.title}
                                                                       description={service.description}/>)}
                </div>
            </div>
        </section>
    )
}

interface Props {
    imageProps: ImageProps;
}

function SvgIcon(url: string) {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    return (
        <Image  src={`${API_URL}${url}`} alt={'icon'} height={40} width={40}/>
    )
}

interface serviceItemType {
    id: number;
    icon: object;
    title: string;
    description: string;
}

function ServiceItem({icon, title, description}: serviceItemType) {
    return (
        <div className={"bg-lightgray hover:bg-white transition-colors duration-500 p-3 rounded-lg cursor-pointer"}>
            <div className="flex items-center justify-center w-auto">
                <div className={"bg-primary-light rounded-full p-5"}>
                    <div className={"h-10 w-10"}>{icon}</div>
                </div>
            </div>
            <h3 className="mb-2 text-base font-semibold leading-tight text-gray-900 text-center pt-3">{title}</h3>
            <p className="text-sm text-gray-500">{description}</p>
        </div>
    )
}

export default ServicesSection;