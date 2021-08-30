import React from "react";
import publicApi from "../api/publicApi";
import {GetStaticPropsContext} from "next";
import BlogMainSection from "../../components/blog/BlogMainSection";
import {IBlogProps} from "../../components/blog/blogInterface";
import BlogPagination from "../../components/blog/BlogPagination";
import BlogHeader from "../../components/blog/BlogHeader";

function Blog({posts, tags}: IBlogProps) {

    return (
        <div>
            <BlogHeader title={"Hanalog"} text={"うさぎ情報を共有いたします。"} tags={tags}/>
            <BlogMainSection posts={posts}/>
            <BlogPagination count={posts.length}/>
        </div>
    )
}

export default Blog;


export async function getStaticProps(context: GetStaticPropsContext) {
    const postData = await publicApi('/posts?_sort=id:DESC&_limit=6');
    const tags = await publicApi('/tags');
    return {props: {posts: postData, tags: tags}}
}

