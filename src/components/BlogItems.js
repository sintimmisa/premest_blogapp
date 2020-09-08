import React from 'react';



const BlogList = (props) => {
    
    return (
        <div classNaem="container">
            <div className="row">
                <div className="col-lg-12">

                    <div className="card ">{props.post.length > 0 ? (props.post.map(item => (
                <div key={item.id}>
                            <h4 className="card-header">{item.title}</h4>
                            <div className="card-body">
                <h6>{item.author}</h6>
                    <p>{item.content}</p>
                            </div>
                            </div>
            ))) : (
                    <span>No more post..</span>
            )}</div>
                </div>
                </div>
            
        </div>
    )


}
export default BlogList;