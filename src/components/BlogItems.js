import React from 'react';



const BlogList = (props) => {
    
    return (
        <div>
            <div >{props.post.length > 0 ? (props.post.map(item => (
                <div className="row" key={item.id}>
                <h4>{item.title}</h4>
                <h6>{item.author}</h6>
                    <p>{item.content}</p>
                </div>
            ))) : (
                    <span>No more post..</span>
            )}</div>
        </div>
    )


}
export default BlogList;