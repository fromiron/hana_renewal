import ReactMarkdown from 'react-markdown'
import React from "react";

interface contentType {
    content: string;
}

function MarkdownRenderer({content}: contentType) {
    return (
        <ReactMarkdown>{content}</ReactMarkdown>
    )
}


export default MarkdownRenderer;