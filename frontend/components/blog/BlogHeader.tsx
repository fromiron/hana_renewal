import {IBlogSectionHeader} from "./blogInterface";
import React from "react";
import TagIcon from "./TagIcon";

function BlogHeader({title, text, tags}: IBlogSectionHeader) {
    return (
        <div className="container px-5 pt-7  mx-auto">
            <div className="h-1 bg-gray-200 rounded overflow-hidden">
                <div className="w-24 h-full bg-primary"/>
            </div>
            <div className="py-2">
                <h2 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">{title}</h2>
            </div>
            <div className="flex flex-wrap">
                {tags.map(tag => <TagIcon key={tag.id.toString()} name={tag.name}/>)}
            </div>
        </div>
    )
}

export default BlogHeader;