import React from "react";

interface ITagIcon {
    name: string;
}

function TagIcon({name}: ITagIcon) {
    return (
        <span className="text-gray hover:text-primary bg-lightgray hover:bg-white inline-flex items-center justify-center px-2 py-1 my-1 mr-1 text-xs leading-none cursor-pointer rounded-full">#{name}</span>
    )
}

export default TagIcon;