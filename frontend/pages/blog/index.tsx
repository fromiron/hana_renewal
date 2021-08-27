import React, {Fragment} from "react";
import publicApi from "../api/publicApi";
import {GetStaticPropsContext} from "next";
import BlogMainSection from "../../components/blog/BlogMainSection";
import {ICount, IPostArray} from "../../components/blog/blogInterface";
import BlogPagination from "../../components/blog/BlogPagination";

function Blog({posts}: IPostArray) {
    return (
        <Fragment>
            <BlogMainSection posts={posts}/>
            <BlogPagination count={posts.length}/>
        </Fragment>
    )
}

export default Blog;


export async function getStaticProps(context: GetStaticPropsContext) {
    const postData = await publicApi('/posts?_sort=id:DESC&_limit=9');

    return {props: {posts: postData}}
}

