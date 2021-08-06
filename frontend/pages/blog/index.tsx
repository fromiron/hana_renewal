import React, {Fragment} from "react";
import publicApi from "../api/publicApi";
import {GetStaticPropsContext} from "next";
import BlogMainSection from "../../components/blog/BlogMainSection";

interface propsType {
    posts: {
        id: number;
        title: string;
        text: string;
        media: {
            id: number;
            url: string;
        }
    }
}


function Blog({posts}: propsType) {
    console.log(posts)
    console.log()
    return (
        <Fragment>
            <BlogMainSection posts={posts}/>
            <BlogPagination/>
        </Fragment>
    )
}

export default Blog;


function BlogPagination() {
    return (
        <nav className="pagination w-full bg-lightgray justify-center" role="navigation" aria-label="pagination">
            <a href="#" className="pagination-link" aria-label="Goto previous page">
                <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                     fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6"/>
                </svg>
            </a>
            <a href="#" className="pagination-link" aria-label="Goto page 1">1</a>
            <a href="#" className="pagination-link" aria-label="Goto page 2">2</a>
            <a href="#" className="pagination-disabled" aria-label="Goto page 3">3</a>
            <span className="pagination-disabled">&hellip;</span>
            <a href="#" className="pagination-link pagination-active" aria-label="Page 5" aria-current="page">5</a>
            <a href="#" className="pagination-link" aria-label="Goto page 6">6</a>
            <a href="#" className="pagination-link" aria-label="Goto next page">
                <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                     fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"/>
                </svg>
            </a>
        </nav>
    )
}

export async function getStaticProps(context: GetStaticPropsContext) {
    const postData = await publicApi('/posts');
    return {props: {posts: postData}}
}
