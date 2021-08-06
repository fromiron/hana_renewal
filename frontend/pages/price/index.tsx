import React from "react";
import PricingSection from "../../components/PricingSection";
import {GetStaticPropsContext} from "next";
import publicApi from "../api/publicApi";


function index ({plans}:any){
    return  <PricingSection plans={plans}/>

}


export default index;


export async function getStaticProps(context: GetStaticPropsContext) {
    const [planData] = await Promise.all(
        [
            publicApi('/plans'),
        ]);
    return {
        props: {
            plans: planData,
        },
        revalidate: 60
    }
}