import React from "react";
import Image from "next/image";
import datetimeFormatter from "../../utils/datetimeFormatter";
import {IBlogSectionHeader, IPostArray, IPost} from "./blogInterface";
import TagIcon from "./TagIcon";
import Link from "next/link";


function BlogMainSection({posts}: IPostArray) {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-12 mx-auto">
                <BlogSectionHeader title={"Hanalog"} text={"うさぎ情報を共有いたします。"}/>
                <ul className="flex flex-wrap -mx-4 -mb-10 -mt-7">
                    {posts.map((post: IPost) => <Post key={post.id} id={post.id} title={post.title}
                                                      excerpt={post.excerpt} media={post.media}
                                                      tags={post.tags}
                                                      created_at={post.created_at}/>)}
                </ul>
            </div>
        </section>
    )
}


function BlogSectionHeader({title, text}: IBlogSectionHeader) {
    return (
        <div className="flex flex-col">
            <div className="h-1 bg-gray-200 rounded overflow-hidden">
                <div className="w-24 h-full bg-primary"/>
            </div>
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                <h2 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">{title}</h2>
                <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">{text}</p>
            </div>
        </div>
    )
}


function Post({id, title, tags, media, excerpt, created_at}: IPost) {
    console.log(id, media)

    const imageUrl = () => {
        if (media !== null && media?.url && media?.url.length > 0) {
            return process.env.NEXT_PUBLIC_API_URL + media?.url as string;
        } else {
            return process.env.NEXT_PUBLIC_EMPTY_IMAGE_URL as string;
        }
    }

    return (
        <li className="p-4 md:w-1/3 sm:mb-0 mb-6 rounded-xl bg-white hover:bg-lightgray transition-colors duration-500 ease-in-out cursor-pointer">
            <Link href={`/blog/${id}`}>
                <a>
                    <div className="rounded-lg overflow-hidden h-48 relative ">
                        <Image alt="media" src={imageUrl()} layout={'fill'}
                               objectFit={'cover'}/>
                    </div>
                    <h2 className="text-xl font-medium title-font text-gray-900 mt-5">{title}</h2>
                    <div>{datetimeFormatter(created_at)}</div>
                    <p className="text-base leading-relaxed mt-2 break-all">
                        {excerpt}
                    </p>

                    <div>
                        {tags?.map(tag => <TagIcon key={tag.id.toString()} name={tag.name}/>)}
                    </div>
                </a>
            </Link>
        </li>
    )
}

export default BlogMainSection;