import ReactMarkdown from 'react-markdown'
import React from "react";
import gfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

interface contentType {
    content: string;
}

function MarkdownRenderer({content}: contentType) {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    //image server addressをapiに変更
    const transformImageUri = (content: string) =>
        /^https?:/.test(content)
            ? content
            : API_URL + content
    return (
        <ReactMarkdown transformImageUri={transformImageUri} children={content}
                       linkTarget={'_blank'} rehypePlugins={[rehypeRaw]} remarkPlugins={[gfm]}
        />
    )
}


export default MarkdownRenderer;