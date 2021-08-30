import React, {useState} from "react";

function ContactSection() {
    const [checked, setChecked] = useState<string>('サービス内容相談');

    return (
        <section className="w-full">
            <div className="container px-5 py-24 mx-auto text-base-content">
                <div className="flex flex-col text-center w-full mb-12">
                    <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-primary">Contact Us</h2>
                    <p className="lg:w-2/3 mx-auto leading-relaxed ">カスタマイズプラン、日程などお気軽にお問合せください</p>
                </div>
                <div className="lg:w-1/2 md:w-2/3 mx-auto">
                    <div className="flex flex-wrap -m-2">
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label htmlFor="name" className="leading-7 text-sm ">Name</label>
                                <input type="text" id="name" name="name"
                                       className="w-full bg-base-200 rounded border-transparent border-2  focus:border-primary focus:text-accent-focus focus:bg-white outline-none py-1 px-3 leading-8 transition-colors duration-500 ease-in-out"/>
                            </div>
                        </div>
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label htmlFor="email" className="leading-7 text-sm ">Email</label>
                                <input type="email" id="email" name="email"
                                       className="w-full bg-base-200 rounded border-transparent border-2  focus:border-primary focus:text-accent-focus focus:bg-white outline-none py-1 px-3 leading-8 transition-colors duration-500 ease-in-out"/>
                            </div>
                        </div>

                        <div className="py-2 px-5 md:flex">
                            <label className="flex items-center mr-5">
                                <input type="radio" className="form-radio" name="contact_type" value="サービス内容相談"
                                       defaultChecked/>
                                <span className="ml-2 cursor-pointer">サービス内容相談</span>
                            </label>
                            <label className="flex items-center mr-5">
                                <input type="radio" className="form-radio" name="contact_type" value="日程相談"/>
                                <span className="ml-2 cursor-pointer">日程相談</span>
                            </label>
                            <label className="flex items-center mr-5">
                                <input type="radio" className="form-radio" name="contact_type" value="その他"/>
                                <span className="ml-2 cursor-pointer">その他</span>
                            </label>

                        </div>

                        <div className="p-2 w-full">
                            <div className="relative">
                                <label htmlFor="message" className="leading-7 text-sm text-gray">Message</label>
                                <textarea id="message" name="message"
                                          className="w-full bg-base-200 rounded border-transparent border-2 h-48 focus:border-primary focus:text-accent-focus focus:bg-white outline-none py-1 px-3 leading-8 transition-colors duration-500 ease-in-out"/>
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <button
                                className="flex mx-auto text-white bg-primary border-0 py-2 px-8 focus:outline-none hover:bg-primary-dark rounded text-lg transition-colors duration-500 ease-in-out">送信
                            </button>
                        </div>
                        <div className="p-2 w-full pt-8 mt-8 border-t text-center">
                            <a className="text-point">rabbithana@email.com</a>
                            <p className="leading-normal my-5">
                                <br/>SNSでのお問合せも可能！</p>
                            <span className="inline-flex">
            <a className="text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                   className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
              </svg>
            </a>
            <a className="ml-4 text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                   className="w-5 h-5" viewBox="0 0 24 24">
                <path
                    d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
              </svg>
            </a>
            <a className="ml-4 text-gray-500">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                   className="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"/>
              </svg>
            </a>
            <a className="ml-4 text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                   className="w-5 h-5" viewBox="0 0 24 24">
                <path
                    d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>
              </svg>
            </a>
          </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection;