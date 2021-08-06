import React from "react";
import publicApi from "../api/publicApi";
import MarkdownRenderer from "../../utils/markdownRenderer";
import {GetStaticPropsContext} from "next";
import datetimeFormatter from "../../utils/datetimeFormatter";

interface propsType {
    post: {
        id: number;
        title: string;
        text: string;
        media: {
            id: number;
            url: string;
        }
        created_at:string;
    }
}



function PostDetail({post}: propsType) {
    const {title, text, created_at} = post;
    return (
        <article className="markdown prose lg:prose-xl px-4 py-24 mx-auto max-w-7xl post-detail">
            <MarkdownRenderer content={`# ${title}`}/>
            <span>{datetimeFormatter(created_at)}</span>
            <MarkdownRenderer content={text}/>
            <a href="/blog">back</a>
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