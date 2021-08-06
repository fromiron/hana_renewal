import React from "react";
import publicApi from "../api/publicApi";
import MarkdownRenderer from "../../utils/markdownRenderer";
import {GetStaticPropsContext} from "next";
import datetimeFormatter from "../../utils/datetimeFormatter";
import Link from 'next/link';

interface propsType {
    post: {
        id: number;
        title: string;
        text: string;
        media: {
            id: number;
            url: string;
        }
        created_at: string;
    }
}


function PostDetail({post}: propsType) {
    const {title, text, created_at} = post;
    return (
        <article className="prose lg:prose-xl px-4 py-4 mx-auto max-w-7xl post-detail">
            <div className="w-full mx-auto text-center "><h1>{title}</h1>
                <p className="text-gray-700">
                    Written by
                    <span className="text-primary">&nbsp; Rabbit Sitter HANA&nbsp; </span>
                    on <time itemProp="datePublished dateModified"
                             dateTime={created_at}>{datetimeFormatter(created_at)}</time>
                </p>
            </div>
            <div className="mx-auto flex justify-center">
                <div className="max-w-lg">
                    <MarkdownRenderer content={text}/>
                    <Link href="/blog">back</Link>
                </div>
            </div>
        </article>
    )
}

export default PostDetail;

export async function getStaticProps(context: GetStaticPropsContext) {
    const {params} = context;
    const {id}: any = params;
    const postData = await publicApi(`/posts/${id}`);
    return {
        props: {
            post: postData
        },
        revalidate: 600
    }
}


export async function getStaticPaths(context: GetStaticPropsContext) {
    const posts = await publicApi('/posts');
    return {
        paths: posts.map((post: { id: number; }) => ({
            params: {id: post.id.toString()}
        })),
        fallback: false
    }
}