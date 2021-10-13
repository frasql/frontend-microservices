import React, {useState} from "react";


const CommentCreate = ({postId}) => {
    const [content, setContent] = useState('');


    async function FetchComment(url, data) {
        let options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            mode: "cors",
            body: JSON.stringify(data)
        }

        const req = new Request(url, options);

        const resp = await fetch(req);

        if (resp.ok) {
            let result = await resp.json();
            return result
        } else {
            console.log("POST Erorr")
        }

    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(content)
        FetchComment(`http://posts.com/posts/${postId}/comments`, {
            content
        }).then(resp => {console.log(resp)})
    }

    return (
        <div style={{ marginTop: "15px" }}>
            <form method="POST" className="form" onSubmit={onSubmit}>
                <div className="field">
                    <label className="lable">Create Comment</label>
                    <div className="control">
                        <input value={content} onChange={e => setContent(e.target.value)} className="input" type="text"/>
                    </div> 
                </div>
                <button className="button is-info">Submit</button>
            </form>
        </div>
    )

}

export default CommentCreate;