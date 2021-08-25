import React, {Fragment} from "react";
import publicApi from "../api/publicApi";
import {GetStaticPropsContext} from "next";
import BlogMainSection from "../../components/blog/BlogMainSection";
import {IPostArray} from "../../components/blog/blogInterface";
import BlogPagination from "../../components/blog/BlogPagination";


function Blog({posts}: IPostArray) {
    return (
        <Fragment>
            <BlogMainSection posts={posts}/>
            <BlogPagination/>
        </Fragment>
    )
}

export default Blog;


export async function getStaticProps(context: GetStaticPropsContext) {
    const postData = await publicApi('/posts');
    return {props: {posts: postData}}
}

