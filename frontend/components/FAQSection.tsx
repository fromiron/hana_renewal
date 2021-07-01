import React from "react";


interface faqType {
    id: number;
    question: string;
    answer: string;
}

function FAQSection({faqs}: any) {
    const faqList = faqs ?? [];
    let leftList = faqList.filter((faq: faqType, index: number) => index % 2 === 0);
    let rightList = faqList.filter((faq: faqType, index: number) => index % 2 !== 0);
    return (
        <section className="pt-20 pb-24 mx-auto max-w-7xl md:px-4">
            <h1 className="mb-8 text-xl font-bold md:text-3xl">Frequently Asked Questions</h1>
            <div className="grid grid-cols-1 gap-0 text-sm md:grid-cols-2 md:gap-5">

                <div className="faq-left">
                    {leftList.map((faq:faqType) => <FAQItem id={faq.id} question={faq.question} answer={faq.answer}
                                                     key={faq.id}/>)}
                </div>
                <div className="faq-right">
                    {rightList.map((faq:faqType) => <FAQItem id={faq.id} question={faq.question} answer={faq.answer}
                                                      key={faq.id}/>)}
                </div>
            </div>

        </section>
    )
}


function FAQItem({id, question, answer}: faqType) {

    function openText() {
        if (process.browser) {
            document.getElementById('faq'+id)?.classList.toggle('hidden');
        }
    }

    return (
        <div className="px-4 mb-4 bg-lightgray rounded ">
            <button
                className="flex items-center justify-start w-full py-4 pr-1 font-bold text-left text-gray-800 outline-none hover:text-primary focus:text-primary focus:outline-none"
                onClick={openText}
            >
                <svg
                    className="flex-none w-4 h-4 mr-2 transition transform"
                    aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M9 5l7 7-7 7"/>
                </svg>
                {question}
            </button>
            <div className="pb-5 ml-6 text-gray overflow-hidden hidden transition transform" id={'faq'+id}>
                {answer}
            </div>
        </div>
    )
}

export default FAQSection;