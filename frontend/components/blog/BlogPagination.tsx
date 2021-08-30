import React from "react";
import {ICount} from "./blogInterface";

function BlogPagination({count}: ICount) {
    console.log(count)

    return (

        <div className="btn-group">
            <button className="btn">Previous</button>
            <button className="btn">1</button>
            <button className="btn btn-active">2</button>
            <button className="btn">3</button>
            <button className="btn">4</button>
            <button className="btn">Next</button>
        </div>

    )
}

export default BlogPagination;