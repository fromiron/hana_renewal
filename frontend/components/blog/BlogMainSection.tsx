import React from "react";
import Image from "next/image";
import datetimeFormatter from "../../utils/datetimeFormatter";
import {IPost, IPostArray} from "./blogInterface";
import TagIcon from "./TagIcon";
import Link from "next/link";


function BlogMainSection({posts}: IPostArray) {
    return (
        <section className="pt-4 text-gray-600">
            <div className="px-5 py-6 ">
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4">
                    {posts.map((post: IPost) => <Post key={post.id} id={post.id} title={post.title}
                                                      excerpt={post.excerpt} media={post.media}
                                                      tags={post.tags}
                                                      created_at={post.created_at}/>)}
                </ul>
            </div>
        </section>
    )
}


function Post({id, title, tags, media, excerpt, created_at}: IPost) {

    const imageUrl = () => {
        if (media !== null && media?.url && media?.url.length > 0) {
            return process.env.NEXT_PUBLIC_API_URL + media?.url as string;
        } else {
            return process.env.NEXT_PUBLIC_EMPTY_IMAGE_URL as string;
        }
    }

    return (
        <li className="p-4 rounded-xl bg-white hover:bg-gray transition-colors duration-500 ease-in-out cursor-pointer">
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