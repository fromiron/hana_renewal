import React from "react";
import Image from "next/image";

interface postType {
    id: number;
    title: string;
    media: {
        id: number;
        url: string;
    }
    excerpt: string;
    created_at:string;
}

function BlogMainSection({posts}: any) {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <BlogSectionHeader text={"blaasdadasdasdjkqewhrfiqwj!"} title={"posts!"}/>
                <ul className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                    {posts.map((post: postType) => <Post key={post.id} id={post.id} title={post.title}
                                                         excerpt={post.excerpt} media={post.media} created_at={post.created_at}/>)}
                </ul>
            </div>
        </section>
    )
}

interface blogSectionHeader {
    title: string;
    text: string;
}

``

function BlogSectionHeader({title, text}: blogSectionHeader) {
    return (
        <div className="flex flex-col">
            <div className="h-1 bg-gray-200 rounded overflow-hidden">
                <div className="w-24 h-full bg-indigo-500"/>
            </div>
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                <h2 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">{title}</h2>
                <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">{text}</p>
            </div>
        </div>
    )
}


function Post({id, title, media, excerpt, created_at}: postType) {
    const formattedDate = new Date(created_at).toLocaleDateString('ja-JP')
    return (
            <li className="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div className="rounded-lg overflow-hidden h-48 relative">
                    <Image alt="media" src={process.env.NEXT_PUBLIC_API_URL + media.url} layout={'fill'}
                           objectFit={'cover'}/>
                </div>
                <h2 className="text-xl font-medium title-font text-gray-900 mt-5">{title}</h2>
                <div>{formattedDate}</div>

                <p className="text-base leading-relaxed mt-2">
                    {excerpt}
                </p>
                <a href={`/blog/${id}`} className="text-indigo-500 inline-flex items-center mt-3">Learn More
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                         strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                </a>
            </li>
    )
}

export default BlogMainSection;