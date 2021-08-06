import React from "react";
import ServicesSection from "../../components/ServicesSection";
import {GetStaticPropsContext} from "next";
import publicApi from "../api/publicApi";


function index({services}: any) {
    return <ServicesSection services={services}/>
}


export default index;


export async function getStaticProps(context: GetStaticPropsContext) {
    const [serviceData] = await Promise.all(
        [
            publicApi('/services')
        ]);
    return {
        props: {
            services: serviceData,
        },
        revalidate: 60
    }
}