import React from "react";


const CommentList = ({ comments }) => {

    const renderedComments = comments.map(comment => {
        let content;

        if (comment.status === 'approved') {
            content = comment.content
        }

        else if (comment.status === 'pending') {
            content = "This comment is waiting moderation";
        }

        else if (comment.status === 'rejected') {
            content = "This comment has benn rejected";
        }
        
        return (

            <li style={{marginLeft: "50px"}} className='list-item' key={comment.id}>{content}</li>
        )
    })
    

    return (
        <ul style={{listStyleType: "circle"}} className="list">
            { renderedComments }
        </ul>
    )
}

export default CommentList;